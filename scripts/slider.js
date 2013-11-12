$(document).ready(function()
{
	var $slider = $("#slider-overflow"),
		slider_api;
	
	// Init banner slider
	$slider.scrollable({
		items: '#slides',
		speed: 500,
		circular: true,
		keyboard: false
	}).navigator({
		navi: '#slider-bullets'
	}).autoscroll(5000);
	
	slider_api = $slider.data("scrollable");
	
	/*
	// banner
	$('#slides').cycle({
		fx:	'fade',
		timeout: 8000,
		prev: #pagination #prev', 
		next: #pagination #next'
	});
	*/
	// referenties
	$('#logos').cycle({
		fx: 'fade',
		timeout: 3000
	});
});