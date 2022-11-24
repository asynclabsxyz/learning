# ethcli - Demo Ethereum transactions using Ganache.


This is an exercise to experience making transactions on an Ethereum blockchain.

The transactions that you make on the eth blockchain requires paying commision. So for making a transaction we will rely on a local test blockchain environment. Other readonly transactions like getting information about a specific block, balance, etc can be done on the mainnet. 


We will run a local Ethereum blockchain using [ganache](https://trufflesuite.com/ganache/)
from the Truffle suite.

We will rely on [Infura](https://www.infura.io/) for making transactions on the mainnet.

Internally we use [web3.js](https://web3js.readthedocs.io/en/v1.8.1/) for interacting with the Ethereum blockchain. 

This supported transactions for this exercise are
  - `getBlock` Returns a block matching the block number or block hash.
  - `getBalance` Get the balance of an address at a given block.
  - `getTransaction` Returns a transaction matching the given transaction hash.
  - `sendTransaction` Sends a transaction to the network.

## Prerequisite
You must first install Node.js >= v12.0.0 and npm >= 6.12.0.

## Setup
1. Install and start a personal blockchain using Ganache on your local machine.
  1. Install ganache using `npm install ganache`
  2. Start ganache runing the `ganache` binary in from you command line

Once ganache is started it internally starts an RPC server and exposed the HTTP URL for interacting with blockchain. You will able to find the HTTP URL in the output it prints as soon as it starts. 

Check the below image in the text highlighted in yellow, note it down and we will be needing it to set our ENV variable.
![This is a alt text.](https://i.imgur.com/y122j6A.png "This is a sample image.")


2. Download and Install `ethcli` npm package.
  1. Clone the repository from Github using `git clone git@github.com:asynclabsxyz/learning.git`
  2. Install `ethcli` using `cd learning/ethcli && npm install -g .` 
  

Successfully installation will give you a binary called `ethcli`. Running `ethcli --help` will give you the list of supported operations.

```
➜  ethcli --help
Usage: ethcli [options] [command]

An example CLI to demo Ethererum wallet

Options:
  -V, --version                                output the version number
  -h, --help                                   display help for command

Commands:
  getBlock <blockHashOrBlockNumber>            Returns a block matching the block number or block hash.
  getBalance <address>                         Get the balance of an address at a given block.
  getTransaction <transactionHash>             Returns a transaction matching the given transaction hash.
  sendTransaction <fromAddr> <toAddr> <value>  Sends a transaction to the network.
  help [command]                               display help for command
```

3. Set `ETHCLI_HTTP_PROVIDER` ENV variable.
  1. `export ETHCLI_HTTP_PROVIDER="http://127.0.0.1:8545`



## Exercise(s)

When ganache starts the local blockchain it seeds a few test accounts with some Eth loaded in them.

We will be using them to interact with the blockchain, so make sure you notedown the information it prints when you start the local ganache instance.

Since `ethcli` is a wrapper around `web3.js`, you can find more information about the arguments for each subcommand in the documentation here https://web3js.readthedocs.io/en/v1.8.1/web3-eth.html

1) `getBlock` 
  1. `ethcli getBlock <blockHashOrBlockNumber>`
  1. Parameters
  
    `blockHashOrBlockNumber` - The block number or block hash. Or the string "earliest", "latest" , "pending", "safe" or "finalized" as in the default block parameter.


```
$ ethcli getBlock 0
{
  hash: '0x74b2dd63d5ed521939fd6ddf66f560bbd7d23743735a6c58e4cd82d57df21950',
  parentHash: '0x35a6b740373ac2758bd1417868a9d598ad7016cd347190bf94f5a5c36fad4fd3',
  sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
  miner: '0x0000000000000000000000000000000000000000',
  stateRoot: '0x86d49b12029a1516972021608ebd69134b005f3fd13b10510e488c0507af1595',
  transactionsRoot: '0xa82974a465e78bad1eb8dadeef726c90dfbb8caa96094e65e2ae60902c440309',
  receiptsRoot: '0xf78dfb743fbd92ade140711c8bbc542b5e307f0ab7984eff35d751969fe57efa',
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  difficulty: '1',
  number: 1,
  gasLimit: 30000000,
  gasUsed: 21000,
  timestamp: 1668635956,
  extraData: '0x',
  mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
  nonce: '0x0000000000000000',
  totalDifficulty: '2',
  baseFeePerGas: 875000000,
  size: 633,
  transactions: [
    '0x1ec88ae7bcc92f75476861f3d918c46137fd6127ea0579935ea5c7f62ccc41d5'
  ],
  uncles: []
}
```







