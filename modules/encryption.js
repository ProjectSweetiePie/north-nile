var bcrypt  = require('bcrypt');

var SALT_WORK_FACTOR = 10;

var publicAPI = {
  encryptPassword: function(password) {
    var salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
    console.log('producted a salt of: ', salt);
    var encryptPassword = bcrypt.hashSync(password, salt);
    console.log('created password of: ', encryptPassword);
    return encryptPassword;
  },
  comparePassword: function(candidatePassword, storedPassword) {
    console.log('comparing', candidatePassword, 'to', storedPassword);
    var answer = bcrypt.compareSync(candidatePassword, storedPassword);
    console.log('the answer is', answer);
    return answer;
  }
};

module.exports = publicAPI;
