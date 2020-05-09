'use strict';
const crypto = require('crypto');

module.exports = class Block {
    constructor(previousHash, data) {
        if (data === null) {
            throw `data can't be null`;
        }

        this.data = data; //from, to, amount
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        let hashSum = crypto.createHash('sha512');
        console.log(JSON.stringify(this.data));
        hashSum.update(JSON.stringify(this.data));
        return hashSum.digest('hex')
    }
}