require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const env = require("./secret.json");

const mnemonic =
  typeof env.mnemonic === 'undefined' ? '' : env.mnemonic

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      // Infura
      url: `https://polygon-mumbai.infura.io/v3/${env.providers.infuraKey}`,
      // url: "https://rpc-mumbai.matic.today",
      accounts: {
        mnemonic: mnemonic,
      },
    },
    matic: {
      // Infura
      url: `https://polygon-mainnet.infura.io/v3/${env.providers.infuraKey}`,
      // url: "https://rpc-mainnet.maticvigil.com",
      accounts: {
        mnemonic: mnemonic,
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
  }
};

