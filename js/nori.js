!function ($) {
	$('a[href*=#]').on('click', function(event){     
		$('html,body').animate({scrollTop:$(this.hash + "-header").offset().top}, 500);
	});

	prettify = function() {
		$("code").addClass("prettyprint");
		$("code").addClass("lang-cpp");
		prettyPrint();
		MathJax.Hub.Rerender();
	};

	$("#prelim-body").load("prelim.html", prettify);
	$("#pa1-body").load("pa1.html", prettify);
	$("#pa2-body").load("pa2.html", prettify);

	$(".fancybox").fancybox();

	$('.tooltips').tooltip({ selector: "span[rel=tooltip]" })
}(window.jQuery)

