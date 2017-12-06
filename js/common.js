$(window).scroll(function () {

  var st = $(this).scrollTop();

  $('.head-fon img').css({
    'transform' : 'translateY(-' + st/30 + '%)'
  })

  $('.head-fon h1').css({
    'transform' : 'translateY(' + st/2 + '%)'
  })

  $('.section-1 .figur1').css({
    'transform' : 'translateY(' + st/25 + '%)'
  })

  $('.section-1 .figur2').css({
    'transform' : 'translateY(-' + st/13 + '%)'
  })

})
