var express = require('express');
app = express();
port = process.env.PORT || 3000;
Message = require('./api/models/message-model');
routes = require('./api/routes/message-routes');
bodyParser = require('body-parser');
mongoose = require('mongoose');

mongoose.Promise = global.Promise;
uri = process.env.MONGODB_URI || 'mongodb://localhost/msgdb';
mongoose.connect(uri, {useNewUrlParser: true}, function(err, db){
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to', url);
    }
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
routes(app);

app.listen(port, function() {
    console.log('Server running on %s', port);
});