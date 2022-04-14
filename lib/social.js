const chalk = require("chalk");
const {title} = require("./shared.js");

const linkedin = chalk.hex("#0077b5")("Linkedin");
const github = chalk.hex("#0077b5")("Github");


const social = `
${title("Social Links")}

${linkedin}
  - https://www.linkedin.com/in/buddhika-senanayaka-44a195191

${github}
  - https://github.com/buddhi530
`
module.exports = social;