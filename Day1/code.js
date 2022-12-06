const fs = require("fs")

let elfvalue = []

fs.readFile("entry.txt","utf-8", (error, data)=>{

    const filedata = data.split("\n\n")

    filedata.forEach(element => {
        let counter = 0
        const elements = element.split('\n')
 
        elements.forEach(value => {
            counter += parseInt(value)
        });
       elfvalue.push(counter)
    });
    elfvalue = elfvalue.sort((a, b) => b - a)
    console.log(elfvalue[0]);
    console.log(elfvalue[0]+elfvalue[1]+elfvalue[2]);
})