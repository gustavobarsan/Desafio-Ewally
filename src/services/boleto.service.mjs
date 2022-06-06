export const boletoService = async (code) => {
    
    if(code.length === 47) {
        const codigoDoBanco = code.slice(0,3)
        console.log('codigo do banco', codigoDoBanco)

        const codigoMoeda = code.slice(3,4)
        console.log('codigo da Moeda', codigoMoeda)
        
        const digitoVerificador = code.slice(32,33)
        console.log(digitoVerificador)
        
        const fatorVencimento = code.slice(33, 37)
        console.log(fatorVencimento)
        
        const valor = code.slice(-10)
        console.log(valor)
        
        const campoLivre = code.slice(4,9) + code.slice(10,20) + code.slice(21,31)
        console.log('campo livre', campoLivre)
        
        const dataFixa = new Date('07/10/1997')
        dataFixa.setDate(dataFixa.getDate()+Number(fatorVencimento))
        
        return {
            barCode: codigoDoBanco + codigoMoeda + digitoVerificador + fatorVencimento + valor + campoLivre,
            amount: Number(Number(valor)/100).toFixed(2),
            expirateDate: dataFixa.toLocaleDateString().split('/').reverse().join('-')
        }
    }

    // if(code.length === 48) {}
}