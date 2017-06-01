$(function(){
	
	/* Efekt Smooth Scroll */
	
	$('a[href*="#"]:not([href="#"])').click(function(){
		$('body').animate( { scrollTop: $(this.hash).offset().top - 50 }, 500 );
	});

	/* Scroll menu color change */
	
	if($(window).scrollTop() >= 50){
		$('#main-nav').addClass('scroll');
	}
	
	$(window).scroll(function(){
		if($(window).scrollTop() >= 50 ) {
			$('#main-nav').addClass('scroll');
			$('#main-nav').css({'transition':'all 0.3s'})
		} else {
			$('#main-nav').removeClass('scroll');
		}
	});
	
});

$ (function(){
	
	
	var slider = $('#slider'); 
	var slideShow = $('.slide-show'); 
	var slideCount = $('.single-slide').length; 
	var slideWidth = 100/slideCount;
	var slideIndex = 0;
	
	console.log(slideCount);
	
	
	$('.slide-show').css('width', slideCount*100 + '%'); 
	
	
	slideShow.find('.single-slide').each(function(index) {
								
			$(this).css({
				'width' : slideWidth + '%',
				'margin-left': slideWidth * index + '%'
			});
		 });
			
	//PREV
		
	$('.prev-slide').click(function(e){
		e.preventDefault();
		slide(slideIndex - 1);	
		//console.log(newSlideIndex);
	});
	
	//NEXT
		
	$('.next-slide').click(function(e) {
		e.preventDefault();
		slide(slideIndex + 1);	
		//console.log(newSlideIndex);
	});

	//SLIDE Function
		
 	function slide (newSlideIndex){ 
		console.log(newSlideIndex);
	 	if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
			return; 
		}
		
		var slideCaption = $('.slider-caption').eq(newSlideIndex);
		var slideText = $('p').eq(newSlideIndex);
		var bomb = $('.fa-bomb').eq(newSlideIndex);
		slideCaption.hide();
		slideText.hide();
		bomb.hide();
		
		var marginLeft = (newSlideIndex * (-100)) + '%';
		
		$('.slide-show').animate({'margin-left': marginLeft}, 800, indexNapis);
		
		function indexNapis() {
			slideIndex = newSlideIndex;
			slideCaption.fadeIn('slow');
			slideText.fadeIn('slow');
			bomb.fadeIn('slow');
		}
	};

});

