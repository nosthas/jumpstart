$(document).ready(function(){

  $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      infinite: true,
      draggable: false,
      pauseOnFocus: false,
      pauseOnHover: false
    });

  var user_scroll = 0;

  $(window).scroll(function(){

    var scroll = $(this).scrollTop();

    if ( scroll - user_scroll > 50 ) {
        var nav_height = $( '.navbar' ).height();
        $( ".navbar" ).animate({top: -nav_height},150,function(){});
        user_scroll = scroll;
    }
    else if ( user_scroll - scroll > 50 ) {
        var nav_height = $( '.navbar' ).height();
        $( ".navbar" ).animate({top: 0},150,function(){});
        user_scroll = scroll;
    }
  });
});
