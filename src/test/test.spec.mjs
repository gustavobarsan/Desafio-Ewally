import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.test.mjs";

const expect = chai.expect();
chai.use(chaiHttp);

const request = chai.request(app);

describe("Rota Boleto", () => {
  it("Boleto", () => {
    request.get(
      "/boleto/21290001192110001210904475617405975870000002000",
      (err, res) => {
        expect(res.body).to.equals({
          barCode: "21299758700000020000001121100012100447561740",
          amount: "20.00",
          expirateDate: "2018-04-18",
        });
      }
    );
  });
});

describe("Rota Boleto", () => {
  it("Convênio", () => {
    request.get(
      "/boleto/212900011921100012120220607740597587000000200012",
      (err, res) => {
        expect(res.body).to.equals({
          barCode: "21290001192110001212022060774059758700000020",
          amount: "119211.00",
          expirateDate: "2022-06-07",
        });
      }
    );
  });
});

describe("Rota Boleto", () => {
  it("Código inválido mais de 48 caracteres", () => {
    request.get(
      "/boleto/2129000119211000121202206077405975870000002000121",
      (err, res) => {
        expect(res.body).to.equals({ message: "Código inválido" });
      }
    );
  });
});

describe("Rota Boleto", () => {
  it("Código inválido menos de 47 caracteres", () => {
    request.get(
      "/boleto/212900011921100012120220607740597587000000200",
      (err, res) => {
        expect(res.body).to.equals({ message: "Código inválido" });
      }
    );
  });
});

describe("Rota Boleto", () => {
  it("Código inválido caracter diferente de número", () => {
    request.get(
      "/boleto/2129000119211000121202206077405975870000002000A",
      (err, res) => {
        expect(res.body).to.equals({ message: "Código inválido" });
      }
    );
  });
});
