import { web3 } from "./index"

export async function getBlock(blockHashOrBlockNumber) {
  try {
    const block = await web3.eth.getBlock(blockHashOrBlockNumber);
    console.log(block);
  }
  catch (error) {
    console.error("Error occurred", error);
  }
}

export async function getBalance(address) {
  try {
    const balance = await web3.eth.getBalance(address);
    console.log(web3.utils.fromWei(balance));
  }
  catch (error) {
    console.error("Error occurred", error);
  }
}

export async function getTransaction(transactionHash) {
  try {
    const transaction = await web3.eth.getTransaction(transactionHash);
    console.log(JSON.stringify(transaction));
  }
  catch (error) {
    console.error("Error occurred", error);
  }
}

export async function sendTransaction(fromAddr, toAddr, value) {
  try {
    const transactionReceipt = await web3.eth.sendTransaction({
      from: fromAddr,
      to: toAddr,
      value
    });
    console.log(JSON.stringify(transactionReceipt));
  }
  catch (error) {
    console.error("Error occurred", error);
  }
}
