function init_tiltable(){
  $(".tiltable").wrap("<div class='video-wrapper'></div>")
  $(".video-wrapper").wrap("<div class='player-wrapper'></div>")

  var buttons = $('<div id="control-buttons-container">'+
  '<div id="play-button" class="control-buttons">'+
  '<i class="fa fa-play"></i>'+
  '</div>'+
  '<div id="volume-up" class="control-buttons">'+
  '<i class="fa fa-volume-up"></i>'+
  '</div>'+
  '<div id="volume-down" class="control-buttons">'+
  '<i class="fa fa-volume-down"></i>'+
  '</div>'+
  '<div id="volume-mute" class="control-buttons">'+
  '<i class="fa fa-volume-off"></i>'+
  '</div>'+
  '<div id="toggle-zoom" class="control-buttons">'+
  '<i class="fa fa-arrows-alt"></i>'+
  '</div>'+
  '</div>')
  $( ".player-wrapper" ).append(buttons);

}

function full_height(){
  $(".tiltable").css("height", $(window).height()+"px");
}

function initial_height(){
  $(".tiltable").css("height", "initial");
}

function toggle_zoom(){

  if(parseInt($(".tiltable").css("height")) == $(window).height()){
    initial_height();
  }else{
    full_height();
  }
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
    }else{
      $(".video-wrapper").scrollLeft(Math.abs(tiltLR*12));
    }
  }, false);
}


$(document).ready(function(){
  init_tiltable();
  $(".tiltable")[0].play();
  $("#toggle-zoom").click(function(){
    toggle_zoom();

  });
})
