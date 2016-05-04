var express = require("express");
var app = express();
app.set("port",process.env.PORT ||3000);
app.get("/",function(req,res)
{res.render("index");
});



app.listen(app.get("port"), function(){
console.log("express test starting" +
app.get("port") );
});
