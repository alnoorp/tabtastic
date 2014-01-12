$(function() {
  $('.pos_1').click(function() {
    $('.pos_1').removeClass("top");
    $('.pos_2').addClass("top");
    $('.pos_3').addClass("top");
    $('.pos_4').addClass("top");
    $('.pos_5').addClass("top");
    $('.pos_1').toggleClass("tab_bottom");
    $('.page_1').toggleClass("bottom");
  });
  $('.pos_2').click(function() {
    $('.pos_1').addClass("top");
    $('.pos_2').removeClass("top");
    $('.pos_3').addClass("top");
    $('.pos_4').addClass("top");
    $('.pos_5').addClass("top");
    $('.pos_2').toggleClass("tab_bottom");
    $('.page_2').toggleClass("bottom");
  });
  $('.pos_3').click(function() {
    $('.pos_1').addClass("top");
    $('.pos_2').addClass("top");
    $('.pos_3').removeClass("top");
    $('.pos_4').addClass("top");
    $('.pos_5').addClass("top");
    $('.pos_3').toggleClass("tab_bottom");
    $('.page_3').toggleClass("bottom");
  });
  $('.pos_4').click(function() {
    $('.pos_1').addClass("top");
    $('.pos_2').addClass("top");
    $('.pos_3').addClass("top");
    $('.pos_4').removeClass("top");
    $('.pos_5').addClass("top");
    $('.pos_4').toggleClass("tab_bottom");
    $('.page_4').toggleClass("bottom");
  });
  $('.pos_5').click(function() {
    $('.pos_1').addClass("top");
    $('.pos_2').addClass("top");
    $('.pos_3').addClass("top");
    $('.pos_4').addClass("top");
    $('.pos_5').removeClass("top");
    $('.pos_5').toggleClass("tab_bottom");
    $('.page_5').toggleClass("bottom");
  });
});



