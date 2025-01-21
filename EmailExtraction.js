 const fs = require('fs');

 fs.readFile('test.txt', 'utf8',(err,data)=>{

    if (err) {
        console.error('Error reading file:', err);
        return;
      }

      //const re = /[a-zA-Z.'_%+-]+@softwire.com/g
      const re = /[a-zA-Z.'_%+-]+@[a-zA-Z]+\.[a-zA-Z.]{2,}/g
  
      let matches = data.match(re);

      let dictionary = {};

      for (let i = 0; i < matches.length; i ++) {
        let email = matches[i];
        // katrina_dwain@softwire.com
        let atIndex = email.indexOf('@');
        let domain = email.slice(atIndex + 1);

        if (dictionary[domain]) {
          dictionary[domain] = dictionary[domain] + 1;
        } else {
          dictionary[domain] = 1
        }

      }


      console.log(dictionary);

      
});
     





