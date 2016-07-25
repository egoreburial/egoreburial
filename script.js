$(function(){
$(window).load(function () {
	$('.loadingOverlay, .loadingGif').fadeOut(1000);
	$('#home, #video, #about').removeClass('hidden');
	function showReleaseInfo() {
	$("h1").delay(500).animate({ 'opacity': '1'},3000).delay(500).animate({ 'opacity': '0'},3000);
	$('#cover').delay(7200).animate({'margin-left': '0'},1000);
	$('.release_info_wr').delay(7200).animate({'margin-left': '0'},1000);
	$('.goDown').delay(8300).fadeIn(300);		
};
showReleaseInfo();

});
});

$(document).ready(function() {

//Navigator
$(function() {
	var hiddenArea = (document.documentElement.clientHeight - 51);
	$('nav').addClass('hidden');
	if (document.documentElement.clientWidth > 	435) {
	$(window).scroll(function() {
		if ($(window).scrollTop() > hiddenArea) {
			$('nav').fadeIn(400);
		} else {
			$('nav').fadeOut(300);
		};
	});
} else {
	$('nav').toggleClass('hidden');
	$('#menuWrap').toggleClass('hidden');
};
});

$('#menuButton').click(function() {
		$('#menuWrap').fadeToggle(300);
	});


$('a[href^="#"]').on('click', function(event) {
	$('#menuWrap').fadeToggle(300);
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        if (document.documentElement.clientWidth > 	435) {
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 50
        }, 1000);
      } else {$('html, body').stop().animate({
            scrollTop: target.offset().top}, 1000);
    };
    }
});

// Home section

// Zoom function to resize Release info block
function zoomRelease() {
	var vPort = document.documentElement.clientWidth;
	var zoom = 100/(1903/vPort);
	$('.release').css({'zoom' : zoom + '%'});
};

zoomRelease();
$(window).on('resize orientationChange', zoomRelease);

// Video section

// Slider
	var pos = 0;
	var step = ($('.element').outerHeight(true))*1.8;
	var elementsCount = $('.slider').find('.element').length;

// Buttons visible function	
	function showHide() {
		if (pos === 0) {
			$('.btnUp').hide();
		} else if (pos === (elementsCount - 3)) {
			$('.btnDown').hide();
		} else {
			$('.btnUp').show();
			$('.btnDown').show();
		};
	};
	showHide();

//Buttons Actions	
	$(".btnDown").click(function() {
			if (pos< (elementsCount - 3)) {
				$('.sliderContent').animate({'margin-top' : '-=' + step + '%'});
				pos = (pos + 1);
				showHide();
			};
	});

	$(".btnUp").click(function() {
			if (pos > 0) {
				$('.btnUp').show();
				$('.sliderContent').animate({'margin-top' : '+=' + step + '%'});
				pos = (pos - 1);
				showHide();		
			};
	});

// URL send to Frame

	$('.element img').click(function() {
				var url = $(this).attr('id');
				$('.js-video iframe').attr('src', 'https://www.youtube.com/embed/' + url);
	});

});