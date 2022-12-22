'use strict';

const base64 = require('base-64');
// need to add user schema file route here
const { users } = require('');

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) {
    return _authError()
  }

  let basic = req.headers.authorization.split(' ').pop();
  let [user, password] = base64.decode(basic).split(':');

  try {
    req.user = await users.authenticateBasic(user, password);
    next();
  } catch (e) {
    _authError();
    console.log(e);
  }

  function _authError() {
    res.status(403).send('Invalid Login');
  }
  
}
