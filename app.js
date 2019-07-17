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
res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/bootstrap01.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/bootstrap02_byeolchan', function (req, res) {
res.sendFile(path.join(__dirname + '/views/bootstrap_byeolchan/bootstrap02.html'));
//__dirname : It will resolve to your project folder.
});

//static links for Junguk
//Your code goes here...
router.get('/colors-images', function (req, res) {
res.sendFile(path.join(__dirname + '../views/bootstrap_junguk/colors-images.html'));
//__dirname : It will resolve to your project folder.
});
    

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))