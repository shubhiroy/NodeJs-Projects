console.log('Starting App.')

const fs = require('fs');
const os = require('os');

fs.appendFile('greetings.txt',`Hello ${os.userInfo().username} !!!\n`,function(err){
    if(err){
        console.log('[-] Not able to create the file.')
    }
});