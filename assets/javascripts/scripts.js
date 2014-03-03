$(document).ready(function() {

  $(window).scroll(function() {
    var columnTop = $('.scroll-check').position().top+$('.scroll-check').outerHeight(true);

    $('#polaroid').each(function(){

      if ($(window).scrollTop()>= columnTop + 400) {
        $('#polaroid').addClass("slideUp");
      }
      else {
        $('#polaroid').removeClass("slideUp");
      }

    });
  });


  $(window).scroll(function() {
    $('nav').each(function(){
    var titleHeight = $('#title').offset().top;

      if ($(window).scrollTop()>= titleHeight+ 420) {
        $('nav').addClass("slideRight");
      }
      // else {
      //   $('nav').removeClass("slideRight");
      //   $('nav').addClass("hide");
      // }

    });
  });

  $(window).scroll(function() {
    if ($(window).scrollTop()>= 2800){
      $('#scroll-Top').css('display','block');
      $('#scroll-Top').addClass('slideLeft');
    }

  });

  $('#scroll-Top').click(function(){

    // $('#polaroid').css('visibility', 'hidden');
    // $('#polaroid').removeClass('slideUp');

    $('html, body').animate({
      scrollTop: $("#title").offset().top
    }, 2200);

  });

  var currentUrl = null;
  var polaroidControl = function(event){
    var fromTop = $(window).scrollTop(),
      url = null;
    console.log(fromTop);

    if(fromTop + $(window).height() < $(document).height() -3000) {
      url = 'assets/images/polaroid-grey-1.png';
    }
     else if(fromTop + $(window).height() < $(document).height() -2600) {
      url = 'assets/images/polaroid-grey-2.png';
    }
    else if(fromTop + $(window).height() < $(document).height() -2200) {
      url = 'assets/images/polaroid-grey-3.png';
    }
    else if(fromTop + $(window).height() <= $(document).height() -1800) {
      url = 'assets/images/polaroid-grey-4.png';
    }
    else if(fromTop + $(window).height() < $(document).height() -1500) {
      url = 'assets/images/polaroid-grey-5.png';
    }
    else if(fromTop + $(window).height() <= $(document).height() -1200) {
      url = 'assets/images/polaroid-grey-6.png';
    }
    else if(fromTop + $(window).height() < $(document).height() -900) {
      url = 'assets/images/polaroid-grey-7.png';
    }
    else if(fromTop + $(window).height() <= $(document).height() -600) {
      url = 'assets/images/polaroid-grey-8.png';
    }
    else if(fromTop + $(window).height() < $(document).height() -300) {
      url = 'assets/images/polaroid-grey-9.png';
    }
    else if(fromTop + $(window).height() <= $(document).height() - 0) {
      url = 'assets/images/polaroid-grey-10.png';
    }


    if(url !== currentUrl){
    $('#polaroid').css('background','url('+ url+')');
      currentUrl = url;
    }
  };

  function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        // $('<img/>')[0].src = this;
        // Alternatively you could use:
        (new Image()).src = this;
      });
    }

  // Usage:

  preload([
    'assets/images/polaroid-grey-1.png',
    'assets/images/polaroid-grey-2.png',
    'assets/images/polaroid-grey-3.png',
    'assets/images/polaroid-grey-4.png',
    'assets/images/polaroid-grey-5.png',
    'assets/images/polaroid-grey-6.png',
    'assets/images/polaroid-grey-7.png',
    'assets/images/polaroid-grey-8.png',
    'assets/images/polaroid-grey-9.png',
    'assets/images/polaroid-grey-10.png'
  ]);

  $(window).scroll(polaroidControl);

  $('#navName').click(function() {
    $('#main-nav').addClass('hide');
    $('.profile-overlay').addClass('show');
  });

  $('.close').click(function() {
    $('#main-nav').removeClass('hide');
    $('.profile-overlay').removeClass('show');
  });

  $('#logo-muse').bind('click',function(event) {
    $('.muse').removeClass('none');
    $('.mistress').addClass('none');

    $('#js-mistress').addClass('hide');
    $('#js-muse').addClass('slideDown');
    $('#js-muse').removeClass('hide');
    $('#js-mistress').removeClass('slideDown');
    $('.mistress').find('div.frame').last().removeClass('scroll-check');
    $('.muse').find('div.frame').last().addClass('scroll-check');


    // $('#showcase').fadeOut(500, function() {
    //   $('#showcase').attr('src',"assets/images/muse-title3.jpg").fadeIn(300);
    // return false;
    // });
  });

  $('#logo-mistress').bind('click',function(event) {
    $('.mistress').removeClass('none');
    $('.muse').addClass('none');

    $('#js-muse').addClass('hide');
    $('#js-mistress').addClass('slideDown');
    $('#js-mistress').removeClass('hide');
    $('#js-muse').removeClass('slideDown');
    $('.muse').find('div.frame').last().removeClass('scroll-check');
    $('.mistress').find('div.frame').last().addClass('scroll-check');

    // $('#showcase').fadeOut(500, function() {
    //   $('#showcase').attr('src',"assets/images/mistress-title.jpg").fadeIn(300);
    // return false;
    // });
  });
});

