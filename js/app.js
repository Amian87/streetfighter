$(document).ready(function() {

	var ryu = '#ryu-fighting';
	
	$(ryu).html('<img src="/images/ryu-standing-still.png">');	

	$(ryu).hover(function(){
		
		$(this).attr('src','/images/ryu-ready-position.gif');		
		
		

	}, function(){

		$(this).attr('src', '/images/ryu-standing-still.png');

	});

	$(ryu).on('mousedown', function(){
		// $(this).removeAttr('img');
		// $(this).attr({src: '/images/ryu-throwing-hadouken.png'});
		$('#hadouken').attr({src:'/images/hadouken.gif'});
	});

	$(ryu).on('mouseup', function(){
		$(this).attr('src', '/images/ryu-standing-still.png');
		
	});
});