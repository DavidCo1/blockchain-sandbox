'use strict';

const fs = require('fs');
const config = require('../config/config');

function loadData() {
    const fileData = fs.readFileSync(config.data.file,
        (err) => {
            if (err) {
                console.error('failed to read file');
            }
        }
    );

    return fileData;
}

function saveData(data) {
    const file = fs.writeFile(config.data.file,
        data,
        (err) => {
            if (err) {
                console.error('failed to write to file', err);
            }
        }
    );
}

function isFileExist() {
    return fs.existsSync(config.data.file);
}

module.exports = {
    isFileExist: isFileExist,
    loadData: loadData,
    saveData: saveData
}