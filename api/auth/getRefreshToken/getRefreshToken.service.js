const axios = require('axios');
const config = require('../../../config/config');

exports.getRefreshToken = async (auth) => {
  const options = {
    method: 'POST',
    url: `${config.localServer.server}${config.localServer.port}/login`,
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json'
    },
    data: {
      user: config.credentials.login,
      password: config.credentials.password
    },
  };
  return axios(options);
};
