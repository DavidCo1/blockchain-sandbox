'use strict';
const crypto = require('crypto');

module.exports = class Block {
    constructor(timestamp, data, previousHash = '') {
        if (data === null) {
            throw `data can't be null`;
        }

        this.data = data; //from, to, amount
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.nonce = 0;
    }

    calculateHash(){
        let hashSum = crypto.createHash('sha256');  
        hashSum.update(JSON.stringify(this.data) + this.nonce + this.timestamp + this.previousHash);
        return hashSum.digest('hex')
    }

    mineBlock(difficulty){
        console.time();
        const zero = Array(difficulty).fill("0").toString();
        this.hash = this.calculateHash();
        while (!this.hash.startsWith(zero)) {
            this.nonce++;
            if (this.nonce%10000 == 0) {
                console.log(`this.nonce: ${this.nonce}`);
            }
            this.hash = this.calculateHash();
        }
        console.timeEnd();
    }
}