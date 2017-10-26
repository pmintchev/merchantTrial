$(document).foundation();
$(document).ready(function() {
	var bounceText = $(".dialogue:eq(0)");
	$(".chat-profile").click(function(){
		bounceIt(bounceText);
	})
}
);

//functions
function bounceIt (bounceElement) {
	$(bounceElement).addClass("bounce");
	setTimeout(function(){
		$(".bounce").removeClass("bounce");
	},500);
}
