"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferSchema = void 0;
const zod_1 = require("zod");
exports.TransferSchema = zod_1.z.object({
    fromCustomerId: zod_1.z.string().uuid(),
    toCustomerId: zod_1.z.string().uuid(),
    points: zod_1.z.number().int().positive(),
});
