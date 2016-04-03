(function () {
  $(document).ready(function() {
    changeSize();
    changeColor();

    $('.blink').hover(changeColor);
  });

  $(window).resize(function() {
    changeSize();
  });


  function changeSize() {
    var rem = $(window).height() / 15;
    if (rem > 14) {
      $('html').css('font-size', rem);
    };
  }

  function changeColor() {
    var col = 'rgb(' + random256() + ',' + random256() + ',' + random256() + ')';
    $('body').css('background', col);
  }

  function random256() {
    return Math.floor(Math.random() * 256)
  }
})();
