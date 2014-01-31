var getAnimations = function() {
	var lis = document.getElementsByTagName('li'),
			lisLength = lis.length,
			lisArray = [],
			numberOfAnimations = 0,
			li;

	for (var i = 0; i < lisLength; i++) {
		li = lis[i];
		if (li.innerHTML === '\\o\/') numberOfAnimations++;
		lisArray.push(li);
	}
	console.log('number of animation cycles: ' + numberOfAnimations);

	return lisArray;
}