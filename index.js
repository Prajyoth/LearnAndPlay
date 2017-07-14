'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/quiz', function(req, res) {
    if (req.body.result && req.body.result.parameters && req.body.result.parameters.echoText) {
        var speech = "This is a response from webhook";
    }
     
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'my-quiz-backend'
    });
});

restService.get('/sampleget', function(req, res) {
    var speech = "hello node js is working";
     
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'my-quiz-backend'
    });
});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});