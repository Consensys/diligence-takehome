const HDWalletProvider = require('truffle-hdwallet-provider')
const fs = require('fs')

// First read in the secrets.json to get our mnemonic
let secrets
let mnemonic
if (fs.existsSync('secrets.json')) {
  secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));
  mnemonic = secrets.mnemonic;
} else {
  console.log(`No secrets.json found. If you are trying to publish to Ropsten this will fail. 
    Otherwise, you can ignore this message!`);
  mnemonic = '';
}
mnemonic = 'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat';

module.exports = {
  networks: {
    live: {
      network_id: 1 // Ethereum public network
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, 'https://ropsten.infura.io'),
      network_id: '3'
    },
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
