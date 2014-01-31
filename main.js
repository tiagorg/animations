var main = (function() {
  var lisArray = getAnimations();

  function getAnimations() {
    var lis, lisArray, numberOfAnimations, i, li;

    lis = document.getElementsByTagName('li');
    lisArray = [];
    numberOfAnimations = 0;
    i = lis.length - 1;

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

  function recalculateBorders() {
    var i, li;

    i = lisArray.length - 1;

    do {
      li = lisArray[i];

      if (Math.random() * 2 % 2 >= 1) {
        li.classList.add('thick');
      }
      else {
        li.classList.remove('thick');
      }
    } while (i--);
  }

  function countBigFrames() {
    var numberOfBigFrames = document.querySelectorAll('li.lefmost, li.rightmost, li.thick').length;
    console.log('numberOfBigFrames: ' + numberOfBigFrames);
  }

  function setupEvents() {
    var i, li;

    i = lisArray.length - 1;

    do {
      li = lisArray[i];

      li.addEventListener('click', function(e) {
        var el = e.currentTarget;

        if (el.className !== 'happy') {
          alert("Removing... Trust me, it will be removed.");

          el.parentNode.removeChild(el);
          recalculateBorders();
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
      recalculateBorders();
      countBigFrames();
    }
  };
})();

main.initialize();