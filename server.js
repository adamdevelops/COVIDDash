const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.static("public"));

app.get('/hello', function (req, res) {
  res.send('Hello World')
})

app.get('/api/news', function (req, res) {
  let api_response = "";

  try{
    axios.get('https://coviddash-api.herokuapp.com/api/v1/test',{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
    .then(response => {
    	console.log(response.data.message)
      api_response = response.data.message;
      res.send(api_response);
    })
    .catch(error => {
        console.log(error.response)
    });
  } catch (err){
    console.log(err)
    res.send("error", err)
  }

  // axios.get('https://cors-anywhere.herokuapp.com/https://coviddash-api.herokuapp.com/api/v1/test').then(response => {
  //     console.log(response);
  //     api_response = response.data.message;
  // })
  //
  // res.send(api_response);
})

app.listen(process.env.PORT || 5000);
