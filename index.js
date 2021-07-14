var express = require('express');
//const dotendv = require('dotendv');
//dotendv.config();
var app = express();
var validar = function (req, res, next) {
    console.log(req.ips);
    next();
};
app.get('/', validar, function (req, res) {
    res.send();
});
app.listen(3300);
