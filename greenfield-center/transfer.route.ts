import { Router, Request, Response } from "express";
import { TransferSchema } from "./transfer.schema";
import { validate } from "./validate.middleware";
import { members } from "./db";

const router = Router();

router.post("/transfer", validate(TransferSchema), (req: Request, res: Response) => {
  const { fromCustomerId, toCustomerId, points } = req.body;

  const sender = members.find(m => m.customerId === fromCustomerId);
  if (!sender) {
    return res.status(404).json({ status: "error", error: "Sender not found" });
  }

  const receiver = members.find(m => m.customerId === toCustomerId);
  if (!receiver) {
    return res.status(404).json({ status: "error", error: "Receiver not found" });
  }

  if (sender.points < points) {
    return res.status(400).json({ status: "error", error: "Insufficient points" });
  }

  sender.points -= points;
  receiver.points += points;

  res.json({
    status: "success",
    data: { fromCustomerId, toCustomerId, transferredPoints: points }
  });
});

export default router;
