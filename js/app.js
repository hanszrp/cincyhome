$( document ).ready(function() {
	var expanderTrigger = document.getElementById("js-expander-trigger");
	var expanderContent = document.getElementById("js-expander-content");
	console.log( "ready!" );
	$('#start').on("click",function(){
		console.log('click');
		$('.hero-inner').animate({opacity : 0},100);
		$('.hero').css('background-color','#F1F1F1');
		$('.hero-inner').slideToggle();
		$('.cards').fadeToggle('fast', function(){

			$( ".card" ).animate({
				opacity: 1,
				top: "-=350"
			}, 400,  function() {
    	  // Animation complete.
    	});

		});


    }); //end click
	$('.card').on("click",function(){
		$(this).css("transform", "scale(1.2)");
		$('.container').fadeOut('slow');
		$('footer').fadeOut('slow');
		$('.secondary').fadeOut('slow');

	});
	$('.card').on("hover",function(){
		$('.card').css('z-index','1');
		$(this).css('z-index','9999');
	});
	$('#close').on("click",function(){
		console.log('click');
		$('.cards').toggle();
		$('.hero-inner').toggle();
		$('.hero-inner').animate({opacity: 1.0},400);
		$('.hero').css('background-color','#C9441E');
		$( ".card" ).animate({
				opacity: 0,
				top: "+=350"
			}, 600, function(){
				
				
		});
		


		});
	$('.js-accordion-trigger').bind('click', function(e){
	  jQuery(this).parent().find('.submenu').slideToggle(300,'easeOutQuint',function(){});  // apply the toggle to the ul
	  jQuery(this).parent().toggleClass('is-expanded');
	  
	  e.preventDefault();
	});


  $('#js-expander-trigger').click(function(){
    $(this).toggleClass("expander-hidden");

  });
  $(function() {
    $("#modal-1").on("change", function() {
      if ($(this).is(":checked")) {
        $("body").addClass("modal-open");
      } else {
        $("body").removeClass("modal-open");
      }
    });

    $(".modal-fade-screen, .modal-close").on("click", function() {
      $(".modal-state:checked").prop("checked", false).change();
    });

    $(".modal-inner").on("click", function(e) {
      e.stopPropagation();
    });
  });


   





});//end ready
