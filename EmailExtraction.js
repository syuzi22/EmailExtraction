 const fs = require('fs');

 fs.readFile('test.txt', 'utf8',(err,data)=>{

    if (err) {
        console.error('Error reading file:', err);
        return;
      }

      const re = /[a-zA-Z.'_%+-]+@(?<domain>[a-zA-Z]+\.[a-zA-Z.]{2,})/g
      const matches = data.matchAll(re);
      const dictionary = {};

      for (const match of matches) {
        const domain = match.groups.domain;
        if (dictionary[domain]) {
          dictionary[domain] = dictionary[domain] + 1;
        } else {
          dictionary[domain] = 1
      }}

      console.log(dictionary);
});
     





