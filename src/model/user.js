module.exports = class UserEntity {
  constructor(props) {
    this.name = props.name;
    this.balance = props.balance;
    this.statement = props.statement;
  }

  pay(price) {
    if (price <= this.balance) {
      this.balance -= price;
      this.statement.push(price);
      return true;
    } else {
      return false;
    }
  }

  recieve(payment) {
    this.balance += payment;
    this.statement.push(payment);
  }
};
