 
 $(document).ready(function () {
 	
	$('.changingpic1').cycle({  
    fx:      'scrollLeft',  
    speed:    500,  
    timeout:  5000  
	});
	
	$('.buttons').mouseenter(function() {
		$(this).css("background-color", "orange");	
		$(this).css("color", "white");	
	
	});
	
	$('.buttons').mouseleave(function() {
		$(this).css("background-color", "white");	
		$(this).css("color", "black");
	});
 	
  
  $.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  var pos = scrollTop / this.speed;
  this.el.css('transform', 'translateY(' + -pos + 'px)');
};

$(function(){
  $('[data-scroll-speed]').moveIt();
});
  
      $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
            
        }); 
    
    });


$('.why').anyslider({
	showBullets: false,
	showControls: true,
	reverse: false

});

 });
 
 /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(x) {
    document.getElementById("myDropdown").classList.toggle("show");
 		x.classList.toggle("change");
}



// Close the dropdown if the user clicks outside of it
