const fs = require('fs');

    /*const path='';
    exports.Path=path;*/

    function File(content){
        fs.writeFile('./debug.log', content, {flag:'a+'}, err=>{
            if(err) console.log(`File Error, the file not created : ${err}`);
        })
    }
    
    function Log(str, lvl){
        const date = new Date();
        const dateLog = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}|${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const log = `[${dateLog}][${lvl.toUpperCase()}]: ${str} \n`;
        /*if(!path) console.log(`Path Error, the path is emplty`);
        else*/ 
        if(!str) console.log(`Log Error, the content is empty `);
        else if(!lvl) console.log(`Log Error, the level is empty`);
            else{ File(log); console.log(log);}
        
    }
exports.Log=Log;
