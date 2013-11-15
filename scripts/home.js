$(document).ready(function() {

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
		
	// Home video
	/*
	function videoNav(title, currentArray, currentIndex, currentOpts) {
		var html = '<div class="videonav clearfix">';
		html += '<div class="title">' + title + '</div>';
		html += '<div class="parts">';
		
		$.each(currentArray, function(i) {
			if (currentIndex == i) {
				html += '<a href="javascript:;" class="active">' + (i+1) + '</a>';
			} else {
				html += '<a href="javascript:;" onclick="$.fancybox.pos(' + i + ')">' + (i+1) + '</a>';
			}
		});
		
		html += '</div></div>';
		return html;
	}
	*/
	function videoNav(title, currentArray, currentIndex, currentOpts) {
		var label;
		var html = '<div class="videonav clearfix">';
		
		$.each(currentArray, function(i) {
			if (currentIndex == i) {
				html += '<a href="javascript:;" class="active">' + title + '</a>';
			} else {
				label = $(currentArray[i]).attr('title');
				html += '<a href="javascript:;" onclick="$.fancybox.pos(' + i + ')">' + label + '</a>';
			}
		});
		
		html += '</div>';
		return html;
	}
	
	$("#home a.iframe").fancybox({
		width				: 853,
		height			: 515,
		padding			: 0,
		autoScale			: false,
		titlePosition 		: 'inside',
		transitionIn			: 'none',
		transitionOut		: 'none',
		overlayColor		: '#000',
		overlayOpacity		: 0.6,
		titleShow			: true,
		titlePosition			: 'inside',
		showNavArrows		: false,
		titleFormat			: videoNav
	});

	// Rondleiding
	$("a.zoom").fancybox({
		'titlePosition' 		: 'inside',
		'enableEscapeButton'	: 'true',
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic',
		'speedIn'			: '900',
		'speedOut'			: '300',
		'overlayColor'		: '#000',
		'titleShow'			: 'true'
	});

});