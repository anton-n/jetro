$(function() {
	$('.js-slider').slick({
		autoplay: true,
		infinite: true,
		arrows: true,
		appendArrows: '.arr',
		prevArrow: '.js-slider__prev',
		nextArrow: '.js-slider__next',
	});
});