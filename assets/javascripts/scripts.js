$(document).ready(function() {

  $(window).scroll(function() {
    $('#polaroid').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+580) {
        $(this).addClass("slideRight");
      }

    });
  });


    $(window).scroll(function() {
    $('nav').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+580) {
        $(this).addClass("slideRight");
      }

    });
  });

  var currentUrl = null;
  var polaroidControl = function(event){
    var fromTop = $(window).scrollTop(),
      url = null;
    console.log(fromTop);

    if(fromTop < 840){
      url = 'assets/images/polaroid-grey-1.png';
    }
    else if(fromTop < 1680){
      url = 'assets/images/polaroid-grey-2.png';
    }
    else if(fromTop < 2520){
      url = 'assets/images/polaroid-grey-3.png';
    }
    else if(fromTop < 3360){
      url = 'assets/images/polaroid-grey-4.png';
    }
     else if(fromTop < 4200){
      url = 'assets/images/polaroid-grey-5.png';
    }
    else if(fromTop < 5040){
      url = 'assets/images/polaroid-grey-6.png';
    }
    else if(fromTop < 5880){
      url = 'assets/images/polaroid-grey-7.png';
    }
    else if(fromTop < 6720){
      url = 'assets/images/polaroid-grey-8.png';
    }
    else if(fromTop < 7560){
      url = 'assets/images/polaroid-grey-9.png';
    }
    else if(fromTop < 8460){
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

  $('#navName').click(function(){
    $('.profile-overlay').addClass('show');
  });

  $('.close').click(function(){
    $('.profile-overlay').removeClass('show');
  });
});

