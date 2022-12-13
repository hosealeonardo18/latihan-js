// ambil module express dari node_module 
const express = require('express')
const app = express()

const bodyParser = require('body-parser')

// config port yg digunakan (bebas)
const port = 3000

//ubah req dari frontend ke json
app.use(bodyParser.json())

// routes utama methodenya get
app.get('/', (req, res) => {
    // kirim respon ke browser saat dipanggil
    res.send('Home | Hello World!')
})

app.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})

app.post('/login', (req, res) => {
    console.log({
        requestFromOutside: req.body
    });
    res.send('Login Berhasil!')
})

// untuk running expressJs di port 3000
app.listen(port, (req, res) => {
    console.log(`server running listening port ${port}`)
})