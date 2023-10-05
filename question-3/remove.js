const fs = require('fs');
const path = require('path');

const logsPath = path.join(__dirname, 'Logs');

if(fs.existsSync(logsPath)){
    let arrayOfFileNames = fs.readdirSync(logsPath)
    arrayOfFileNames.forEach((fileName)=>{
        const filePath = path.join(logsPath,fileName)
        console.log("delete files...",fileName)
        fs.unlinkSync(filePath)
    })
    fs.rmdirSync(logsPath)
    console.log("removed logs directory")
}
else{
    console.log("Please create a logs directory before deleting")
}
