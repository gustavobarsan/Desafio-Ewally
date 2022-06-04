import express from "express"

const PORT = 8080

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.disable("x-powered-by")

app.get('/', (req, res) => res.send({message: "Desafio Ewally"}))
app.get('/boleto/:code')

app.listen(PORT, () => console.log(`Running on <http://localhost:${PORT}>`))

export default app