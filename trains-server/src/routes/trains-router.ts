import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";

import userService from "@services/user-service";
import { ParamMissingError } from "@shared/errors";
import trainService from "../services/train-service";

trainService.loadAllData();

// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
  get: "/all",
  add: "/add",
  update: "/update",
  delete: "/delete/:id",
} as const;

/**
 * Get all trains.
 */
// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get(p.get, (_: Request, res: Response) => {
  const trains = trainService.getAll();
  return res.status(OK).json({ trains });
});

// Export default
export default router;
