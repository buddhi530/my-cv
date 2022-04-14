const chalk = require("chalk");
const logSymbols = require('log-symbols');

const hello = chalk.dim.underline.gray("Hello I'm");
const name = chalk.hex("#1da1f2").bold("Buddhika");
const email = chalk.green("Email :");
const phone = chalk.green("Phone :");

const header = `
${hello} ${name}

${logSymbols.success} ${email} : buddhika.senanayaka123@gmail.com
${logSymbols.success} ${phone} : 071271694
`;

module.exports = header;