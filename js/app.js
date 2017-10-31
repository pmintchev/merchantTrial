$(document).foundation();
$(document).ready(function() {
	//pop the avatar
	setTimeout(function(){
		$(".appear-1").css({"visibility":"visible"})
		var popObject = $(".appear-1");
		bounceIt (popObject);
	},300);

	//change avatar to aniumated gif
    setTimeout(function(){
		$(".chat-profile").attr("src","images/smile.gif");
	},1600);
	
	function RepeatGif(){
		setTimeout(function repeatGif(){
		$(".chat-profile").attr("src","images/smile.gif");
		RepeatGif();
	},10000);
	}
	
	RepeatGif();
	
	//pop the text
	setTimeout(function(){
		$(".appear-2").css({"visibility":"visible"})
		var popObject = $(".appear-2");
		bounceIt (popObject);
	},800);
	
	//show content
	
	$(".bubble").click(function(){
		//show checkmark
		$(this).find('.checkmark').css({"visibility":"visible"});
		
		//get content for bubble
		var bubbleID = $(this).attr('bubbleID');
		var solutionContent = $("." + bubbleID).html();
		$(".chat-bubble").html(solutionContent).addClass('drop-down');
		setTimeout(function(){
		$(".chat-bubble").removeClass("drop-down");
		},500);
		
	});
	
	$(".checkmark").click(function(e){
		e.stopPropagation();
		$(this).css({"visibility":"hidden"});
		//var solutionContent = $(".default-solution").html();
		//$(".chat-bubble").html(solutionContent);
	});
}
);

//functions



function bounceIt (bounceElement) {
	$(bounceElement).addClass("bounce");
	setTimeout(function(){
		$(bounceElement).removeClass("bounce");
	},500);
}


