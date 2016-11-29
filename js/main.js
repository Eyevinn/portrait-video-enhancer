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
    var tiltLR = eventData.gamma;
    $("#LR").text(tiltLR);
    var tiltFB = eventData.beta;
    $("#FB").text(tiltFB);


    $(".video-wrapper").css("top", tiltFB*4 + "%")
    $(".video-wrapper").css("left", tiltLR*4 + "%")
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

  $(".play-button").click( function(){
    console.log("click");
   /*playButton.find('span').toggleClass('glyphicon-pause glyphicon-play');*/
   togglePlay();
 })
 function togglePlay() {
   console.log(isPlaying);
  if (isPlaying) {
    videoPlayer.pause()
    console.log("if");
    isPlaying = false;
    //playButton.innerHTML='Pause';
    //playButton.style.backgroundColor = '#91D7F3 ';

  } else {
    console.log("else");
    videoPlayer.play();
    isPlaying = true;
   // playButton.innerHTML='Play';
   // playButton.style.backgroundColor = '#C9EAF8 ';
  }
 };

});