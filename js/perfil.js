// animation = 'animated flipInY';
// $(".row").on('click', function(event) {
// 	event.preventDefault();
// 	$(this).children('.ico-contact').addClass(animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
// 		$(this).removeClass(animation);
// 		$(this).children('span').css({
//   			'display': 'block',
// 		});
// 	});
// 	// $(this).children('.ico-contact').addClass(animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
// 	// 	$(this).parent().removeClass(animation);
// 	// });
// });
$("#modal1").animatedModal({
	modalTarget:'animatedModal1',
	animatedIn:'lightSpeedIn',
	animatedOut:'bounceOutDown',
	color:'#3498db'
});

$("#modal2").animatedModal({
	modalTarget:'animatedModal2',
	animatedIn:'lightSpeedIn',
	animatedOut:'bounceOutDown',
	color:'#3498db'
    // Callbacks
    // beforeOpen: function() {
    //     console.log("The animation was called");
    // },           
    // afterOpen: function() {
    //     console.log("The animation is completed");
    // }, 
    // beforeClose: function() {
    //     console.log("The animation was called");
    // }, 
    // afterClose: function() {
    //     console.log("The animation is completed");}
});
$(document).ready(function() {
	large = screen.width;
	alto = screen.height;
	if (large>960) {
		alto = alto-175;
		console.log(alto);
		$('.contenedor').css({
			"height": alto,
		});
	};
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

$('.dentro').scroll(function(){
	large = screen.width;
	scr=$(this).scrollLeft();
	if (scr < (large-180)/2){
		reset();
		$('#1pos').addClass('posactive icon-radio-button-on').attr('value',scr);
	}else if (scr >large-((large-180)/2) && scr < large+((large-180)/2)){
		reset();
		$('#2pos').addClass('posactive icon-radio-button-on').attr('value',scr);
	}else if (scr >2*large-((large-180)/2) && scr < 2*large+((large-180)/2)){
		reset();
		$('#3pos').addClass('posactive icon-radio-button-on').attr('value',scr);
	}else if (scr >3*large-((large-180)/2) && scr < 3*large+((large-180)/2)){
		reset();
		$('#4pos').addClass('posactive icon-radio-button-on').attr('value',scr);
	}else if (scr >4*large-((large-180)/2) && scr < 4*large+((large-180)/2)){
		reset();
		$('#5pos').addClass('posactive icon-radio-button-on').attr('value',scr);
	}else if (scr >5*large-((large-180)/2) && scr < 5*large+((large-180)/2)){
		reset();
		$('#6pos').addClass('posactive icon-radio-button-on').attr('value',scr);
	}else if (scr >6*large-((large-180)/2) && scr < 6*large+((large-180)/2)){
		reset();
		$('#7pos').addClass('posactive icon-radio-button-on').attr('value',scr);
	}else if (scr >7*large-((large-180)/2)){
		reset();
		$('#8pos').addClass('posactive icon-radio-button-on').attr('value',scr);
	}
});
function reset(){
	$('.posactive').attr('class', 'icon-radio-button-off');
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
	alto = screen.height;
	if (large<960) {
		$(".kl_icon").width(large);
	$(".aun_dentro").width(large*8);
	}else{
		alto = alto-175;
		console.log(alto);
		$('.contenedor').css({
			"height": alto,
		});
	};

	if ($(this).scrollTop() > 50 && large < 500) {
		$("#menuId li").slideUp('fast');
	}
});
$('.menu li a').on('click', function(event) {
	event.preventDefault();
	link = $(this).attr('link');
	pos=$('.'+link).position();;
	$( 'html, body' ).animate({scrollTop:pos.top}, 1000);
	return false;	
});

$scrollTopLink = $('footer');

$scrollTopLink.on('click', function() {
	$( 'html, body' ).animate({scrollTop:0}, 1000);
	return false;
} );