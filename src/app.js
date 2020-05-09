'use strict';
const blockchainManager = require('./services/blockchain-manager');
const block = require('./modules/block');


blockchainManager.addToBlockToChain(new block(blockchainManager.getLastBlockHash(), {from:'David', to:'Haim', amount:10.2}));
blockchainManager.addToBlockToChain(new block(blockchainManager.getLastBlockHash(), {from:'Dani', to:'Haim', amount:30.3}));
blockchainManager.addToBlockToChain(new block(blockchainManager.getLastBlockHash(), {from:'Itzik', to:'David', amount:14.2}));
blockchainManager.addToBlockToChain(new block(blockchainManager.getLastBlockHash(), {from:'David', to:'Dani', amount:3.4}));
//blockchainManager.addToBlockToChain(new block(uuidv4(), uuidv4(), null));

blockchainManager.printChain();
console.log('hello world');
