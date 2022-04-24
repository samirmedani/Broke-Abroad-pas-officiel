

function responsiveBurger() {

    (window).on('resize', function() {
        var win = $(this);
        if (win.width() > 450) {
            console.log("test");
            $('#burger-nav').removeClass('invisible-burger');
      
        } else {
            $('#burger-nav').addClass('visible-burger');
        }
      });

}

