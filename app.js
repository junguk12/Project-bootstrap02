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
router.get('/bootstrap01_byeolchan', function (req, res) {
res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/typography01.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/bootstrap02_byeolchan', function (req, res) {
res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/typography02.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/bootstrap03_byeolchan', function (req, res) {
res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/typography03.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/bootstrap04_byeolchan', function (req, res) {
res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/typography04.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/bootstrap05_byeolchan', function (req, res) {
res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/typography05.html'));
//__dirname : It will resolve to your project folder.
});


app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))