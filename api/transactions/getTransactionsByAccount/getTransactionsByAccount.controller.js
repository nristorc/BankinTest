const {getTransactionsByAccount} = require('./getTransactionsByAccount.service');

exports.getTransactionsByAccount = async (accessToken, account) => {
  try {
        const transactionsArray = [];
        let page = 1;
        let nextPage = true;

        while (nextPage) {
          if (account.acc_number !== '0000000013') {
            const result = await getTransactionsByAccount(accessToken, account.acc_number, page);
            if (result && result.data) {
              const {transactions, link} = result.data;
              const retrievedTransactions = [...transactions];
              const transactionIdsArray = transactionsArray.map(transaction => transaction.id);
              const filterUniqueTransactions = retrievedTransactions.filter(transaction => !transactionIdsArray.includes(transaction.id));
              transactionsArray.push(...filterUniqueTransactions);
              if (!link || (link && !link.next)) {
                nextPage = false;
              }
              page++;
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