const isValidCode = (req, res, next) => {
    const { code } = req.params
    const codeNumber = Number(code) 

    if (isNaN(codeNumber)) {
        return res.status(400).send({message: "Código inválido."})
    }

    if(code.length < 47 || code.length > 48) {
        if(code.length === 48 && code[0] !== 8) {
            return res.status(400).send({message: "Código inválido."})
        }
        return res.status(400).send({message: "Código inválido."})
    }

    next()
}

export default isValidCode