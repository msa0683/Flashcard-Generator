 function ClozeCard(fullText, cloze){


	this.fullText = fullText;
	this.cloze = cloze;
	this.partial = generatePartial(fullText, cloze);

};


function generatePartial(fullText, close) {
	if (fullText.indexOf(close) > -1) {
		return fullText.replace(close,"...");
	}
	else {
		console.log("Sorry dude, this is not working");
	}
}

console.log(generatePartial("George Washington was the first president", "George"));

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
firstPresidentCloze.partial

  module.exports = ClozeCard;
