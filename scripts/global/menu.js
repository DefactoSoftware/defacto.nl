var menu_timeout    = 500;
var menu_closetimer = 0;
var menu_dropdown = 0;

function menu_open() {
	menu_canceltimer();
	menu_close();
	menu_dropdown = $(this).find('ul').css('visibility', 'visible');
}

function menu_close() {
	if(menu_dropdown) menu_dropdown.css('visibility', 'hidden');
}

function menu_timer() {
	menu_closetimer = window.setTimeout(menu_close, menu_timeout);
}

function menu_canceltimer() {
	if(menu_closetimer) {
		window.clearTimeout(menu_closetimer);
		menu_closetimer = null;
	}
}

$(document).ready(function() {
	$('#menul > li').bind('mouseover', menu_open);
	$('#menul > li').bind('mouseout',  menu_timer);
});

document.onclick = menu_close;