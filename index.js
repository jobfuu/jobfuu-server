const { start } = require('./src/server');
const { sequelizeDatabase } = require('./src/models');

// sequelizeDatabase.sync()
//   .then(() => {
//     console.log('Successfully connected to DB!');
    start();
  // })
  // .catch(error => console.error(error.message));
