$(function(){
  $(window).scroll(function(){
    var window_scrooltop = $(this).scrollTop()

    $('.parallax').each(function(){
      var obj = $(this)

      if(window_scrooltop >= obj.position().top - obj.heigth() && window_scrooltop <= obj.position().top + obj.heigth()) {

        var divisor = typeof obj.attr('data-divisor') == 'undefined' ? 4 : obj.attr('data.divisor')

        if(obj.is(':first-child')){
          var bg_pos = (window_scrooltop - obj.position().top) / divisor
        }else{
          var bg_pos = (window_scrooltop - obj.position().top + (obj.heigth() - 100)) / divisor
        }

        obj.css({
          'backgroud-position' : '50%' + bg_pos + 'px'
        });
        
      }
    })
  })
})