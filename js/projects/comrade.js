$(document).ready(function(){
	
	// $(window).load(function(){
		$('.yesterday-list >:first-child').css('opacity','1');
	// });

	function makeSelection(){
		var $this = $(this);

	$('.shared').children('.message-wrap').removeClass('select');

		$this.addClass('select');
	}
	$('.message-wrap').click(makeSelection);
});