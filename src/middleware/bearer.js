'use strict';

// need to add route to user model here
const {users} = require('');

module.exports = async (req, res, next) => {

  try {

    if(!req.headers.authorization) {
      _authError();
    }

    const token = req.headers.authorization.split(' ').pop();
    const validUser = await users. authenticateToken(token);

    req.user = validUser;
    req.token = validUser.token;

    next();
  } catch (e) {
    _authError();
    console.log(e);
  }

  function _authError() {
    next('Invalid Login');
  }

};
