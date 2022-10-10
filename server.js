const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

const Kelas = require("./api/kelas/kelas.router");
app.use('/api/kelas', Kelas)

const Siswa = require('./api/siswa/siswa.router')
app.use('/api/siswa', Siswa)

const Role = require('./api/role/role.router')
app.use('/api/role', Role)

const Petugas = require('./api/petugas/petugas.router')
app.use('/api/petugas', Petugas)

const Pembayaran = require('./api/pembayaran/pembayaran.router')
app.use('/api/pembayaran', Pembayaran)

const Login = require('./middleware/Login')
app.use('/', Login)

const siswaLogin = require('./middleware/Login.siswa')
app.use('/', siswaLogin)

app.listen(7000, () => console.log("server run on port 7000"));
