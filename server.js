const express = require('express')
const axios = require('axios')
const app = express()
const path = require('path')

app.use(express.static("/api/news"));

if (process.env.NODE_ENV === 'production') {
  console.log('running in production!');
  app.use(express.static('client/build'));

  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
  } );
}

app.get('/api/news', function (req, res) {
  let api_response = "";

  try{
    axios.get('https://coviddash-backend.herokuapp.com/tweets',{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
    .then(response => {
    	console.log(response.data)
      api_response = response.data;
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
