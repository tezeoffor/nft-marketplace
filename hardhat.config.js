require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ALCHEMY_API_KEY = process.env.ALCHEMY_TESTNET_API_KEY;
const ALCHEMY_MAINNET_API_KEY = process.env.ALCHEMY_MAINNET_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: { chainId: 1337 },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [process.env.NNEMONIC],
    },
    mainnet: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_MAINNET_API_KEY}`,
      accounts: [process.env.NNEMONIC],
    },
  },
  solidity: "0.8.17",
};
