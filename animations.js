var numberOfAnimations = 0, numberOfBigFrames = 0;

var getAnimations = function() {
	var lisArray = [];
	numberOfAnimations = 0;
	for (var i = 0; i < document.getElementsByTagName('li').length; i++) {
		if (document.getElementsByTagName('li')[i].innerHTML === '\\o\/') {
			numberOfAnimations++;
		}
		lisArray.push(document.getElementsByTagName('li')[i]);
	}
	console.log('number of animation cycles: ' + numberOfAnimations);
	return lisArray;
}