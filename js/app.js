$(document).foundation();
$(document).ready(function() {
	//bounce the first text box
	var bounceObject = $(".dialogue:eq(0)");
	$(".chat-profile").click(function(){
		bounceIt(bounceObject);
	});
	//pop the avatar on load
	setTimeout(function(){
		$(".chat-profile").css({"visibility":"visible"})
		var popObject = $(".chat-profile");
		popIt (popObject);
	},1500);
	
}
);

//functions
function bounceIt (bounceElement) {
	$(bounceElement).addClass("bounce");
	setTimeout(function(){
		$(".bounce").removeClass("bounce");
	},500);
}

function popIt (popElement) {
	$(popElement).addClass("pop");
	setTimeout(function(){
		$(".pop").removeClass("pop");
	},500);
}


