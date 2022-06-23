import { Router } from "express";
import userRouter from "./user-router";
import trainsRouter from "./trains-router";

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use("/users", userRouter);
baseRouter.use("/trains", trainsRouter);

// Export default.
export default baseRouter;
