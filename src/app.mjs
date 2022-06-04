import express from "express"

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.disable("x-powered-by")

app.get('/', (req, res) => res.send({message: "Desafio Ewally"}))
// app.get('/boleto/:code')

app.listen(PORT, () => console.log(`App is running`))

export default app