export const boletoService = async (code) => {
    
    if(code.length === 47) {
        // const codigoDoBanco =
        // const codigoMoeda =
        // const digitoVerificador =
        const valor = code.slice(-10)
        console.log(valor)
        const fatorVencimento = code.slice(33, 37)
        console.log(fatorVencimento)
        // campoLivre =
        const dataFixa = new Date('07/10/1997')
        dataFixa.setDate(dataFixa.getDate()+Number(fatorVencimento))
        
        return {
            barCode: '',
            amount: Number(Number(valor)/100).toFixed(2),
            expirateDate: dataFixa.toLocaleDateString().split('/').reverse().join('-')
        }
    }

    // if(code.length === 48) {}
}