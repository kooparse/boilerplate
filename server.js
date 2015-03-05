var express       = require('express'),
    bodyParser    = require('body-parser'),
    app           = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/js/bundle.js", express.static(__dirname + '/app/js/bundle.js'));
app.use("/public", express.static(__dirname + '/app/public'));


// app.get('/api/v1/test', require('./api/controllers/test_controller')._get);


app.use(function (req, res, next) {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(process.env.PORT || 3000);
