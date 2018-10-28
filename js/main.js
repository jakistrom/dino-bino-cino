$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,      
        slidesToShow: 1       
    });
   
    $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        if(currentSlide == 0){
            $( '.firstLetter' ).text('d')
            $( '#B' ).text('D')
        }
        else if(currentSlide == 1){
            $( '.firstLetter' ).text('b')
            $( '#B' ).text('B')
        }
        else{
            $( '.firstLetter' ).text('c')
            $( '#B' ).text('C')
        }
    });

  
      let NavY = $('.navbar').offset().top; 
      let stickyNav = function()
      {
          let ScrollY = $(window).scrollTop();
        
          if (ScrollY > NavY) 
          { 
              $('.navbar').css('background', 'rgba(0, 0, 0, 0.6)');
          }
            
          else
          {
              $('.navbar').css('background', 'none'); 
          }
      };



      $(window).scroll(function() 
      {
          stickyNav();
      });
  });




 


 