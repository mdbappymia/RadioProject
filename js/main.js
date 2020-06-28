$(document).ready(function () {
  var mixer = mixitup(".mix");
  $(".listen-area").hover(function () {
    $(".play-h2").toggleClass("p-h2");
  });

  $(".home-2").hover(function () {
    $(".music-h").toggleClass("music-v");
  });
  $(".about").hover(function () {
    $(".music-a").toggleClass("music-v");
  });
  $(".advertise").hover(function () {
    $(".music-ad").toggleClass("music-v");
  });
  $(".contact").hover(function () {
    $(".music-c").toggleClass("music-v");
  });

  /*waypoints*/
  $(".js-waypoints").waypoint(function (direction) {
    if (direction == "down") {
      $(".navbar-section").addClass("sticky");
    } else $(".navbar-section").removeClass("sticky");
  });

  $(".contact-link-1").click(function () {
    $(".send-message").addClass("active");
    $(".radio-tele").removeClass("active");
    $(".contact-us").removeClass("active");
    $(".c-link-text-1").addClass("c-border-bottom");
    $(".c-link-text-2").removeClass("c-border-bottom");
    $(".c-link-text-3").removeClass("c-border-bottom");
  });
  $(".contact-link-2").click(function () {
    $(".contact-us").addClass("active");
    $(".send-message").removeClass("active");
    $(".radio-tele").removeClass("active");
    $(".c-link-text-2").addClass("c-border-bottom");
    $(".c-link-text-1").removeClass("c-border-bottom");
    $(".c-link-text-3").removeClass("c-border-bottom");
  });
  $(".contact-link-3").click(function () {
    $(".radio-tele").addClass("active");
    $(".send-message").removeClass("active");
    $(".contact-us").removeClass("active");
    $(".c-link-text-3").addClass("c-border-bottom");
    $(".c-link-text-2").removeClass("c-border-bottom");
    $(".c-link-text-1").removeClass("c-border-bottom");
  });
  b = 1;
  if ((b = 1)) {
    $("#playbutton").hide();
    $(".pause-icon").fadeIn();
    $(".play-h2").hide();
    $(".pause-area").fadeIn();
  }
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//audio
function clicToPlay() {
  var myAudio = document.getElementById("myaudio");
  $(myAudio)[0].play();
  $("#playbutton").hide();
  $(".pause-icon").fadeIn();
  $(".play-h2").hide();
  $(".pause-area").fadeIn();
}

function clicToPause() {
  var myAudio = document.getElementById("myaudio");
  $(myAudio)[0].pause();
  $("#playbutton").fadeIn();
  $(".pause-icon").hide();
  $(".pause-area").hide();
}
