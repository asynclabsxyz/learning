#! /usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.web3 = void 0;
const web3_1 = __importDefault(require("web3"));
const commander_1 = require("commander");
const resolvers_1 = require("./resolvers");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const ETHCLI_HTTP_PROVIDER = process.env.ETHCLI_HTTP_PROVIDER;
exports.web3 = new web3_1.default(ETHCLI_HTTP_PROVIDER);
const program = new commander_1.Command();
program
    .version("1.0.0")
    .description("An example CLI to demo Ethererum wallet");
program
    .command("getBlock")
    .description("Returns a block matching the block number or block hash.")
    .argument("<blockHashOrBlockNumber>", 'The block number or block hash. Or the string "earliest", "latest" , "pending", "safe" or "finalized"')
    .action(resolvers_1.getBlock);
program
    .command("getBalance")
    .description("Get the balance of an address at a given block.")
    .argument("<address>", 'The address to get the balance of.')
    .action(resolvers_1.getBalance);
program
    .command("getTransaction")
    .description("Returns a transaction matching the given transaction hash.")
    .argument("<transactionHash>", 'Hash of the transaction')
    .action(resolvers_1.getTransaction);
program
    .command("sendTransaction")
    .description("Sends a transaction to the network.")
    .argument("<fromAddr>", 'The from address of the transaction')
    .argument("<toAddr>", 'The destination address of the transaction')
    .argument("<value>", 'The value transferred for the transaction in wei')
    .action(resolvers_1.sendTransaction);
program.parse();
//# sourceMappingURL=index.js.map