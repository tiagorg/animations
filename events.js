var lisArray = getAnimations();
lisArray.forEach(function(li) {
	li.addEventListener('click', function(e) {
		if (e.currentTarget.className !== 'happy') {
			alert("Removing... Trust me, it will be removed.");
			e.currentTarget.parentNode.removeChild(e.currentTarget);
			countBigFrames();
			alert("Removed!");
		} else {
			alert("Don't remove happiness from your site.");
		}
	});
});