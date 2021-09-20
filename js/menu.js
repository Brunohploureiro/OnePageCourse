$(document).ready(function(){
    $('#btn-menu').click(function(e){
      e.preventDefault()
      $('#menu').toggle('slow')
    })

    $('a').click(function(e){
      e.preventDefault()

      let url = $(this).attr('href')
      
      if(url == 'home'){
         $('#'+url).show()
         $('#about').hide()
         $('#action').hide()
         $('#contact').hide()
      }
      else if(url == 'about'){
       $('#'+url).show()
       $('#home').hide()
       $('#action').hide()
       $('#contact').hide()
      }
      else if(url == 'action'){
       $('#'+url).show()
       $('#home').hide()
       $('#about').hide()
       $('#contact').hide()
      }
      else if(url == 'contact'){
       $('#'+url).show()
       $('#home').hide()
       $('#action').hide()
       $('#about').hide()
      }     
    })
 })
