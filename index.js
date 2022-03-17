const fs = require('fs');

    let path='./debug.log';
    exports.Path=path;

    const date = new Date();
    const dateLog = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}|${date.getHours()}:${date.getMinutes()}:${getSeconds()}`;

    function getSeconds(){
        if(date.getSeconds()<=9){
            return `0${date.getSeconds()}`;
        }else{
            return date.getSeconds();
        }
    }



    function File(content){
        fs.writeFile(path, content, {flag:'a+'}, err=>{
            if(err) console.log(`[${dateLog}][ERROR]: File Error, the file not created : ${err}`);
        })
    }
    
    function Log(str, lvl){
        const log = `[${dateLog}][${lvl/*.toUpperCase()*/}]: ${str}`;
        /*if(!path) console.log(`Path Error, the path is emplty`);
        else*/ 
        if(!str) console.log(`[${dateLog}][ERROR]: Log Error, the content is empty `);
        else if(!lvl) console.log(`[${dateLog}][ERROR]: Log Error, the level is empty`);
            else{ File(`${log}\n`); console.log(log);}
        
    }
exports.Log=Log;
