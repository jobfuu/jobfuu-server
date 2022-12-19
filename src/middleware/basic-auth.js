// 'use strict';

// const express = require('express');
// const app = express();

// const base64 = require('base-64');
// const bycrypt = require('bcrypt');

// module.exports = async (req, res, next) => {
//   let { authorization } = req.headers;

//   if(!authorization){
//     res.status(400).send('User Not Authorized');
//   } else {
//     let authString = authorization.split(' ')[1];
//     let decodedAuthString = base64.decode(authString);
//     let [ username, password ] = decodedAuthString.split(':');


//   }

// }