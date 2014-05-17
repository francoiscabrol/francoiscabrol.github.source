
 $(window).on('load', function() {
 	//TODO Finish to implement the lightbox
 	// Initialize lightbox links
 	$("div.lightbox").css("opacity", 0);

 	// Create methods
 	var closeBox = function (box) {
 		box.css("display", "none");
 		box.css("opacity", 0);
 	}
 	var openBox = function (box) {
 		box.css("display", "block");
 		box.css("opacity", 1);
 		centerContent(box)
 	}
 	var resizeBox = function (box) {
 		var w = box.width();
 		var h = box.height();
 	}
 	var centerContent = function(box){
 		var box_content = box.find(".content");
 		var w = box.width()/2 - box_content.width()/2
 		var h = box.height()/2 - box_content.height()/2
 		box_content.css("left", w)
 		box_content.css("top", h)
 	}

 	// Add handler on all links with the class lightbox
 	$( "a.lightbox" ).click(function() {
 		// Find the lightbox div
 		var box = $("div.lightbox[lightbox='"+ $(this).attr("lightbox") +"']");
 		// Open the lightbox
 		openBox (box)
 		// Add handler for closing the box 
 		box.click(function(){
 			closeBox($(this));
 		});
 	});
 });