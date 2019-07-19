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

router.get('/inputs01_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/inputs01.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/inputs02_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/inputs02.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/inputs03_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/inputs03.html'));
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

router.get('/try_form01_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/try_form01.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/try_form02_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/try_form02.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/try_form03_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/try_form03.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/try_form04_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/try_form04.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/try_main_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/try_main.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/typography01_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/typography01.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/typography02_byeolchan', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/typography02.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/action_input01', function (req, res) {
    console.log(req.query.email); //backend-part receives data
    res.send('Request parameters : ' + req.query.email) //return received data to frontend in html format
});

router.get('/action_input02', function (req, res) {
    console.log(req.query.email); //backend-part receives data
    res.send('Request parameters : ' + req.query.email) //return received data to frontend in html format
});

router.get('/action_input03', function (req, res) {
    console.log(req.query.email); //backend-part receives data
    res.send('Request parameters : ' + req.query.username + ', ' + req.query.text) //return received data to frontend in html format
});

router.get('/action_try_form01', function (req, res) {
    console.log(req.query.email, req.query.password, req.query.check1); //backend-part receives data
    res.send('Request parameters : ' + req.query.email + ', ' + req.query.password + ', ' + req.query.check1) //return received data to frontend in html format
});

router.get('/action_try_form02', function (req, res) {
    console.log(req.query.email, req.query.passwprd, req.query.text); //backend-part receives data
    res.send('Request parameters : ' + req.query.email + ', ' + req.query.password + ', ' + req.query.text) //return received data to frontend in html format
});

router.get('/action_try_form03', function (req, res) {
    console.log(req.query.numbers); //backend-part receives data
    res.send('Request parameters : ' + req.query.numbers) //return received data to frontend in html format
});

router.get('/action_try_form04', function (req, res) {
    console.log(req.query.email); //backend-part receives data
    res.send('Request parameters : ' + req.query.username + ', ' + req.query.text) //return received data to frontend in html format
});


app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))