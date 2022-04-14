#!/usr/bin/env node

const header = require("./lib/header.js")
const intro = require("./lib/intro.js")
const edu = require("./lib/edu.js")
const projects = require("./lib/projects")
const social = require("./lib/social")

console.log(`
${header}
${intro}
${edu}
${projects}
${social}
`);