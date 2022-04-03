const words =require("./routes/words")
const connection = require("./db")
const cors = require('cors')
const express = require('express')
const app = express()

connection()

app.use(express.json())
app.use(cors())

app.use('/api/words', words)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening to port ${port}...`))

