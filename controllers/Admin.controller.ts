import { Request, Response, NextFunction } from "express";
import { VandorDto } from "../dto";
import { Vandor } from "../models";
import { genarateSalt, genaratedPasswordHash } from "../utility";

export const createVandor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    name,
    ownerName,
    email,
    phone,
    address,
    password,
    pincode,
    foodType,
  } = <VandorDto>req.body;

  const existingVandor = await Vandor.findOne({ email });

  if (existingVandor !== null) {
    return res.json({
      message: "A vendor width is email already exits.",
    });
  }

  const salt = await genarateSalt();
  const hashPassword = await genaratedPasswordHash(password, salt);

  const createdVandor = await Vandor.create({
    name,
    ownerName,
    email,
    phone,
    salt: salt,
    address,
    password: hashPassword,
    pincode,
    foodType,
  });

  return res.json(createdVandor);
};

export const getVandors = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {};

export const getVandorById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {};
