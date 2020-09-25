const {getTransactionsByAccount} = require('../../transactions/getTransactionsByAccount/getTransactionsByAccount.controller');

exports.getParsedAccounts = async (accessToken, accounts) => {
  try {
    return Promise.all(
      accounts.map(async account => {
        const transactionsArray = await getTransactionsByAccount(accessToken, account);
        return {
          acc_number: account.acc_number,
          amount: account.amount,
          transactions: transactionsArray.map(transaction => ({
            label: transaction.label,
            amount: transaction.amount,
            currency: transaction.currency
          }))
        };
      }));
  } catch (error) {
    console.error(`Error [getParsedAccounts]: ${error.message}`);
  }
}
