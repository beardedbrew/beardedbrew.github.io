$('.logo').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	$(this).removeClass('bounceInLeft').addClass('wobble');
});