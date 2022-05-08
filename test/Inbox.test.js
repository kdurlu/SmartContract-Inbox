const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const { abi, evm } = require('../compile');

const web3 = new Web3(ganache.provider());

let accounts;
let inbox;
const INITIAL_STRING = 'Hi there!';

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    // Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(abi)
                          .deploy({
                              data: evm.bytecode.object,
                              arguments: ['Hi there!']
                          })
                          .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
    it ('contract deployment', () => {
        assert.ok(inbox.options.address);
    });

    it ('get default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, INITIAL_STRING);
    });

    it ('set / edit message', async () => {
        await inbox.methods.setMessage('Bye...').send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Bye...');
    });

    it ('get message', async () => {
        const message = await inbox.methods.getMessage().call();
        const messageD = await inbox.methods.message().call();
        assert.equal(message, messageD);
    });
})
