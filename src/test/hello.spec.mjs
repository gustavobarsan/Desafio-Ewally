import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../app.mjs'

const expect = chai.expect()
chai.use(chaiHttp)

const request = chai.request(app)

describe("Hello Ewally", () => {
    it("Challenge Ewally", () => {
        request.get('/', (err, res) => {
            expect(res.body).to.equals('Desafio Ewally')
        })
    })
})