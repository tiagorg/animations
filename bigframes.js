var countBigFrames = function() {
	var lisArray = getAnimations(),
			numberOfBigFrames = 0;

	lisArray.forEach(function(li) {
		li.className = 'element';
		li.style['border-width'] = Math.floor((Math.random()*2)+1) + 'px';
		if (li.offsetWidth > 27) {
			numberOfBigFrames++;
		}

		li.addEventListener('click', function(e) {
			if (e.currentTarget.className !== 'happy') {
				alert("Removing... Trust me, it will be removed.");
				e.currentTarget.parentNode.removeChild(e.currentTarget);
				//countBigFrames();
				alert("Removed!");
			} else {
				alert("Don't remove happiness from your site.");
			}

			e.preventDefault();
			e.stopPropagation();
		});
	});

	console.log('numberOfBigFrames: ' + numberOfBigFrames);
}