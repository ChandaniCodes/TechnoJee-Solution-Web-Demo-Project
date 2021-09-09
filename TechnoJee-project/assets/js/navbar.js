$(window).scroll(function () {
  if ($(this).scrollTop() > 100) $('.back-to-top').css('display', 'block');
  else $('.back-to-top').css('display', 'none');
});
