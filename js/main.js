function get_orientation_mode(){
  var width = $(window).width();
  var height = $(window).height();
  if(height > width){
    return true;
  }else{
    return false;
  }
};

function check_change(value, old_value){
  return Math.abs(old_value - value);
}

$.fn.center = function () {
		$(this).css("left", ($(window).width() - this.width()) /2);
	};




if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function(eventData) {
    var tiltLR = Math.floor(eventData.gamma);
    //$("#LR").text(tiltLR +300);
    var tiltFB = Math.floor(eventData.beta);
    //$("#FB").text(tiltFB);
    var right_pos = $("tiltable").width() - $(window).width();
    //$("#log2").text(right_pos);
    if(tiltLR > 0){
      $(".video-wrapper").scrollLeft(0)
    }else if(check_change(tiltLR, $(".video-wrapper").scrollLeft())>5){
      $(".video-wrapper").scrollLeft(Math.abs(tiltLR*4));
    }
  }, false);
}

$.fn.zoom = function () {
  var w_height = $(window).height();
  console.log(w_height);
  $(this).css("height", w_height +"px");
};