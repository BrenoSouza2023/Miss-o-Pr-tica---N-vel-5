const mongoose = require('mongoose');

const banco = mongoose.connection;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose.connect('localhost:27017', options);

module.exports = banco;