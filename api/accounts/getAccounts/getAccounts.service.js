const axios = require('axios');
const config = require('../../../config/config');

exports.getAccounts = async (accessToken, page = 1) => {
  const options = {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${accessToken}` },
    url: `${config.localServer.server}${config.localServer.port}/accounts`,
    params: { page },
  };
  return axios(options);
};
