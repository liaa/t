#! /usr/bin/env node
let debug = false;
const userArgs = process.argv.slice(2);
const selector = userArgs[0].replace('.', '');
const fs = require('fs');
const map = require('./maps');

if (debug) {
  console.log(selector);
}

const typeFileMap = {
  "padding": "_spacing.css",
  "margin":"_spacing.css",
  "color": "_color.css",
  "height": "_height.css",
  "width": "_width.css"
}

function convertSelectorToSelectorObj(selector) {
  // ph200px => ph (padding horizontal)
  // mt100px => mt (margin-top)
  // w100px => w (width)
  // h100px => h (height)
  // br100px =>br (border-radius)
  let cate = selector.match(/^[a-z]*/)[0];

  if (!cate) {
    console.log('Error: please pass validated selector');
    return
  }

  let mappedObj = map[cate];
  let type = mappedObj.type;
  let rules = mappedObj.rules.map((rule)=>{
    return {
      name:rule.name,
      value: rule.value(selector)
    }
  })

  return {
    selector: "." + selector,
    type: type,
    rules: rules
  }
}

function writeSelectorObjToFile(obj, filename) {
  let str;
  let ruleSet = ""
  obj.rules.forEach((rule, idx) => {
    if (idx === obj.rules.length - 1) {
      ruleSet += `${rule.name} : ${rule.value};`;
    } else {
      ruleSet += `${rule.name} : ${rule.value};\n`;
    }
    ;
  })

  str = `\n${obj.selector} {\n ${ruleSet}\n}`;

  fs.appendFile(filename, str, function (err) {
    if (err) {
      console.log('error: ', err);
    } else {
      console.log("done");
    }
  })
}


// write to file
const obj = convertSelectorToSelectorObj(selector);
const filename = typeFileMap[obj.type];

writeSelectorObjToFile(obj, filename)







