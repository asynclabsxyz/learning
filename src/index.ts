import Web3 from "web3";
import { Command } from "commander";
import figlet from "figlet";
import * as dotenv from 'dotenv';
dotenv.config()

const ETHEREUM_ACCOUNT = process.env.ETHEREUM_ACCOUNT;
const ETHEREUM_HTTP_PROVIDER = process.env.ETHEREUM_HTTP_PROVIDER;

const web3 = new Web3(ETHEREUM_HTTP_PROVIDER);
const program = new Command();

program
  .version("1.0.0")
  .description("An example CLI to demo Ethererum wallet")
  .option("--getBlock <address>", 'The address to get the balance of.')
  .option("--getBalance <blockHashOrBlockNumber>", 'The block number or block hash. Or the string "earliest", "latest" , "pending", "safe" or "finalized"')
  .option("--sendTransaction <fromAddr> <toAddr> <value>", 'Sends a transaction to the network')
  .parse(process.argv);

const options = program.opts();

async function getBlock(blockHashOrBlockNumber) {
  try {
    const block = await web3.eth.getBlock(blockHashOrBlockNumber);
    console.log(block);
  }
  catch (error) {
    console.error("Error occurred", error);
  }
}

async function getBalance(address) {
  try {
    const balance = await web3.eth.getBalance(address);
    console.log(web3.utils.fromWei(balance));
  }
  catch (error) {
    console.error("Error occurred", error);
  }
}


if (options.getBlock) {
  getBlock(options.getBlock);
}

if (options.getBalance) {
  getBalance(options.getBalance);
}

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

