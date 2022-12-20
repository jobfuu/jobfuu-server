'use strict';

module.exports = (capability) => (req, res, next) => {

  try {
    console.log('from ACL middleware', req.user);
    if(req.user.capabilities.includes(capability)) {
      next();
    }
    else {
      next('Access Denied');
    }
  } catch (e) {
    next('Invalid Login');
    console.log(e);
  }
  
};
