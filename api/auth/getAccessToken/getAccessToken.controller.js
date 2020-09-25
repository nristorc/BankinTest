const {getRefreshToken} = require("../getRefreshToken/getRefreshToken.controller");
const {getAccessToken} = require('./getAccessToken.service');

exports.getAccessToken = async () => {
  try {
    const refreshToken = await getRefreshToken();
    const result = await getAccessToken(refreshToken);
    return result.data.access_token;
  } catch (error) {
    console.error(`Error [getAccessToken]: ${error.message}`);
  }
}
