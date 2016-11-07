$(document).ready(function() {

	var ryu = '.ryu-standing'

	$(ryu).append('<img src="/images/ryu-standing-still.png"/>');	
	
	$(ryu).mouseenter( function(){
		$(this).removeAttr('img');	
		$('.ryu-standing > img').attr('src','/images/ryu-ready-position.gif')		
	});

	$(ryu).mouseleave(function(){
		$(this).removeAttr('img');	
		$(this).html('<img src="/images/ryu-standing-still.png"/>')		
	});

	$(ryu).on('click', function(){
		$(this).removeAttr('img');
		$(this).html('<img src="/images/ryu-throwing-hadouken.png"/>')
		$(this).attr('src', '/images/hadouken.gif')
	});
});