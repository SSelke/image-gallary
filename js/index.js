//Definetly Needs to be refactored, very dry code.
//will Update

$("#login-btn").on('click', function(){
	if($(".signUp").hasClass("pop-up")){
		$(".signUp .container").css("top", "-400px");
		$(".signUp").toggleClass("pop-up aminate");
	}
	$("#blur").css("filter", "blur(3px)");
	$("div.login").css("fliter", "blur(0px)");
	$(".login .container").css("top", "50px");
	$(".login").addClass("pop-up");
});

$("#sign-up-btn").on('click', function(){
	if($(".login").hasClass("pop-up")){
		$(".login .container").css("top", "-400px");
		$(".login").toggleClass("pop-up aminate");
	}
	$("#blur").css("filter", "blur(3px)");
	$(".signUp .container").css("fliter", "none");
	$(".signUp .container").css("top", "50px");
	$(".signUp").addClass("pop-up");
});

//+++++++THE EXIT BUTTON+++++++++//

$("div.cross-log").on("click", function(){
	$("#blur").css("filter", "blur(0px)");
	$(".login .container").css("top", "-400px");
	$(".login").toggleClass("pop-up aminate");
});

$("div.cross-sign").on("click", function(){
	$("#blur").css("filter", "blur(0px)");
	$(".signUp .container").css("top", "-400px");
	$(".signUp").toggleClass("pop-up aminate");
});


//trying to get exit button in one function
// $("cross-sign, cross-log").on("click", function(){
// 	var tag;

// 	if($(".cross-sign")){
// 		tag = ".signUp"
// 	} else if($("cross-log")){
// 		tag = ".login"
// 	}
// 	console.log(tag);
// 	$("#blur").css("filter", "blur(0px)");
// 	$(tag + " .container").css("top", "-400px");
// 	$(tag).toggleClass("pop-up aminate");
// });

