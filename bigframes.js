var countBigFrames = function () {
	lisArray = getAnimations();
	numberOfBigFrames = 0;
	lisArray.forEach(function(li){
		li.style.float = 'left';
		li.style.border = '1px';
		li.style.border += ' solid';
		li.style.border += ' black';
		li.style.margin = '4px';
		li.style.padding = '4px';
		if (li.offsetWidth > 27) {
			numberOfBigFrames++;
		}
	});
	console.log('numberOfBigFrames: ' + numberOfBigFrames);
}