#!/usr/bin/node

const fs = require('fs');

let newFile = process.cwd() + "/heythere.txt"
let variable

fs.writeFile(newFile, "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(newFile + " The file was saved!");
}); 