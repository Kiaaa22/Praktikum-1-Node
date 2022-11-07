const express = require("express") //memanggil library express
const bodyParser = require("body-parser") //memanggil body parser
const cors = require("cors") //memanggil library cors
const { listen } = require("express/lib/application")
const app = express()

// penggunaan body parser untuk ekstrak data request berformat json
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.get("/test", (req, res) => {

    let response = {
        massage: "Ini end-point pertama",
        method: req.method,
        code: res.statusCode
    }
    res.json(response)
})



// end-point "/bujur_sangkar" dengan method POST
app.post("/bujur_sangkar", (req, res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

/* Nomor 1 */
app.post("/kubus", (req, res) => {
    let rusuk = req.body.rusuk

    let volume = rusuk * rusuk * rusuk
    let luas = 6 * (rusuk * rusuk)

    let response = {
        Rusuk: rusuk,
        Volume: volume,
        LuasPermukaan: luas
    }

    res.json(response)
})

app.post("/balok", (req, res) => {
    let panjang = req.body.panjang
    let lebar = req.body.lebar
    let tinggi = req.body.tinggi

    let volume = panjang * lebar * tinggi
    let luas = 2 * panjang * lebar + 2 * panjang + tinggi + 2 * lebar * tinggi

    let response = {
        Panjang: panjang,
        Lebar: lebar,
        Tinggi: tinggi,
        Volume: volume,
        Luas: luas
    }
    res.json(response)
})

app.post("/tabung", (req, res) => {
    let jarijari = req.body.jarijari
    let tinggi = req.body.tinggi
    const pie = 3.14

    let volume = pie * jarijari * jarijari * tinggi
    let luas = 2 * pie * jarijari * tinggi + 2 * pie * jarijari * jarijari

    let response = {
        Jarijari: jarijari,
        Tinggi: tinggi,
        Volume: volume,
        Luas: luas
    }
    res.json(response)
})

app.post("/bola", (req, res) => {
    let jarijari = req.body.jarijari
    const pie = 3.14

    let volume = 4 / 3 * pie * jarijari * jarijari * jarijari
    let luas = 4 * pie * jarijari * jarijari

    let response = {
        Jarijari: jarijari,
        Volume: volume,
        Luas: luas
    }
    res.json(response)
})

/* Nomor 2 */
app.get("/convert/celcius/:suhu", (req, res) => {
    let suhu = req.params.suhu

    let reamur = suhu * 4 / 5
    let kelvin = suhu + 273
    let farenheit = (9 / 5 * suhu) + 32

    let response = {
        Reamur: reamur,
        Kelvin: kelvin,
        Farenheit: farenheit
    }
    res.json(response)
})

app.get("/convert/reamur/:suhu", (req, res) => {
    let suhu = req.params.suhu

    let celcius = suhu * 5 / 4
    let kelvin = 5 / 4 * suhu + 273
    let farenheit = (9 / 4 * suhu) + 32

    let response = {
        Celcius: celcius,
        Kelvin: kelvin,
        Farenheit: farenheit
    }
    res.json(response)
})

app.get("/convert/kelvin/:suhu", (req, res) => {
    let suhu = req.params.suhu

    let celcius = suhu - 273
    let reamur = 4 / 5 * (suhu - 273)
    let farenheit = 9 / 5 * (suhu - 273) + 32

    let response = {
        Celcius: celcius,
        Reamur: reamur,
        Farenheit: farenheit
    }
    res.json(response)
})

app.get("/convert/farenheit/:suhu", (req, res) => {
    let suhu = req.params.suhu

    let celcius = 5 / 9 * (suhu - 32)
    let reamur = 4 / 9 * (suhu - 32)
    let kelvin = 5 / 9 * (suhu - 32) + 273

    let response = {
        Celcius: celcius,
        Reamur: reamur,
        kelvin: kelvin
    }
    res.json(response)
})

/* Nomor 3 */

app.get("/decimal/:number", (req, res) => {
    let number = Number (req.params.number)
    let biner = number.toString(2)
    let octal = number.toString(8)
    let hexa = number.toString(16)

    let response = {
        Decimal: number,
        Biner: biner,
        Octal: octal,
        Hexa: hexa
    }
    res.json(response)
})

/* Nomor 4 */

app.post("/bmi", (req, res) => {
    let tinggi = req.body.tinggi
    let berat = req.body.berat

    let bmi = berat/(tinggi*tinggi) 
    let status;
    if (bmi < 18.5){
        status = "Kekurangan berat badan"
    } else if (bmi < 24.9){
        status = "Normal"
    } else if (bmi <29.9){
        status = "Kelebihan berat badan"
    } else {
        status = "Obesitas"
    }
    let response = {
        Tinggi: tinggi,
        Berat: berat,
        BMI: bmi,
        status: status
    }
    res.json(response)
})

/* Nomor 5 */

app.get("/ganjilgenap/:nomor", (req, res) => {
    let nomor = req.params.nomor

    let bilangan = nomor % 2
    let status
    if (bilangan == 0){
        status = "GENAP"
    } else if (bilangan == 1){
        status = "GANJIL"
    }

    let response = {
        Nomor: nomor,
        bilangan: status
    }
    res.json(response)
})

app.listen(9000, () => {
    console.log("Server run on port 9000");
})
