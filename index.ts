import express from "express";
import { AdminRoute, VandorRoute } from "./routers";
import bodyParser from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";
import { MONGO_URI } from "./config";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", AdminRoute);
app.use("/vandor", VandorRoute);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then((result) => {
    console.log("Connect DB successfully!");
  })
  .catch((err) => console.log("Error: " + err));

app.listen(8000, () => {
  console.log("App listing on port 8000");
});
