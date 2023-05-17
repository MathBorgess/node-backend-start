const User = require("../model/user.js");

module.exports = class UserController {
  pay(userProps, itemToPay) {
    const user = new User(userProps);
    if (user.pay(itemToPay.price)) {
      console.log("pagou");
    } else {
      console.log("sem saldo");
    }
    return {
      name: user.name,
      balance: user.balance,
      statement: user.statement,
    };
  }

  transference(donatorProps, recieverProps, transferValue) {
    const reciever = new User(recieverProps);
    const donator = new User(donatorProps);

    if (donator.pay(transferValue)) {
      reciever.recieve(transferValue);
    }

    return {
      reciever: {
        name: reciever.name,
        balance: reciever.balance,
        statement: reciever.statement,
      },
      donator: {
        name: donator.name,
        balance: donator.balance,
        statement: donator.statement,
      },
    };
  }
};
