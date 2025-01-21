 const fs = require('fs');

 fs.readFile('test.txt', 'utf8',(err,data)=>{

    if (err) {
        console.error('Error reading file:', err);
        return;
      }
       //console.log('File content:', data);
     // console.log(data.length);
     // input = data;


      var counter = 0;
      //const input = data.split(' ');
   
      for(var i = 0; i < data.length; i++) {
        // console.log(input);
       
        if ((data.substring(i, (i+13)) == '@softwire.com')) { counter = counter + 1 }
      }
       
      console.log(counter);
      
    });
     





