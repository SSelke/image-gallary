$("h4").on("click", function () {
	$(".faq").toggle();
    $("i").fadeOut("fast", function(){
    	$(this).toggleClass("fa-chevron-right fa-chevron-down");
    	$(this).fadeIn("fast");
    });
});