const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname+"/date.js")

const app = express();
const items = [];
const workItems = [];
const studysub = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.get("/",function(req,res){
    
    
   let day = date.getDate();

    
    res.render("list",{ListTitle: day, newListItems: items});

});

app.post("/",function (req,res) {
    var item = req.body.newItem;
    if(req.body.list === "Work") {
       workItems.push(item)
       res.redirect("/work")
    }else if(req.body.list === "study"){
        studysub.push(item)
        res.redirect("/study")
    } else {
       items.push(item)
       res.redirect("/");
    }
})
app.get("/work",function(req,res){
    res.render("List",{ListTitle: "Work List",newListItems: workItems})
})
app.get("/study",function(req,res){
    res.render("List",{ListTitle: "Study List 📚" ,newListItems:studysub})
})
app.get("/about",function(req,res){
    res.render("about");
})
app.listen(3000,function(){
  console.log("port number 3000 is running")
});
