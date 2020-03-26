const helmet = require('helmet');
const compression = require ('compression');
const bcrypt = require('bcrypt');

module.exports = function(app){
    app.use(helmet());
    app.use(compression());

}