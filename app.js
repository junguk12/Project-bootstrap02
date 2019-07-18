const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

//static links for Byeolchan
router.get('/buttons01_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/buttons01.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/buttons02_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/buttons02.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/carousel01_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/carousel01.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/collapse01_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/collapse01.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/dropdowns_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/dropdowns.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/image01_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/image01.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/table01_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/table01.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/table02_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/table02.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/try_main_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/try_main.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('//typography01_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/typography01.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/typography02_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/typography02.html'));
    //__dirname : It will resolve to your project folder.
});

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))