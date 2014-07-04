$(window).on('load', function() {
	$(".nav-network .btn-hover").hover(
	  function () {
	    $(this).addClass("btn-social");
	    $(this).removeClass("btn-social-icon");
	  },
	  function () {
	  	parentThis = this
	  	setTimeout(function(){
	  		$(parentThis).addClass("btn-social-icon");
	    	$(parentThis).removeClass("btn-social");
	    },100);
	  }
	);
});
