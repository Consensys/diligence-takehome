const Migrations = artifacts.require('./Migrations.sol');

module.exports = function (deployer) { // eslint-disable-line 
  deployer.deploy(Migrations);
};
