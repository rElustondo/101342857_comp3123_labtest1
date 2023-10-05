const fs = require('fs');
const path = require('path');

const logsPath = path.join(__dirname, 'Logs');

if(!fs.existsSync(logsPath)){
    fs.mkdirSync(logsPath)
    console.log("made directory with path: "+logsPath)
}

process.chdir(logsPath)
console.log("Changed current directory to logs")

for (let i = 0; i < 10; i++) {
    const logName = `log${i}.txt`;
    const logPath = path.join(logsPath, logName);
    fs.writeFileSync(logPath, "Welcome to log file number "+i);
    console.log(logName);
  }