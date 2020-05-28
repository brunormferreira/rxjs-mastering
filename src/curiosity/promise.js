let accountBalance = 100

const withdraw = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (accountBalance < value) {
        reject('You dont have enough balance!')
      } else {
        accountBalance -= value;
        resolve('Balance successfully withdrawn!')
      }
    }, 2500)
  })
}

withdraw(90)
  .then((r) => console.log('success: ' + r))
  .catch((e) => console.log('error: ' + e))

withdraw(11)
  .then((r) => console.log('success: ' + r))
  .catch((e) => console.log('error: ' + e))
