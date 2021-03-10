'use strict';

module.exports.emailTrigger = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'template message!!',
    }),
  };
};
