import bcrypt from "bcrypt";

export const genarateSalt = async () => {
  return await bcrypt.genSalt();
};

export const genaratedPasswordHash = async (password: string, salt: string) => {
  return await bcrypt.hash(password, salt);
};
