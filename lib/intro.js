const boxen = require('boxen');
const chalk = require("chalk");

const intro = ` 
${boxen('I am tech Enthusiast who always look forword to take on new challengers,learn new things and grow with all possible opportunities and also I love working with web and mobile technologies', {title: chalk.yellow('Who am I'), titleAlignment: 'center',textAlignment:'center',borderColor:'gray'})}
`;

module.exports = intro;