String.prototype.ellipse = function(characterLimit) {
  	var str = $($this).text();
  	var charLimit = characterLimit;
  	var ellipsed = str.substring(0, characterLimit)+'...';

  	return ellipsed;
}

// Define a character min
// get the width of the parent
// Somehow determine how wide the string would be when not ellipsed
// 


$(document).ready(function(){
});