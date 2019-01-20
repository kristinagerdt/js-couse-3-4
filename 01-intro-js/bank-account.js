// function getNewBankAccount(creditLimit) {
function getNewBankAccount() {
    return {
        balance: 0,
        deposit: function (amount) {
            this.balance = this.balance + amount;
        },

        widthraw: function (money) {
            this.balance = this.balance - money;
        }
    }
}

module.exports = getNewBankAccount;


function sum(n) {
    var v = function (x) {
        return sum(n + x);
    };

    v.valueOf = v.toString = function () {
        return n;
    };

    return v;
}

var add = function (a) {
    var sum = a;

    var inner = function (b) {
        sum += b;
        return inner;
    };

    inner.valueOf = function () {
        return sum;
    };

    return inner;
};