'use strict';
const blockchainManager = require('./services/blockchain-manager');
const block = require('./models/block');

console.log('started...');
blockchainManager.addToBlockToChain(new block(Date.now(), {from:'David', to:'Haim', amount:10.2}));
blockchainManager.addToBlockToChain(new block(Date.now(), {from:'Dani', to:'Haim', amount:30.3}));
blockchainManager.addToBlockToChain(new block(Date.now(), {from:'Itzik', to:'David', amount:14.2}));
blockchainManager.addToBlockToChain(new block(Date.now(), {from:'David', to:'Dani', amount:3.4}));
//blockchainManager.addToBlockToChain(new block(uuidv4(), uuidv4(), null));

console.log(`validateChain: ${blockchainManager.validateChain()}`);
console.log(`getBalance David: ${blockchainManager.getBalance('David')}`);
console.log(`getBalance Dani: ${blockchainManager.getBalance('Dani')}`);
console.log(`getBalance Itzik: ${blockchainManager.getBalance('Itzik')}`);
console.log(`getBalance Haim: ${blockchainManager.getBalance('Haim')}`);


//blockchainManager.printChain();
