$(document).ready(function(){

	hideButtonsOnStart();

	function hideButtonsOnStart(){
		$("#redButton").hide();
		$("#yellowButton").hide();
		$("#blueButton").hide();
		$("#multiButton").hide();
	}

	
	$("#colorButton").click(function(){
		console.log('toggling');
	    $("#redButton").toggle('show');
	    $("#yellowButton").toggle('show');
	    $("#blueButton").toggle('show');
	    $("#multiButton").toggle('show');
    });
	
	$('#colorButton').click(function() {
		$('#redButton').addClass('animated zoomIn');
		$('#yellowButton').addClass('animated zoomIn');
		$('#blueButton').addClass('animated zoomIn');
		$('#multiButton').addClass('animated zoomIn');
	});

	$('#multiButton').click(function() {
		$('#multiButton').addClass('animated rotateIn');

	});


	$('.img').mouseover(function() {
		$(this).addClass('animated pulse');
	});


	$('.img').mouseout(function() {
    	$(this).removeClass('animated pulse');

   	});

   	$('.img-multi').mouseover(function() {
		$(this).addClass('animated pulse');
	});


	$('.img-multi').mouseout(function() {
    	$(this).removeClass('animated pulse');

   	});

	$('.button').mouseover(function() {
		$(this).addClass('animated pulse');
	});


	$('.button').mouseout(function() {
    	$(this).removeClass('animated pulse');

   	});

});
	
    

