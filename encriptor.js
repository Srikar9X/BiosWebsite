const fs = require('fs');

var jo = require('javascript-obfuscator');

fs.readFile('./arc.js', "UTF-8", function(err, data) {
     if (err)
     {
          throw err;
     }

     var or = jo.obfuscate(data);

     fs.writeFile('./arcencripted.js', or.getObfuscatedCode(), function(err) {
          if (err)
          {
               console.log(err);
          }
          else {
               console.log("file was saved");
          }
     });
});

fs.readFile('./arcinertia.js', "UTF-8", function(err, data) {
     if (err)
     {
          throw err;
     }

     or = jo.obfuscate(data);

     fs.writeFile('./arcinertiaencripted.js', or.getObfuscatedCode(), function(err) {
          if (err)
          {
               console.log(err);
          }
          else {
               console.log("file was saved");
          }
     });
});

fs.readFile('./polygon.js', "UTF-8", function(err, data) {
     if (err)
     {
          throw err;
     }

     or = jo.obfuscate(data);

     fs.writeFile('./polygonencripted.js', or.getObfuscatedCode(), function(err) {
          if (err)
          {
               console.log(err);
          }
          else {
               console.log("file was saved");
          }
     });
});

fs.readFile('./polygoninertia.js', "UTF-8", function(err, data) {
     if (err)
     {
          throw err;
     }

     or = jo.obfuscate(data);

     fs.writeFile('./polygoninertiaencripted.js', or.getObfuscatedCode(), function(err) {
          if (err)
          {
               console.log(err);
          }
          else {
               console.log("file was saved");
          }
     });
});

fs.readFile('./compositeintermediate.js', "UTF-8", function(err, data) {
     if (err)
     {
          throw err;
     }

     or = jo.obfuscate(data);

     fs.writeFile('./compositeintermediateencripted.js', or.getObfuscatedCode(), function(err) {
          if (err)
          {
               console.log(err);
          }
          else {
               console.log("file was saved");
          }
     });
});

fs.readFile('./compositemiddle.js', "UTF-8", function(err, data) {
     if (err)
     {
          throw err;
     }

     or = jo.obfuscate(data);

     fs.writeFile('./compositemiddleencripted.js', or.getObfuscatedCode(), function(err) {
          if (err)
          {
               console.log(err);
          }
          else {
               console.log("file was saved");
          }
     });
});
