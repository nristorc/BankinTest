const axios = require('axios');
const qs = require('qs');
const config = require('../../../config/config');

exports.getAccessToken = async (refreshToken) => {
  const options = {
    method: 'POST',
    url: `${config.localServer.server}${config.localServer.port}/token`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    }),
  };
  return axios(options);
};
