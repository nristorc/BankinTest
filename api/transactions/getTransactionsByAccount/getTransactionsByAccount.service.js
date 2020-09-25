const config = require('../../../config/config');
const axios = require('axios');

exports.getTransactionsByAccount = async (accessToken, accountNumber, page = 1) => {
  const options = {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${accessToken}` },
    url: `${config.localServer.server}${config.localServer.port}/accounts/${accountNumber}/transactions`,
    params: { page },
  };
  return axios(options);
};
