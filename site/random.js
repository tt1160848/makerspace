/***********************************
    Responsive Menu
***********************************/
$(document).ready(function() {
 	
  var numbClick = 0;
  
  $('a[href*="#scrolldown"]').click(function(){
    
    var elemToGo = $(this).attr('href');
    var speed = 750;
    
    if(numbClick!=0){
      elemToGo += numbClick;
       if(!$(elemToGo).length){ // if the section #sectionAnyNumber doesn't exist, then.
         elemToGo = "#scrolldown"; //I put back the first section.
         numbClick=0; //I reinit the the value of number of click.
       }
    }
    
    numbClick++;
   
    $('html,body').animate(
    {
      scrollTop: $(elemToGo).offset().top
    },speed
    );
    return false;
  });
  
  
  
  $(window).resize(function() {
    if ($(this).width() > 480) {
      $('.nav ul li').removeClass('nav-expanded').css('display', 'inline-block');
    } else {
      $('.nav ul li').css('display', 'none');
    }
  });

  $('.menu-trigger').click(function() {
    if ($(window).width() <= 480 && $('.menu-trigger').is(':visible')) {
      $('.nav ul li').slideToggle(400, function() {
        $(this).toggleClass('nav-expanded');
      });
    }
  });
});