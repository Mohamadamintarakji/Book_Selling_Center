import dotenv from "dotenv";
dotenv.config();
import express from "express";
import "express-async-errors"; //must be in the first
import path from "path";
const __dirname = path.resolve();
import authRouter from "./routes/authRoutes.js";
import client from "./routes/client.js";
import dashboardRouter from "./routes/dashboard.js";
import cors from "cors";
import notFound from "./middlewere/not-found.js";
import errorHandler from "./middlewere/errorHandler.js";
import connectDB from "./db/connect.js";
import morgan from "morgan";
import multer from "multer";
import cookieParser from "cookie-parser";
import authenticateUser from "./middlewere/auth.js";
import checkUser from "./middlewere/getUser.js";
import jwt from "jsonwebtoken";
import session from "express-session";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/img/");
  },
  // filename: (req, file, cb) => {
  //   const fileName = `${Date.now()}_${file.originalname.replace(
  //     /\s+/g,
  //     "-"
  //   )}+gfg`;
  //   cb(null, fileName);
  // },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + ".png");
  },
});
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(authRouter);
app.use(client);
app.use("/dashboard", dashboardRouter);
// app.use(morgan("dev"));

app.use(
  session({
    secret: "User", // Encryption key
    resave: false,
    saveUninitialized: false,
    cookie: {
      //  session End Time
      maxAge: 3600000,
    },
  })
);
app.use(multer({ storage: storage }).array("image", 10));
app.use(express.static("node_modules"));
app.use(express.static(path.join(__dirname, "public")));
app.use(notFound);
app.use(errorHandler);

// app.use(express.static(path.resolve(__dirname, "./client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log("connected");
    });
  } catch (e) {
    console.log(e);
  }
};
start();
