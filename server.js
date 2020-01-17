const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
const server = express()
server.use(express.json())
const PORT = process.env.PORT || 4000




server.listen(PORT ,() => console.log('server ok'))