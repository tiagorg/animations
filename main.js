var main = (function() {
  var lisArray = getAnimations();

  function getAnimations() {
    var lis = document.getElementsByTagName('li'),
        lisArray = [],
        numberOfAnimations = 0,
        i = lis.length - 1,
        li;

    do {
      li = lis[i];

      if (li.innerHTML === '\\o\/') {
        numberOfAnimations++;
      }

      lisArray.push(li);
    } while (i--);

    console.log('number of animation cycles: ' + numberOfAnimations);

    return lisArray;
  }

  function countBigFrames() {
    var numberOfBigFrames = 0,
        i = lisArray.length - 1,
        li;

    do {
      li = lisArray[i];

      li.style['border-width'] = Math.floor((Math.random()*2)+1) + 'px';

  /*    if (li.offsetWidth > 27) {
        numberOfBigFrames++;
      }*/
    } while (i--);

    console.log('numberOfBigFrames: ' + numberOfBigFrames);
  }

  function setupEvents() {
    var i = lisArray.length - 1,
        li;

    do {
      li = lisArray[i];

      li.addEventListener('click', function(e) {
        if (e.currentTarget.className !== 'happy') {
          alert("Removing... Trust me, it will be removed.");

          e.currentTarget.parentNode.removeChild(e.currentTarget);
          countBigFrames();

          alert("Removed!");
        } else {
          alert("Don't remove happiness from your site.");
        }

        e.preventDefault();
        e.stopPropagation();
      });
    } while (i--);
  }

  return {
    initialize: function() {
      setupEvents();
      countBigFrames();
    }
  };
})();

main.initialize();