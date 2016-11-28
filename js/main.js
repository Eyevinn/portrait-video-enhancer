function get_orientation_mode(){
  var width = $(window).width();
  var height = $(window).height();

  if(height > width){
    return true;
  }else{
    return false;
  }
};



$.fn.zoom = function (w_height, v_height) {
  var zoom_value = w_height / v_height * 100;
  $(this).css("zoom", zoom_value + "%");
};

$(document).ready(function(){
  var portrait = get_orientation_mode();
  $(window).on("orientationchange",function(){
    portrait = get_orientation_mode();
    if(portrait){
      $("video").zoom(600, 300);
    }else{
      //$("video").css("zoom", "100%");
    }
  });
});
