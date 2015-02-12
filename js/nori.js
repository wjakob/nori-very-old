!function ($) {
	$(function(){ window.prettyPrint && prettyPrint() });

	$('a[href*=#]').on('click', function(event){     
		$('html,body').animate({scrollTop:$(this.hash + "-header").offset().top}, 500);
	});

	$("#prelim-body").load("prelim.html");
	$("#pa1-body").load("pa1.html");
	$("#pa2-body").load("pa2.html");

	$(".fancybox").fancybox();

	$('.tooltips').tooltip({ selector: "span[rel=tooltip]" })
}(window.jQuery)

