


const express = require('express');


const app = express();


let validar = function (req, res, next) {


  let token = "Bearer 65a83e72c7e990a3e6565ae8b7cc071c";

  if (req.headers.authorization.indexOf(token) !== -1) {
    
    return res.status(403).send('no es valido')
  }

  next();
}

app.get('/', [validar], (req, res) => {


  res.send('hello');

})

app.listen(3300);