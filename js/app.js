$(function() {
  $('.pos_1').click(function() {
    $('.pos_2').addClass("top");
    $('.pos_1').removeClass("top");
    $('.pos_1').toggleClass("tab_bottom");
    $('.page_1').toggleClass("bottom");
  });
  $('.pos_2').click(function() {
    $('.pos_1').addClass("top");
    $('.pos_2').removeClass("top");
    $('.pos_2').toggleClass("tab_bottom");
    $('.page_2').toggleClass("bottom");
  });


});



