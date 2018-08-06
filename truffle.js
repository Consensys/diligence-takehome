const HDWalletProvider = require('truffle-hdwallet-provider')
const fs = require('fs')

module.exports = {
  networks: {
    testrpc: {
      network_id: 'default',
    }, 
    development: {
      // provider: new HDWalletProvider(mnemonic, 'http://127.0.0.1:8545'),
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
}
