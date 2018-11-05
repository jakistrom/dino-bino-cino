
$(document).ready(function(){
    
    let mottoWidth = $('h2').width();

    $('.slider').slick({
        dots: true,
        infinite: true, 
        arrows: true,     
        slidesToShow: 1       
    });
   
    $('.hamburger--stand').click(function() {
        $('.hamburger--stand').toggleClass('is-active');
        $('.mobile-navigation').slideToggle('down');
        $('body').toggleClass('hidden');
        $('.mobile-navigation', 'ul').css({"border-left": "40px solid black"})
    });

    $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        if(currentSlide == 0){
            $( '#B' ).text('D')
        }
        else if(currentSlide == 1){
            $( '#B' ).text('B')
        }
        else{
            $( '#B' ).text('C')
        }
    });

    $('.logo-about').click(function(){
        $('.slider-blade').addClass('curtainOn');
        $('.logo-container').css('cursor', 'default');
        $('.slider-blade-content').show();
       
        console.log(mottoWidth)
        $('.motto').animate( { width: mottoWidth }, 3000 );
    })

    $('.close').click(function(){
        $('.slider-blade').removeClass('curtainOn');
        $('.slider-blade').addClass('curtainoff');

          })
    
   

      let NavY = $('.navbar').offset().top; 
      let stickyNav = function()
      {
          let ScrollY = $(window).scrollTop();
        
          if (ScrollY > NavY) 
          { 
              $('.navbar').css('background', 'rgba(0, 0, 0, 0.6)');
              $('.mobile-navigation').css('top', '0');
           }
            
          else
          {
              $('.navbar').css('background', 'none'); 
              $('.mobile-navigation').css('top', '-20px');
          }
      };



      $(window).scroll(function() 
      {
          stickyNav();
      });
  });




 


 