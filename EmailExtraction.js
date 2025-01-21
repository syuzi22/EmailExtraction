 const fs = require('fs');

 fs.readFile('test.txt', 'utf8',(err,data)=>{

    if (err) {
        console.error('Error reading file:', err);
        return;
      }

      const re = /[a-zA-Z.'_%+-]+@softwire.com/g
      let matches = data.match(re);
      console.log(matches.length);
      
});
     





