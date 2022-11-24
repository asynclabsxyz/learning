# ethcli - Ethereum transaction exercies using Ganache and Infura.


This is an exercise to experience making transactions on an Ethereum blockchain.

The transactions which involve transfer of eth from one account to another account requires paying commision. The read-only transactions like getting information about a specific block, balance etc doesn't need commisions. For read-only transactions we can rely on Infura. For making a transfer we will use a local blockchain environment which work arounds paying commision.  

We will run a local Ethereum blockchain using [ganache](https://trufflesuite.com/ganache/)
from the Truffle suite.

We will rely on [Infura](https://www.infura.io/) for making read-only transactions on the mainnet. Signup on Infura, create a project and get your HTTP URL using your Infura key.

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

Install ganache using `npm install -g ganache`

Start ganache runing the `ganache` binary in from you command line

```
$ ganache
ganache v7.5.0 (@ganache/cli: 0.6.0, @ganache/core: 0.6.0)
Starting RPC server
```

When ganache starts the local blockchain it seeds a few test accounts with some Eth loaded in them.
We will be using them to interact with the blockchain, so make sure you notedown the information it prints when you start the local ganache instance.
f
Also ganache internally starts an RPC server and exposed the HTTP URL for interacting with blockchain.

Check the below image in the text highlighted in <span style="background-color: #FFFF00">yellow</span>, note it down and we will be needing it to set our ENV variable.

![Ganache Output.](https://i.imgur.com/y122j6A.png "Ganache Output")


2. Download and Install `ethcli` npm package.

Clone the repository from Github using `git clone git@github.com:asynclabsxyz/learning.git`

Install `ethcli` using `cd learning/ethcli && npm install -g .`

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

3. Set `ETHCLI_HTTP_PROVIDER` ENV variable. Based on this ENV `ethcli` will either interact with local ganache chain or on the mainnet using Infura. 

`export ETHCLI_HTTP_PROVIDER=http://127.0.0.1:8545` - To interact with ganache.

OR

`export ETHCLI_HTTP_PROVIDER=https://celo-mainnet.infura.io/v3/XXXXXXXXXXXXXXX` - To interact with mainnet using Infura.


## Exercise(s)


1) `getBlock`

`ethcli getBlock <blockHashOrBlockNumber>`

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

2) `getBalance`

`ethcli getBalance <address>`

`address` - The address to get the balance of.

```
$ ethcli getBalance 0x45D57Db258392136bfac1983FdcC5e6A4f4f13c5
1000
```

3) `getTransaction`

`ethcli getTransaction <transactionHash>`

`transactionHash` - The transaction hash.

```
$ ethcli getTransaction 0xa157cc7843950fa0f2da292d01e9f08594b38c1d25c8ba237cc182fe69adeae5
{"type":2,"hash":"0xa157cc7843950fa0f2da292d01e9f08594b38c1d25c8ba237cc182fe69adeae5","chainId":"0x539","nonce":8,"blockHash":"0x22508c1adb6f536e2e48605057fb640162e258b895a2299c63fbde1fbef32358","blockNumber":9,"transactionIndex":0,"from":"0x98fb97fCB988408d0C7cEB0DbCe5644ed8b184bf","to":"0xd279965Da27CB3a8D13c9F8907CA9989063161b8","value":"1000000000000000000","maxPriorityFeePerGas":"2500000000","maxFeePerGas":"3188180518","gasPrice":"2801139193","gas":90000,"input":"0x","accessList":[],"v":"0x0","r":"0x6fdf7451ac1c91664d10c830b340f9736469e0152ce279d3b13e60b4039468e0","s":"0x92b1e943afd8b8b23bb714c2fcbd5704a104739451d03c9fa0f853e91dbb300"}
```

4) `sendTransaction`

`ethcli sendTransaction <fromAddr> <toAddr> <value>`

`fromAddr` - The address for the sending account.

`toAddr` - The destination address.

`value` - The value transferred for the transaction in wei.

```
$ ethcli sendTransaction 0x98fb97fCB988408d0C7cEB0DbCe5644ed8b184bf 0xd279965Da27CB3a8D13c9F8907CA9989063161b8 1000000000000000000
{"transactionHash":"0xec78baf8181e34a0cb55c5c5ee7afcc873231fe9d48b6a28625faf54b1b803c0","transactionIndex":0,"blockNumber":10,"blockHash":"0x19779cde75715d0e687d581a0c347d2626b0a3d268898a5be40c0b28270102b5","from":"0x98fb97fcb988408d0c7ceb0dbce5644ed8b184bf","to":"0xd279965da27cb3a8d13c9f8907ca9989063161b8","cumulativeGasUsed":21000,"gasUsed":21000,"contractAddress":null,"logs":[],"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","status":true,"effectiveGasPrice":2763549494,"type":"0x2"}
```

