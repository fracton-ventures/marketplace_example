require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");

// const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

const mnemnoc =
  typeof process.env.MNEMONIC === 'undefined' ? '' : process.env.MNEMONIC

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      // Infura
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_KEY}`,
      // url: "https://rpc-mumbai.matic.today",
      accounts: {
        mnemonic: mnemnoc,
      },
    },
    matic: {
      // Infura
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      // url: "https://rpc-mainnet.maticvigil.com",
      accounts: {
        mnemonic: mnemnoc,
      },
    }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    apiKey: {
      arbitrumTestnet: process.env.ARBITRUM_KEY,
      polygonMumbai: process.env.POLYGONSCAN_KEY
    }
  }
};

