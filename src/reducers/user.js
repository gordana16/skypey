import { generateUser } from "../static-data.js";

export default (state = generateUser(), action) => state;
