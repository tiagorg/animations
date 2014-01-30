var lisArray = countAnimations();
lisArray.forEach(function(li) {
	li.addEventListener('click', function(e) {
		if (e.currentTarget.className !== 'happy') {
			e.currentTarget.parentNode.removeChild(e.currentTarget);
			countBigFrames();
		} else {
			alert("Don't remove happiness from your site.");
		}
	});
});