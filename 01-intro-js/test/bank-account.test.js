var assert = require('assert');
var getNewBankAccount = require('../bank-account');

describe('Bank account', function () {
    it('should be able to deposit money on bank account', function () {
        var BankAccount = getNewBankAccount();
        BankAccount.deposit(100);
        assert.equal(BankAccount.balance, 100);
    });

    it('should be able to widthaw money from bank account', function () {
        var BankAccount = getNewBankAccount();
        var newBankAccount = Object.assign({}, BankAccount, { balance: 100 });
        newBankAccount.widthraw.apply(newBankAccount, [50]);
        assert.equal(newBankAccount.balance, 50);
    });

    it('should be able to not let get more money from bank account that user has', function () {
        var BankAccount = getNewBankAccount();
        BankAccount.deposit(100);
        BankAccount.widthraw(150);
        assert.equal(BankAccount.balance, 100);
    });

    it('should be able to get more money from bank account that user has credit limit', function () {
        var BankAccount = getNewBankAccount(200);
        BankAccount.deposit(100);
        BankAccount.widthraw(300);
        assert.equal(BankAccount.balance, -200);
    });
});