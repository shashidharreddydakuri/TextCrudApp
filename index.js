const cors = require('cors')
const express = require('express')
const app = express()

app.use(express.json())

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening to port ${port}...`))

