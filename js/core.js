var contact = {
	setPosition: function() {
		$('#contact').css({
			'height' : $(window).outerHeight(),
			'width' : $(window).outerWidth(),
			'top' : -($(window).outerHeight()),
		});
	},

	showForm: function() {
		contact.setPosition();

		$('#contact').css('display', 'block').animate({
			'top' : 0,
		});
	},
};

$(document).ready(function() {
	$('#get-in-touch').on('click', contact.showForm);
});