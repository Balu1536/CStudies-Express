import express from "express";
import transferRouter from "./transfer.route";

const app4 = express();

app4.use(express.json());
app4.use(express.static("public"));
app4.use("/loyalty", transferRouter);

app4.listen(3000, () => {
  console.log("Server running on port 3000");
});
