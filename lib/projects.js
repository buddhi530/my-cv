var Table = require('cli-table'); 
const {title} = require('./shared.js');

// instantiate
var table = new Table({
    head: ['Project Names', 'Project Description' ,'Github Link'],
    style :{head:["green"]}
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
    ['First value', 'Second value', 'Second value']
  , ['First value', 'Second value', 'Second value']
  , ['First value', 'Second value', 'Second value']
);


const project = `

${title("My Projects")}

${table.toString()}
`
module.exports = project;