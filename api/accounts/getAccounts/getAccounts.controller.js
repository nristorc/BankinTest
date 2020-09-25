const {getAccounts} = require('./getAccounts.service');

exports.getAccounts = async (accessToken) => {
  try {
    const accounts = [];
    let page = 1;
    let nextPage = true;

    while (nextPage) {
      const result = await getAccounts(accessToken, page);
      if (result) {
        const {account, link} = result.data;
        const accountNumberArray = accounts.map(account => account.acc_number);
        const filterUniqueAccounts = account.filter(account => !accountNumberArray.includes(account.acc_number));
        accounts.push(...filterUniqueAccounts);
        if (!link || (link && !link.next)) {
          nextPage = false;
        }
        page++;
      }
    }
    return accounts;
  } catch (error) {
    console.error(`Error [getAccounts]: ${error.message}`);
  }
}