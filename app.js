var express = require('express');
app = express();
port = process.env.PORT || 3000;
Message = require('./api/models/message-model');
routes = require('./api/routes/message-routes');
bodyParser = require('body-parser');
mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/msgdb', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
routes(app);

app.listen(port, function() {
    console.log('Server running on %s', port);
});

