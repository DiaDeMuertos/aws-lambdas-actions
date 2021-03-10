'use strict';

module.exports.__service__ = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'template message',
    }),
  };
};
