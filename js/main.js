$(document).ready(function() {

    $('.c-header__burger').click(function(){
		$('.c-header__list').toggleClass('is-open');
			$(".c-header__burger").toggleClass('cruz');
    });

    $('.c-works__slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
        
    });


});


