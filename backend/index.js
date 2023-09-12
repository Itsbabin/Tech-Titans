const connectToMongo = require("./connectdb");
const express = require('express')

connectToMongo();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api',require('./routes/userconnect'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})