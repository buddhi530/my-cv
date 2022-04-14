const chalk = require("chalk");

const title = (text) =>{
    return chalk.yellow(` ${text}`);
};

module.exports.title = title;
 //console.log('check --> ',module.exports);