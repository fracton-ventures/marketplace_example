## Full stack NFT marketplace built with Polygon, Solidity, IPFS, & Next.js

![Header](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pfofv47dooojerkmfgr4.png)

This is the codebase to go along with tbe blog post [Building a Full Stack NFT Marketplace on Ethereum with Polygon](https://dev.to/dabit3/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb)

### Running this project

#### Local setup

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone https://github.com/dabit3/polygon-ethereum-nextjs-marketplace.git

cd polygon-ethereum-nextjs-marketplace

# install using NPM or Yarn
npm install

# or

yarn
```

2. Start the local Hardhat node

```sh
npx hardhat node
```

3. With the network running, deploy the contracts to the local network in a separate terminal window

```sh
npx hardhat run scripts/deploy.js --network localhost
```

4. Start the app

```
npm run dev
```

### Configuration

To deploy on Polygon Mumbai, set the following variables in .env.
```
NEXT_PUBLIC_WORKSPACE_URL=https://rpc-mumbai.maticvigil.com
MNEMONIC=***
INFURA_KEY=***
ETHERSCAN_KEY=***
POLYGONSCAN_KEY=***
```
### Deploy command on Polygon Mumbai
`npx hardhat run scripts/deploy.js --network mumbai`

If the deploy succeeded, the result is like this:
```
nftMarket deployed to: 0x1b293497dc106904b71B7dC0F575217E3198E2A6
nft deployed to: 0xFAb8b21b7d9A985902EbA8C2484474d5016D6f97
```

### Verify command on Polygon Mumbai
NFT Market contract  
Change the address to an actual deployed address.

`npx hardhat verify --network mumbai 0x1b293497dc106904b71B7dC0F575217E3198E2A6`

NFT contract  
Change the address to an actual deployed address.  
The second quoted adress should be the address of NFT Market.

`npx hardhat verify --network mumbai 0xFAb8b21b7d9A985902EbA8C2484474d5016D6f97 "0x1b293497dc106904b71B7dC0F575217E3198E2A6"`

### Import deployed addresses on Dapp
Set deployed addresses in config.js
```
  export const nftmarketaddress = "0x1b293497dc106904b71B7dC0F575217E3198E2A6"
  export const nftaddress = "0xFAb8b21b7d9A985902EbA8C2484474d5016D6f97"
```

Then run `npm run dev`, and you can use the Dapp on Polygon Mumbai.