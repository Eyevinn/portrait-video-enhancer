function get_orientation_mode(){
  var width = $(window).width();
  var height = $(window).height();

  if(height > width){
    return true;
  }else{
    return false;
  }
};



var right_pos = $("video").width() - $(window).width();


if (window.DeviceOrientationEvent) {

  window.addEventListener('deviceorientation', function(eventData) {
    var tiltLR = Math.floor(eventData.gamma);
    $("#LR").text(tiltLR);
    var tiltFB = Math.floor(eventData.beta);
    $("#FB").text(tiltFB);



    $("#log2").text(right_pos);


    if(tiltLR > 0){
      $(".video-wrapper").css("left", 0)
    }else if (parseInt($(".video-wrapper").css("right")) > right_pos) {

    }else{
      $(".video-wrapper").css("left", tiltLR*4 + "%")
    }



  }, false);
}




$.fn.zoom = function () {

  var w_height = $(window).height();
  console.log(w_height);
  $(this).css("height", w_height +"px");
};

$(document).ready(function(){
  $("video").zoom();
  var isPlaying = false;
  var portrait = get_orientation_mode();
  var videoPlayer = $("video")[0];
  $(window).on("orientationchange",function(){
    portrait = get_orientation_mode();
    if(portrait){
      $("video").zoom();
    }else{
      //$("video").css("zoom", "100%");
    }
  });

  $("#play-button").click( function(){
    console.log("click");
    $(this).find('i').toggleClass('fa-pause fa-play');
   togglePlay();
 })
 function togglePlay() {
   console.log(isPlaying);
  if (isPlaying) {
    videoPlayer.pause()
    console.log("if");
    isPlaying = false;

  } else {
    console.log("else");
    videoPlayer.play();
    $(this).find('i.fa').removeClass('fa-play');
    $(this).find("i.fa").addClass('fa-pause');
    isPlaying = true;

  }
 };

});
