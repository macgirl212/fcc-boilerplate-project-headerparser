// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
const os = require('os')

app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/whoami", (req, res) => {
  let address = os.networkInterfaces()
  let language = req.headers['accept-language']
  let software = req.headers['user-agent']
  res
    .status(200)
    .json({
    ipaddress: address.lo0[0].address,
    language: language,
    software: software
  });
});

const port = process.env.PORT || 3000

// listen for requests :)
app.listen(port, function () {
  console.log(`Your app is listening on port ${port}`);
});
