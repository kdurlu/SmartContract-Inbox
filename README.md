# Inbox Smart Contract
Simple smart contract project for demonstrating inbox-like message application using Solidity and NodeJS.

For development purposes, this projects uses** Rinkeby Ethereum Network** and **Infura**.

## File Structure
**Contracts** folder contains the main smart contract written in Solidity. You can view and edit the code for your own use cases.

**Test** folder contains the test script for testing the smart contract without actually deploying it to the Ethereum network. It uses **Mocha** for automated testing.

**compile.js** contains the main code for compiling the Solidity code using NodeJS.

**deploy.js** contains the main code for deploying the compiled smart contract (ABI - Bytecode) to the Ethereum network.

## Usage
1. run `npm install` in the project directory. This command will install necessary packages that are used while running the project.

2. run `node deploy.js` in the project directory. This command deploys the smart contract to the given Ethereum network with given Metamask wallet. In order to run this command, first you need to provide your Metamask wallet mnemonics and Infura endpoint.

**Infura**: Go to [Infura.io](https://infura.io/ "Infura.io") and create a new account. Then create a new project and select the Ethereum network you want to use (in this project, Rinkeby is used). Copy and store your Rinkeby network endpoint in the project settings page. Paste this endpoint to the constant named **"NETWORK_ENDPOINT"** in **deploy.js**.

**Metamask**: Install Metamask extension to your browser and create a new account. Select Rinkeby network and add funds to your account. Store your mnemonic in a safe place and write these words to the constant named **"WALLET_MNEMONIC"** in **deploy.js**.

After deploying the contract to the network, an address will be given in the command line. You can use this address to use / test your smart contract using Remix IDE.

## Testing
1. run `npm run test` in order to run Mocha test suite. You can also add new tests for the smart contract. Tests will be shown on the command line.