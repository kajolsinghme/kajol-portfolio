require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./db/conn.js')
const router = require('./routes/router.js')
const app = express()
const port = 6002

app.use(cors())
app.use(express.json())

app.use(router)

app.listen(port,()=>{
    console.log('server starts')
})