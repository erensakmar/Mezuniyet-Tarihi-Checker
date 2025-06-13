#!/usr/bin/node

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

(async () => {
try {
const response = await axios.get('https://www.takvim.sis.itu.edu.tr/AkademikTakvim/TR/akademik-takvim/AkademikTakvimTablo.php' , {
headers: {
"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:134.0) Gecko/20100101 Firefox/134.0",
},
});
//Bildirilmesi
let itBe = cheerio.load(response.data);
let table = itBe('tbody').html()
let array = table.match(/<tr>.+?tr>/gm)


for (let i=0; i< array.length; i++){
let result = array[i].match(/<td>.+?td>/gm)
// let yourMom = new Builder() 
// console.log(object)
console.log(result)

let newFile = process.cwd() + "/mydata.xml"
fs.writeFile(newFile, array[i], function(err) {flag:'a+'}); 
}

} catch (error) {
console.log("this is error log:",error);
}
})();
