const express = require('express')
const app = express()

app.use(express.static("public"));

app.get('/hello', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT || 5000);
