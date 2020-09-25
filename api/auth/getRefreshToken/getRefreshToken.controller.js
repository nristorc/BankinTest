const config = require('../../../config/config');
const {getRefreshToken} = require('./getRefreshToken.service');

exports.getRefreshToken = async () => {
  try {
    const auth = Buffer.from(`${config.credentials.client_id}:${config.credentials.client_secret}`)
      .toString('base64');
    const result = await getRefreshToken(auth);
    return result.data.refresh_token;
  } catch (error) {
    console.error(`Error [getRefreshToken]: ${error.message}`);
  }
}
