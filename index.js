const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const dotenv = require('dotenv');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
//Used to post json objects
app.use(express.json());

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

dotenv.config();



app.get('/',(req, res)=>{
    const secretKey = process.env.RECAPTCHA;
    console.log(secretKey);
    console.log('here');
    res.send('here');
    res.sendFile(path.join(__dirname, '/index.html'));
    res.send('here');

});


app.post('/subscribe', (req, res) => {
    if (
        req.body.captcha === undefined ||
        req.body.captcha === '' ||
        req.body.captcha === null
    ) 
    {
        return res.json({ "success": false, "msg": "Please select captcha" });
    }

    console.log(req.body.name);
    console.log(req.body.email);

    //Secret key
    const secretKey = process.env.RECAPTCHA;
    console.log(secretKey);

    //Verify URL
    const verifyURL = `https://google.com/recaptcha/api/siteverify?secret=
    ${secretKey}&response=${req.body.captcha}&remoteip=${req.socket.remoteAddress}`;

    //Make request to Verify URL
    request(verifyURL, (err, response, body) => {
        body = JSON.parse(body);

        //If not successful
        if (body.success != undefined && !body.success) {
            return res.json({ "success": false, "msg": "Failed captcha verification" });
        }

        document.getElementById("form").submit();

        //If success
        return res.json({ "success": true, "msg": "Captcha passed" });
    });
});

app.get('/contact.php',(req, res)=>{
    res.send('<h1>Test Page</h1>')
});

app.get('/emailSuccess',(req, res)=>{
    res.sendFile(path.join(__dirname, 'views/emailSuccess.html'));
});

app.get('/project1',(req, res)=>{
    res.sendFile(path.join(__dirname, '/views/freeFromageGame.html'));
});

app.get('/project2',(req, res)=>{
    res.sendFile(path.join(__dirname, 'views/spaceSHMUPGame.html'));
});

app.get('/project3',(req, res)=>{
    res.sendFile(path.join(__dirname, 'views/rollABallGame.html'));
});

app.get('/test',(req, res)=>{
    res.sendFile(path.join(__dirname, 'UnitySpaceSHMUPWebGame/unityLaunch.html'));
});


app.listen(process.env.PORT || 5000, ()=> {
    console.log(process.env.RECAPTCHA);
});
