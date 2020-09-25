const {getAccessToken} = require("./api/auth/getAccessToken/getAccessToken.controller");
const {getAccounts} = require("./api/accounts/getAccounts/getAccounts.controller");
const {getParsedAccounts} = require("./api/accounts/getParsedAccounts/getParsedAccounts.controller");

const parseAccounts = async () => {
  try {
    const accessToken = await getAccessToken();
    const accounts = await getAccounts(accessToken);
    const parsedAccounts = await getParsedAccounts(accessToken, accounts)
    console.log(JSON.stringify(parsedAccounts, null, 4));
  } catch (error) {
    console.error(`Error [parseAccounts]: ${error.message}`);
  }
};

parseAccounts();
