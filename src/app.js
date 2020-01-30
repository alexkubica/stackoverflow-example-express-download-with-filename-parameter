
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/downloadwithoutgoingupindirectory/:facture", function (req, res) {
    var facture = req.params.facture;
    res.download(path.join(__dirname, '/'+facture), "facture.png", function (err) {
        console.log(err);
    });
});

app.get("/downloadfacturemaintenance/:facture", function (req, res) {
    var facture = req.params.facture;
    res.download(path.join(__dirname, '../config/uploads/facture_maintenance/'+facture), "facture.png", function (err) {
        console.log(err);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
