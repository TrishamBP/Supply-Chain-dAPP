
const SupplyChain = artifacts.require("./supplychain.sol");

module.exports = function(deployer) {
    deployer.deploy(SupplyChain);
};