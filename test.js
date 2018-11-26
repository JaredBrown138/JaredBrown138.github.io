function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()+-";
  
    for (var i = 0; i < 59951; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}
var text = makeid();
var fs = require('fs');
fs.writeFile("/Users/jarhe/Desktop/testthis.txt", text, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

