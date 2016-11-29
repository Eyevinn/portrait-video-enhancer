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
    $("#LR").text(tiltLR);
    var tiltFB = Math.floor(eventData.beta);
    $("#FB").text(tiltFB);

    var right_pos = $("video").width() - $(window).width();

    $("#log2").text(right_pos);


    if(tiltLR > 0){
      $(".video-wrapper").css("left", 0)
    }else{
      $(".video-wrapper").css("left", tiltLR*2 + "%");
    }

    $(".video-wrapper").css("top", tiltFB*2 + "%");

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
   /*playButton.find('span').toggleClass('glyphicon-pause glyphicon-play');*/
   togglePlay();
 })
 function togglePlay() {
   console.log(isPlaying);
  if (isPlaying) {
    videoPlayer.pause()
    $(".play-button").innerHTML="Play";
    console.log("if");
    isPlaying = false;
    //playButton.innerHTML='Pause';
    //playButton.style.backgroundColor = '#91D7F3 ';

  } else {
    console.log("else");
    videoPlayer.play();
    $(".play-button").innerHTML="Pause";
    isPlaying = true;
   // playButton.innerHTML='Play';
   // playButton.style.backgroundColor = '#C9EAF8 ';
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



});
