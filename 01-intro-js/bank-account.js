function getNewBankAccount(creditLimit) {
    return {
        balance: 0,
        deposit: function (amount) {
            this.balance = this.balance + amount;
        },

        widthraw: function (money) {
            if (!creditLimit) {
                creditLimit = 0;
            }
            if ((this.balance - money) >= creditLimit) {
                this.balance = this.balance - money;
            }
            if (creditLimit > 0 && Math.abs((this.balance - money) <= creditLimit)) {
                this.balance = this.balance - money;
            }
        }
    }
}

module.exports = getNewBankAccount;