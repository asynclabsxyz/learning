import Web3 from "web3";
import { Command } from "commander";
import figlet from "figlet";
import {
  getBlock,
  getBalance,
  getTransaction,
  sendTransaction
} from "./resolvers";
import * as dotenv from 'dotenv';
dotenv.config()

const ETHEREUM_HTTP_PROVIDER = process.env.ETHEREUM_HTTP_PROVIDER;

export const web3 = new Web3(ETHEREUM_HTTP_PROVIDER);
const program = new Command();

program
  .version("1.0.0")
  .description("An example CLI to demo Ethererum wallet")

program
  .command("getBlock")
  .description("Returns a block matching the block number or block hash.")
  .argument("<blockHashOrBlockNumber>", 'The block number or block hash. Or the string "earliest", "latest" , "pending", "safe" or "finalized"')
  .action(getBlock);

program
  .command("getBalance")
  .description("Get the balance of an address at a given block.")
  .argument("<address>", 'The address to get the balance of.')
  .action(getBalance);

program
  .command("getTransaction")
  .description("Returns a transaction matching the given transaction hash.")
  .argument("<transactionHash>", 'Hash of the transaction')
  .action(getTransaction);

program
  .command("sendTransaction")
  .description("Sends a transaction to the network.")
  .argument("<fromAddr>", 'The from address of the transaction')
  .argument("<toAddr>", 'The destination address of the transaction')
  .argument("<value>", 'The value transferred for the transaction in wei')
  .action(sendTransaction);


program.parse();
