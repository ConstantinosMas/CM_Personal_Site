$(document).ready(function () {



$(".fade-in").fadeIn(1000).removeClass('hidden');

$(".contact-icon1").fadeIn(1000).removeClass('hidden');

$(".skill-fade-in").fadeIn(1000).removeClass('hidden');

$(".home-text").fadeIn(1000).removeClass('hidden');


$(window).on('resize', function(){
  var window_width = $(window).width();
  if(window_width > 978) {
    $("#aboutme-carousel").removeClass('hidden');
    $(".more-aboutme").addClass('hidden');
  }
  else {
    $("#aboutme-carousel").addClass('hidden');
    $(".more-aboutme").removeClass('hidden');
  }

  if(window_width < 900) {
    $(".fa-brands").removeClass('fa-3x');
  }
  else {
    $(".fa-brands").addClass('fa-3x');
  }
  if (window_width < 600) {
    $(".logo-name").addClass('hidden');
    $(".logo-img").css("width", "75%")
  }
  else {
    $(".logo-name").removeClass('hidden');
    $(".logo-img").css("width", "10%")
  }
});


var window_width = $(window).width();
  if(window_width > 978) {
    $("#aboutme-carousel").removeClass('hidden');
  }
  else {
    $(".more-aboutme").removeClass('hidden');
  }

  if (window_width < 900) {
    $(".fa-brands").removeClass('fa-3x');
  }
  if (window_width < 600) {
    $(".logo-name").addClass('hidden');
    $(".logo-img").css("width", "75%")
  }
  else {
    $(".logo-name").removeClass('hidden');
    $(".logo-img").css("width", "10%")
  }







setTimeout(
  function()
  {
    $(".contact-icon2").fadeIn(1000).removeClass('hidden');

  }, 500);
  setTimeout(
    function()
    {
      $(".contact-icon3").fadeIn(1000).removeClass('hidden');

    }, 800);
    setTimeout(
      function()
      {
        $(".contact-icon4").fadeIn(1000).removeClass('hidden');

      }, 1100);

      setTimeout(
        function()
        {
          $(".email-text").fadeIn(1000).removeClass('hidden');

        }, 1400);


        setTimeout(
          function()
          {
            $(".contact-icon5").fadeIn(1000).removeClass('hidden');

          }, 2000);


        function displayModal(event){
            $("#emailModal").modal('show');
        }

        $('.email-modal').click(displayModal);


        function displayStubbornModal(event){
            $("#stubborn").modal('show');
        }

        $('#email-more').click(displayStubbornModal);

        function displayAboutMeModal(event){
            $("#aboutmeModal").modal('show');
        }

        $('.more-aboutme').click(displayAboutMeModal);




});


var current_bg = 0

$(window).on('resize', function(){
    var win = $(this);
    var current_background = $(".big-heading").html();
    if (win.width() < 600) {
      if (current_background == "Desing that works"){
        $(".drip-sm").show();
        $(".drip-sm").css("display", "block")
      }
      else {

      $(".drip-sm").css("display", "none");}

  }
});


$(".next-btn").click(function() {
  ++current_bg
  if(current_bg > 2){
    current_bg = 0
    $(".home-fade").fadeOut("fast", function() {
      $("#image_holder").css("background-image", "url('./images/background.png')");
      $(".paint_brush").show();
      $(".bg2").hide();
      $(".big-heading").html("I'm Constantinos");
      $(".smaller-text").html("I study programming and I dabble in design");
      $(".home-fade").fadeIn("fast", function() {
        $(".home-fade").show();
      })
    });

  }
  else if(current_bg == 1){
    $(".home-fade").fadeOut("fast", function() {
      var window_width = $(window).width();
      $("#image_holder").css("background-image", "url('./images/background2.jpg')");
      $(".paint_brush").hide();
      $(".bg2").show();
      $(".big-heading").html("Design that works");
      $(".smaller-text").html("Functional, responsive, elegant. Simple or complex. You envision it, I create it.");
      $(".home-fade").fadeIn("fast", function() {
        $(".home-fade").show();
      })
    });

  }
  else{
    $(".home-fade").fadeOut("fast", function() {
      $("#image_holder").css("background-image", "url('./images/background4.jpg')");
      $(".paint_brush").hide();
      $(".bg2").hide();
      $(".big-heading").html("Don't settle");
      $(".smaller-text").html("Develop it, test it, improve it, change it.");
      $(".home-fade").fadeIn("fast", function() {
        $(".home-fade").show();
      })
    });

  }




});

$(".previous-btn").click(function() {
  --current_bg
  if(current_bg < 0){
    current_bg = 2
    $(".home-fade").fadeOut("fast", function() {

      $("#image_holder").css("background-image", "url('./images/background4.jpg')");
      $(".paint_brush").hide();
      $(".bg2").hide();
      $(".big-heading").html("Don't settle");
      $(".smaller-text").html("Develop it, test it, improve it, change it.");
      $(".home-fade").fadeIn("fast", function() {
        $(".home-fade").show();
      })
    });

  }
  else if(current_bg == 0){
    $(".home-fade").fadeOut("fast", function() {
      $("#image_holder").css("background-image", "url('./images/background.png')");
      $(".paint_brush").show();
      $(".bg2").hide();
      $(".big-heading").html("I'm Constantinos");
      $(".smaller-text").html("I study programming and I dabble in design");
      $(".home-fade").fadeIn("fast", function() {
        $(".home-fade").show();
      })
    });

  }
  else{
    $(".home-fade").fadeOut("fast", function() {
      var window_width = $(window).width();
      $("#image_holder").css("background-image", "url('./images/background2.jpg')");
      $(".bg2").show();
      if (window_width < 600){
        $(".drip-sm").css("display", "block");
      }
      $(".paint_brush").hide();
      $(".big-heading").html("Design that works");
      $(".smaller-text").html("Functional, responsive, elegant. Simple or complex. You envision it, I create it.");
      $(".home-fade").fadeIn("fast", function() {
        $(".home-fade").show();
      })
    });

  }





});




$('.skill-icon').hover(function(){
      $(this).addClass('transition');
},function(){
    $(this).removeClass('transition');
});

$('.contact-icon').hover(function(){
      $(this).addClass('transition');
},function(){
    $(this).removeClass('transition');
});


$(".next-btn").hover(function(){
  $("#right-button").attr("src", "images/rightNewInv.png");
}, function(){
  $("#right-button").attr("src", "images/rightNew.png");
}
);


$(".previous-btn").hover(function(){
  $("#left-button").attr("src", "images/leftNewInv.png");
}, function(){
  $("#left-button").attr("src", "images/leftNew.png");
}
);










var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
