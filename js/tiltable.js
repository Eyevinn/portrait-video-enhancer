function init_tiltable(){
  $(".tiltable").wrap("<div class='video-wrapper'></div>")
}

function full_height(el){
  $(".tiltable").css("height", $(window).height()+"px");
}


function check_change(value, old_value){
  return Math.abs(old_value - value);
}



if (window.DeviceOrientationEvent) {
  init_tiltable();
  window.addEventListener('deviceorientation', function(eventData) {
    var tiltLR = Math.floor(eventData.gamma);
    //$("#LR").text(tiltLR +300);
    var tiltFB = Math.floor(eventData.beta);
    //$("#FB").text(tiltFB);
    var right_pos = $("tiltable").width() - $(window).width();
    //$("#log2").text(right_pos);
    if(tiltLR > 0){
      $(".video-wrapper").scrollLeft(0)
    }else if(check_change(tiltLR, $(".video-wrapper").scrollLeft())>12){
      $(".video-wrapper").scrollLeft(Math.abs(tiltLR*12));
    }
  }, false);
}


$(document).ready(function(){
  init_tiltable();
  $(".tiltable")[0].play();
  $(".zoom-btn").click(function(){
    full_height($(this));

  });
})
