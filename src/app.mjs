import express from "express";
import cors from "cors";
import { boleto } from "./controllers/boleto.controller.mjs";
import isValidCode from "./middlewares/isValidCode.mjs";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swaggerDocument.json" assert { type: "json" };

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get("/", (req, res) => res.send({ message: "Desafio Ewally" }));
app.get("/boleto/:code", isValidCode, boleto);

app.listen(PORT, () => console.log(`App is running on ${PORT}`));

export default app;
