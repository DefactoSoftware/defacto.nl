jQuery.validator.addMethod(
  "realMail",
  function (value, element) {
    var mail = element.value.toLowerCase();
    var blacklist = ['@hotmail.',
      '@msn.com',
      '@live.com',
      '@live.nl',
      '@live.be',
      'gmail.com',
      'googlemail.com',
      'uggsrock.com',
      'yahoo.com',
      'slopsbox.com',
      'thisisnotmyrealemail.com',
      'mailinator.com',
      'owlpic.com'
    ];

    if (new RegExp(blacklist.join("|")).test(mail)) {
      return false;
    }
    return true;
  },
  "Vul uw zakelijke e-mail adres in (geen gratis e-mail adres)."
);