$(document).ready(function() {

  console.log('Loaded');


  $(".btn").click(function(event) {
    $('body').css({
      backgroundcolor: 'red',
      property2: 'value2'
    });

    // var $this = $(this);
    // $('img').addClass("animated bounceIn");
    // $('img').removeClass("animated bounceIn");
    // $('img').addClass("animated bounceIn");
    // setTimeout(function(){$('img').addClass('animated zoomIn')}, 1
    //   );
    $('button').click(function(){
    $('img').removeClass().addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass();
      // This allows the animation to be continuous
    })
  })
  });

})
