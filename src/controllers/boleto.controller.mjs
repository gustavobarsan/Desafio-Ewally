import { boletoService } from "../services/boleto.service.mjs"

export const boleto = async (req, res) => {
   try {
    const code = req.params.code 
    const resp = await boletoService(code)
    return res.status(200).send(resp)
   } catch (error) {
       return res.status(500).send("API intern error")
   } 
}