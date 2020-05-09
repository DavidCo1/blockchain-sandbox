'use strict';
let block = require('../modules/block');
const blockchainList = [];

function addToBlockToChain(blockItem){
    const lastHash = getLastBlockHash();
    if (lastHash === blockItem.previousHash) {
        blockchainList.push(blockItem);
    }
    else {
        throw "invalid order"
    }
}  

function getLastBlockHash() {
    const lastBlock = blockchainList.slice(-1).pop();
    const lastHash = lastBlock ? lastBlock.hash : ''; 
    return lastHash;
}

function printChain (){
    blockchainList.forEach((item, index)=>{
        console.log(item);
    });
}

//TODO: generate hash

module.exports = {
    addToBlockToChain: addToBlockToChain,
    getLastBlockHash: getLastBlockHash,
    printChain: printChain
}