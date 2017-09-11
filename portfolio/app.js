var express = require("express");
var app = express();



//to avoid repeats of ".ejs" after file
app.set("view engine", "ejs");

//root path
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/portfolio", function(req, res){
    var portfolio =[
        {name: "Project1", image:"http://www.megaglobalgreen.com/wp-content/uploads/2014/09/image-placeholder-e1411098766130.jpg"},
        {name: "Project2", image:"http://awtopylott.net/wp-content/uploads/2016/04/placeholder3-1030x773.png"},
        {name: "Project3", image:"http://www.polyfluides.com/references/bpublics/college_bouficha.jpg"}
        ];
                            //    name: data
    res.render("portfolio", {portfolio: portfolio});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Server Has Started.");
});