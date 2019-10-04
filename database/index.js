const mongoose = require('mongoose');

const uri = 'mongodb://localhost/noderest'
mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true });

//mongoose.createConnection(uri, { useNewUrlParser: true, });

//mongoose.createConnection(uri);
mongoose.Promise = global.Promise;

module.exports = mongoose;