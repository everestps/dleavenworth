$("a").click(function() {
  return $("html, body").animate({
    scrollTop: $($.attr(this, "href")).offset().top
  }, 500), window.location.hash = "", !1
}), $(".scrollup").hide(), $(function() {
  $(window).scroll(function() {
    $(this).scrollTop() > 100 ? $(".scrollup").fadeIn() : $(".scrollup").fadeOut()
  })
});*/

$('a').click(function(){
  $('html', 'body').animate({
    scrollTop: $($.attr(this, "href")).offset().top
  }, 500);
});
