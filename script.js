

// const fs = require('fs');

// fs.readFile('conf.json', (err, data) => {
//     if (err){
//         console.log(err);
//     }
//     let json = JSON.parse(data);
//     executeConf(json)
// });


// function executeConf(jsonArray) {

//     for (const element of jsonArray) {
//         let array = element.input;
//         eval(element.code);
//     }
    
// }

// // const value = 5;

// // function myLog(variableToLog, someCode) {

// //     eval(someCode);
// //     console.log(variableToLog);
// // }

// // myLog(value, "variableToLog = '6pippo'; console.log('Ti ho fregato');");



function helper2() {
    function startingUpperCase(string) {
        return string[0].toUpperCase() + string.substring(1); 
    }
    
    function splitCamelCase(string){
        let output = ""
        for (const char of string) {
            if (char === char.toUpperCase()) {
                output += (" " + char.toLowerCase())
            } else {
                output += char;
            }
        }
        return output;
    }
    return {startingUpperCase, splitCamelCase}
}





// const pippo = require("./myMath")


// const helper = require("./caseHelper")


// const h2 = helper2()

// console.log(pippo.sum(3, 4));

// console.log(pippo.pow(3,2))

// console.log(Math.pow(3,2))

// console.log(Math.sqrt(3,2))

// console.log(helper.splitCamelCase("laCasaRosa"))

// console.log(h2.splitCamelCase("laCasaRosa"))


const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
      
    console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },s
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });