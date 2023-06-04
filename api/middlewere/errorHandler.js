import { StatusCodes } from "http-status-codes";

const errorHandler = (err, req, res, next) => {
  const defaultError = {
    statusCodes: err.statusCodes || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong,try again later",
  };
  if (err.name === "ValidationError") {
    defaultError.statusCodes = StatusCodes.BAD_REQUEST;
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
  }
  if (err.code === 11000) {
    defaultError.msg = `${Object.keys(err.keyValue)} already used`;
  }
  res.status(defaultError.statusCodes).json({ msg: defaultError.msg });
};

export default errorHandler;
