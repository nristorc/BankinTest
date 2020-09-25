const {getTransactionsByAccount} = require('./getTransactionsByAccount.service');

exports.getTransactionsByAccount = async (accessToken, account) => {
  try {
        const transactionsArray = [];
        let nextPage = true;

        for (let page = 1; nextPage; page++) {
          if (account.acc_number !== '0000000013') {
            const result = await getTransactionsByAccount(accessToken, account.acc_number, page);
            if (result && result.data) {
              const {transactions, link} = result.data;
              const retrievedTransactions = [...transactions];
              const arrayOfTransactionIds = transactionsArray.map(transaction => transaction.id);
              const filteredTransactions = retrievedTransactions.filter(transaction => !arrayOfTransactionIds.includes(transaction.id));
              transactionsArray.push(...filteredTransactions);
              if (!link || (link && !link.next)) {
                nextPage = false;
              }
            }
          } else {
            nextPage = false;
          }
        }
        return transactionsArray;
  } catch (error) {
    console.error(`Error [getTransactionsByAccount]: ${error.message}`);
  }
}
