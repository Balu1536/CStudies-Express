"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transfer_schema_1 = require("./transfer.schema");
const validate_middleware_1 = require("./validate.middleware");
const db_1 = require("./db");
const router = (0, express_1.Router)();
router.post("/transfer", (0, validate_middleware_1.validate)(transfer_schema_1.TransferSchema), (req, res) => {
    const { fromCustomerId, toCustomerId, points } = req.body;
    const sender = db_1.members.find(m => m.customerId === fromCustomerId);
    if (!sender) {
        return res.status(404).json({ status: "error", error: "Sender not found" });
    }
    const receiver = db_1.members.find(m => m.customerId === toCustomerId);
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
exports.default = router;
