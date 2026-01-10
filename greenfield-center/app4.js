"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transfer_route_1 = __importDefault(require("./transfer.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/loyalty", transfer_route_1.default); // ✅ prefix only here
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
