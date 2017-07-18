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


module.exports = ClozeCard;

