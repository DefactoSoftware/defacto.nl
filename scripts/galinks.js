$(document).ready(function(){
	
	$("a").filter(function() {
		return this.href.match(/.pdf|.jpg|.gif|.png|.doc/);
	}).click(function(){
		var GAlink = this.href.replace('http://www.defacto.nl','').replace('/uploads','');
		pageTracker._trackPageview(GAlink);
	});
	
});