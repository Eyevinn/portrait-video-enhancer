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





$.fn.zoom = function () {
  var w_height = $(window).height();
  console.log(w_height);
  $(this).css("height", w_height +"px");
};