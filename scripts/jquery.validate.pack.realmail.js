jQuery.validator.addMethod( 
	"realMail", 
	function(value, element) { 
		var mail = element.value.toLowerCase();
		if (mail.indexOf('@hotmail.') > 0
			|| mail.indexOf('@msn.com') > 0
			|| mail.indexOf('@live.com') > 0
			|| mail.indexOf('@live.nl') > 0
			|| mail.indexOf('@live.be') > 0
			|| mail.indexOf('gmail.com') > 0
			|| mail.indexOf('googlemail.com') > 0
			|| mail.indexOf('uggsrock.com') > 0
			|| mail.indexOf('yahoo.com') > 0
			|| mail.indexOf('slopsbox.com') > 0
			|| mail.indexOf('thisisnotmyrealemail.com') > 0
			|| mail.indexOf('mailinator.com') > 0
			|| mail.indexOf('owlpic.com') > 0)
		{
			return false; 
		} 
		else return true; 
	}, 
	"Vul uw zakelijke e-mail adres in (geen gratis e-mail adres)." 
);