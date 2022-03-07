## Full stack NFT marketplace built with Polygon, Solidity, IPFS, & Next.js

### Running this project

## Preparation

### 1) Nodejs & npm
To check nodejs version.

`node -v`

To check npm version.

`npm -v`

### 2) Install packages

Run following command to install packages

`npm install`

### 3) Set secret.json

See the Day5 text.

Create secret.json

`touch secret.json`

Edit secret.json like below.

```
{
    "providers": {
        "infuraKey": " {YOUR INFURAKEY} ",
        "etherscanKey": ""
    },
    "mnemonic": "test test test test test test test test test test test junk"
}
```

### 4) compile and test using Hardhat

`npx hardhat compile`

`npx hardhat test`

### 4) Start the local Hardhat node

```sh
npx hardhat node
```

### 5) With the network running, deploy the contracts to the local network in a separate terminal window

```sh
npx hardhat run scripts/deploy.js --network localhost
```

---

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
The second quoted address should be the address of NFT Market.

`npx hardhat verify --network mumbai 0xFAb8b21b7d9A985902EbA8C2484474d5016D6f97 "0x1b293497dc106904b71B7dC0F575217E3198E2A6"`

### Import deployed addresses on Dapp
Set deployed addresses in config.js
```
  export const nftmarketaddress = "0x1b293497dc106904b71B7dC0F575217E3198E2A6"
  export const nftaddress = "0xFAb8b21b7d9A985902EbA8C2484474d5016D6f97"
```

Then run `npm run dev`, and you can use the Dapp on Polygon Mumbai.