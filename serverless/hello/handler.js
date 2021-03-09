'use strict';

const moment = require('moment-timezone');

module.exports.hello = async (event) => {
  const today = moment().utc().format('YYYY-MM-DD HH:mm:ss');

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi, this is just a demo!',
      today: today,
    }),
  };
};
