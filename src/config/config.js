'use strict';

const config = {
    blockchain: {
        proofOfWorkDifficulty: process.env.BLOCKCHAIN_ProofOfWorkDifficulty || 1
    }
}

module.exports = config;