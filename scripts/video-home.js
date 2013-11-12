$(document).ready(function() {
		
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
