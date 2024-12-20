require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.28", // Solidity version, adjust as neededpragma solidity ^0.8.28;
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // Local Hardhat node URL
    },
  },
};
