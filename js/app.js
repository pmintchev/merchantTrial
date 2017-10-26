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
	},1000);
	
	//pop the text
	setTimeout(function(){
		$(".appear-2").css({"visibility":"visible"})
		var popObject = $(".appear-2");
		bounceIt (popObject);
	},500);
	
}
);

//functions




function bounceIt (bounceElement) {
	$(bounceElement).addClass("bounce");
	setTimeout(function(){
		$(bounceElement).removeClass("bounce");
	},500);
}


