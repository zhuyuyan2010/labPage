var express =require ("express");
var app = express ();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
})

app.get("/research",function(req,res){
	res.render("research");
})

app.get("/PIinfo",function(req,res){
	res.render("PIinfo");
})

app.get("/team",function(req,res){
	res.render("team");
})

app.get("/publication",function(req,res){
	res.render("publication");
})

app.get("/contact",function(req,res){
	res.render("contact");
})

app.listen(9000, function(){
	console.log("listen on port 9000");
	
})
