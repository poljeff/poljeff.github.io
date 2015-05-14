animation = 'animated flip';
$(".row").on('click', function(event) {
	event.preventDefault();

	$(this).children('.ico-contact').addClass(animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
		$(this).parent().removeClass(animation);
	});
});
$("#demo01").animatedModal({
	modalTarget:'animatedModal',
    animatedIn:'lightSpeedIn',
    animatedOut:'bounceOutDown',
    color:'#3498db'
});

            //demo 02
$("#demo02").animatedModal({
    modalTarget:'modal-02',
    animatedIn:'lightSpeedIn',
    animatedOut:'bounceOutDown',
    color:'#3498db',
    // Callbacks
    beforeOpen: function() {
        console.log("The animation was called");
    },           
    afterOpen: function() {
        console.log("The animation is completed");
    }, 
    beforeClose: function() {
        console.log("The animation was called");
    }, 
    afterClose: function() {
        console.log("The animation is completed");
    }
});
$(document).ready(function() {
	preload();
	$("#select").click(function() {
			// alert('dsd');
			$("#menuId li").slideToggle('fast');
		});
	});
	$('.nav_kn').click(function(event) {
		wid = screen.width;
		hei = screen.height;
		console.log(screen.width + '---' + screen.height);
		scr=$('.dentro').scrollLeft();
		if (scr <1113) {
		$('.dentro').animate({scrollLeft:2226}, 10000);

		}else if (scr >1113){
			reset();
			$('.dentro').animate({scrollLeft:0}, 10000);
		}
		return false;
		
	});
	$(".kl_icon").click(function(event) {
			var posicion = $(this).position();
			console.log("left: " + posicion.left + ", top: " + posicion.top )
		});;
	$('.dentro').scroll(function(){
		
		scr=$(this).scrollLeft();
		if (scr <61) {
			reset();
			$('#1pos').attr('class', 'glyphicon glyphicon-star-empty');
		}else if (scr >243 && scr < 400){
			reset();
			$('#2pos').attr('class', 'glyphicon glyphicon-star-empty');
		}else if (scr >557 && scr < 716){
			reset();
			$('#3pos').attr('class', 'glyphicon glyphicon-star-empty');
		}else if (scr >878 && scr < 1030){
			reset();
			$('#4pos').attr('class', 'glyphicon glyphicon-star-empty');
		}else if (scr >1193 && scr < 1340){
			reset();
			$('#5pos').attr('class', 'glyphicon glyphicon-star-empty');
		}else if (scr >1519 && scr < 1659){
			reset();
			$('#6pos').attr('class', 'glyphicon glyphicon-star-empty');
		}else if (scr >1837 && scr < 1958){
			reset();
			$('#7pos').attr('class', 'glyphicon glyphicon-star-empty');
		}else if (scr >2175){
			reset();
			$('#8pos').attr('class', 'glyphicon glyphicon-star-empty');
		}
	});
	function reset(){
		$('.glyphicon-star-empty').attr('class', 'glyphicon glyphicon-star');
	}
		function preload(){
				$("#loader").delay(1500).fadeOut("slow",function(){
					$("body").css({
					'overflow': 'auto'
				});
			});
		}

		$scrollTopLink = $('footer');
		$(window).scroll(function(){
			if ($(this).scrollTop() <= 120) {
				$scrollTopLink.fadeIn();
			} else {
				$scrollTopLink.fadeOut();
			}
			large = screen.width;
			if ($(this).scrollTop() > 50 && large < 500) {
				$("#menuId li").slideUp('fast');
			}
		});		
		$scrollTopLink.on('click', function() {
			$( 'html, body' ).animate({scrollTop:0}, 1000);
			return false;
} );