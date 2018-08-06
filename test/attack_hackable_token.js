const HackableToken = artifacts.require('./HackableToken.sol');
const Attacker = artifacts.require('./Attacker.sol');
const Promise = require('bluebird');

let HT;
let ATKR;

getBalance = Promise.promisify(web3.eth.getBalance);

contract('HackableToken', (accounts) => {
  const initialDepositor = accounts[0];
  const thief = accounts[1];

  // INSTRUCTIONS: deploy all contracts in this before block
  before(async () => {
    HT = await HackableToken.new();
  });

  // INSTRUCTIONS: do not change anything about this test
  it('should return the correct totalSupply after creation and initial deposit', async () => {
    await HT.deposit({ value: web3.toWei(2, 'ether'), from: initialDepositor });
    const totalSupply = await HT.totalSupply();
    assert(totalSupply.toNumber() == web3.toWei(2, 'ether'));
  });

  // INSTRUCTIONS: write the code which initiates the exploit on the HackableToken in this test
  it('should run the exploit to withdraw more than the thief\'s balance', async () => {
    // your exploit script goes here! :)
    assert(false, "not attacked") // Delete me
  });

  // INSTRUCTIONS: do not change anything about this test
  // When this test passes, you've completed the challenge
   it('Successful exploit: ETH balance of the contract should be less than balance of initial depositor', async () => {
    let initialDepositorBalance = await HT.balanceOf(initialDepositor);
    let ethBalanceOfContract = await getBalance(HT.address);
    assert(ethBalanceOfContract.toNumber() < initialDepositorBalance, 'The ETH balance is no less than the totalSupply');
  });
});
