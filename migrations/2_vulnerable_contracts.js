const HackableToken = artifacts.require('./HackableToken.sol');

module.exports = async (deployer) => {
  const HT = await deployer.deploy(HackableToken);
};

