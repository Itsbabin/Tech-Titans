const connectToMongo = require("./connectdb");
const express = require('express')

connectToMongo();

const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/user',require('./routes/userconnect'));
app.use('/api/data',require('./routes/userdata'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})