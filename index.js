var express = require('express')
var app = express()

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
})
