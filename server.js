const express = require('express')
const app = express()

app.use(express.static("public"));

app.get('/hello', function (req, res) {
  res.send('Hello World')
})

app.get('/api/news', function (req, res) {
  let api_response = "";

  axios.get('https://cors-anywhere.herokuapp.com/https://coviddash-api.herokuapp.com/api/v1/test').then(response => {
      console.log(response);
      api_response = response.data.message;
  })

  res.send(api_response);
})

app.listen(process.env.PORT || 5000);
