var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");


console.log("===============================================================================");
var basic1 = new BasicCard(
	"What event occurs when a user clicks on an html element","onclick");
	console.log(basic1.front);
	console.log(basic1.back);


console.log("===============================================================================");
var basic2 = new BasicCard(
	"This is a cross- platform JavaScript library designed to simplify the client-side scripting of HTML", "jquery")
	console.log(basic2.front);
	console.log(basic2.back);


console.log("===============================================================================");
var basic3 = new BasicCard(
	"JavaScript runtime built on Chrome's V8 JavaScript engine", "node.js");
	console.log(basic3.front);
	console.log(basic3.back);


console.log("===============================================================================");
var basic4 = new BasicCard(
	"Where does node.js allow you to run JavaScript", "server");
	console.log(basic4.front);
	console.log(basic4.back);


console.log("===============================================================================");
var basic5 = new BasicCard(
	"Skill in using search engines (especially Google) to quickly find useful information online", "Goodlefu");
	console.log(basic5.front);
	console.log(basic5.back);


console.log("===============================================================================");
var cloze1 = new ClozeCard(
	"Our JavaScript goes inside of our script tag", "script");
	console.log(cloze1.partial);
	console.log(cloze1.cloze);
	console.log(cloze1.fullText);


console.log("===============================================================================");
var cloze2 = new ClozeCard(
	"The correct place to inser JavaScript is the head or body", "body")
	console.log(cloze2.partial);
	console.log(cloze2.cloze);
	console.log(cloze2.fullText);


console.log("===============================================================================");
var cloze3 = new ClozeCard(
	"script src='xxx.js'","src");
	console.log(cloze3.partial)
	console.log(cloze3.cloze);
	console.log(cloze3.fullText);


console.log("===============================================================================");
var cloze4 = new ClozeCard(
	"In JavaScript we use getElementById, in jquery we use $('#')", "jquery");
	console.log(cloze4.partial);
	console.log(cloze4.cloze);
	console.log(cloze4.fullText);


console.log("===============================================================================");
var cloze5 = new ClozeCard(
	"User input is accessed in node.js terminal through process.argv", "process.argv");
	console.log(cloze5.partial)
	console.log(cloze5.cloze);
	console.log(cloze5.fullText);


console.log("===============================================================================");	
	var brokenCloze = new ClozeCard(
	     "This doesn't work","oooops")
	  	console.log(brokenCloze.partial);










