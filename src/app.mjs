import express from "express"

const PORT = process.env.PORT || 8080

const app = express()
app.get('/', (req, res) => res.send({message: "Desafio Ewally"}))
// app.get('/boleto/:code')

app.listen(PORT, () => console.log(`App is running on ${PORT}`))

export default app