'use strict';
const config = require('../config/config');
console.log(config);
const Block = require('../models/block');
const blockchainList = [generateGenesisBlock()]; 
const difficulty = config.blockchain.proofOfWorkDifficulty;

function addToBlockToChain(blockItem) {
  blockItem.previousHash = getLastBlockHash();
  blockItem.mineBlock(difficulty);
  blockchainList.push(blockItem);
  console.log(`new block added: ${JSON.stringify(blockItem)}`);
}

function validateVaultBalance(vaultId, transactionAmount) {
    let vaultBalance = getBalance(vaultId);
    if (vaultBalance > transactionAmount) {
        return true;
    }
    else {
        return false;
    }
}

function getLastBlockHash() {
  const lastBlock = blockchainList.slice(-1).pop();
  const lastHash = lastBlock.hash;
  return lastHash;
}

function printChain() {
  blockchainList.forEach((item, index) => {
    console.log(item);
  });
}

function validateChain() {
    for (let index = 1; index < blockchainList.length; index++) {
        const block = blockchainList[index];
        const previousBlock = blockchainList[index-1];
        if (block.hash !== block.calculateHash()) {
            return false;
        }

        if (block.previousHash !== previousBlock.hash) {
            return false;
        }
    }

    return true;
}

function generateGenesisBlock() {
  let genesisBlock = new Block(Date.now(), {}, '0');
  genesisBlock.calculateHash();
  return genesisBlock;
}

function getBalance(vaultId){
    let balance = 0;
    for (let index = 0; index < blockchainList.length - 1; index++) {
        const block = blockchainList[index];
        if (block.data) {
            if (block.data.to === vaultId)
            {
                balance += block.data.amount;
            }
            else if (block.data.from === vaultId) {
                balance -= block.data.amount
            }
        }
    }

    return balance;
}

module.exports = {
  addToBlockToChain: addToBlockToChain,
  getLastBlockHash: getLastBlockHash,
  printChain: printChain,
  validateChain: validateChain,
  getBalance: getBalance
};
