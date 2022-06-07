import express from "express"
import { boleto } from "./controllers/boleto.controller.mjs"
import isValidCode from "./middlewares/isValidCode.mjs"
const PORT = process.env.PORT || 8080

const app = express()
app.get('/', (req, res) => res.send({message: "Desafio Ewally"}))
app.get('/boleto/:code', isValidCode, boleto)

app.listen(PORT, () => console.log(`App is running on ${PORT}`))

export default app