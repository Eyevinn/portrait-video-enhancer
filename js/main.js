function get_orientation_mode(){
  var width = $(window).width();
  var height = $(window).height();

  if(height > width){
    return true;
  }else{
    return false;
  }
};






if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function(eventData) {
    var tiltLR = Math.floor(eventData.gamma);
    $("#LR").text(tiltLR +300);
    var tiltFB = Math.floor(eventData.beta);
    $("#FB").text(tiltFB);

    var right_pos = $("video").width() - $(window).width();

    $("#log2").text(right_pos);

    if(tiltLR > 0){
      $(window).scrollLeft(0)
    }else{
      $(window).scrollLeft(Math.abs(tiltLR*10));
    }

    $(".video-wrapper").css("top", tiltFB*4 + "%");

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
  var isMuted = false;
  var lastVolume = videoPlayer.volume;

  $("#play-button").click( function(){
    $("#play-button").find('i.fa').toggleClass('fa-pause fa-play');
    togglePlay();
  })
  function togglePlay() {
   console.log(isPlaying);
   if (isPlaying) {
    videoPlayer.pause()
    isPlaying = false;

  } else {
    videoPlayer.play();
    isPlaying = true;
  }
};
$("#volume-up").click( function(){
  videoPlayer.volume += 0.1;
  console.log("Volume: " + videoPlayer.volume);
})
$("#volume-down").click( function(){
  videoPlayer.volume -= 0.1;
  console.log("Volume: " + videoPlayer.volume);
})
$("#volume-mute").click( function(){
  toggleMute()
})
  function toggleMute() {
   if (isMuted == true) {
      videoPlayer.volume = lastVolume;
      isMuted = false;
  } else {
      lastVolume = videoPlayer.volume;
      videoPlayer.volume = 0;
      isMuted = true;
  }
};



});
