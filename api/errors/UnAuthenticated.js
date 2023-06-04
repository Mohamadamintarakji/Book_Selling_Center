import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./customApi.js";
class UnAuthenticated extends CustomAPIError {
  constructor(message) {
    super(message);

    this.statusCodes = StatusCodes.UNAUTHORIZED;
  }
}
export default UnAuthenticated;
