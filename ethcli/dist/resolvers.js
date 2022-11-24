"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTransaction = exports.getTransaction = exports.getBalance = exports.getBlock = void 0;
const index_1 = require("./index");
function getBlock(blockHashOrBlockNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const block = yield index_1.web3.eth.getBlock(blockHashOrBlockNumber);
            console.log(block);
        }
        catch (error) {
            console.error("Error occurred", error);
        }
    });
}
exports.getBlock = getBlock;
function getBalance(address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const balance = yield index_1.web3.eth.getBalance(address);
            console.log(index_1.web3.utils.fromWei(balance));
        }
        catch (error) {
            console.error("Error occurred", error);
        }
    });
}
exports.getBalance = getBalance;
function getTransaction(transactionHash) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const transaction = yield index_1.web3.eth.getTransaction(transactionHash);
            console.log(JSON.stringify(transaction));
        }
        catch (error) {
            console.error("Error occurred", error);
        }
    });
}
exports.getTransaction = getTransaction;
function sendTransaction(fromAddr, toAddr, value) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const transactionReceipt = yield index_1.web3.eth.sendTransaction({
                from: fromAddr,
                to: toAddr,
                value
            });
            console.log(JSON.stringify(transactionReceipt));
        }
        catch (error) {
            console.error("Error occurred", error);
        }
    });
}
exports.sendTransaction = sendTransaction;
//# sourceMappingURL=resolvers.js.map