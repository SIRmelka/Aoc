const fs = require("fs")

fs.readFile("entry.txt","utf-8", (error, data)=>{
    
    const filedata = data.split("\n\n")

    const container = filedata[0].split('\n');
    const instruction = filedata[1].split("\n")

    console.log(container[0].split(" "));

    instruction.forEach(element => {
    //    console.log(element.split(/[move from to \n \s]+/).splice(1, 3))
    //    console.log(container[1]);
    });
    
})