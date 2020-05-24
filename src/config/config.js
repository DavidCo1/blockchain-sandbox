'use strict';

const config = {
    blockchain: {
        proofOfWorkDifficulty: process.env.BLOCKCHAIN_ProofOfWorkDifficulty || 1
    },
    data: {
        type: 'filesystem',
        file: './data/blockchain-data.json'
    }

}

module.exports = config;