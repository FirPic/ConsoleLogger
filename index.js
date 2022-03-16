const fs = require('fs');

class ConsoleLogger{
    path(pth){
        this.path=pth;
    }

    File(content){
        fs.writeFile(this.path, content, {flag:'a+'}, err=>{
            if(err) console.log(`File Error, the file not created : ${err}`);
        })
    }
    
    Log(str, lvl){
        const date = new Date();
        const dateLog = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}|${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const log = `[${dateLog}][${lvl.toUpperCase()}]: ${str} \n`;
        if(!str) console.log(`Log Error, the content is empty `);
        else if(!lvl) console.log(`Log Error, the level is empty`);
            else{ this.File(log); console.log(log);}
    }

}
