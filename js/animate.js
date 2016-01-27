var isMobile = {
	Android: function() { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function() { return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i); },
	any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

var w = $(window);

var navbar = $("#navbar");

var opener = $("#opener");

var projectsCurrent = $("#projects-current");
var rankCurrent = $("#rank-current");

var about = $("#about");
var aboutHeading = $("#about-heading");
var aboutCenter = $("#about-center");
var aboutLeft = $("#about-left");
var aboutRight = $("#about-right");

var projects = $("#projects");
var projectsCarousel = $("projects-carousel");

var skills = $("#skills");
var skillsHeading = $("#skills-heading");
var skills1 = $("#skills-1");
var skills2 = $("#skills-2");
var skills3 = $("#skills-3");
var skills4 = $("#skills-4");

var contact = $("#contact");
var contactHeading = $("#contact-heading");
var contactRow1 = $("#contact-row1");
var contactRow2 = $("#contact-row2");
var contactRow3 = $("#contact-row3");

var footer = $("#footer");

var scrolledIntoView = {
	"opener": false,
	"about": false,
	"projects-display": false,
	"projects-current": false,
	"skills": false,
	"learning-current": false,
	"competitions": false,
	"rank-current": false,
	"experience": false,
	"contact": false,
	"footer": false
}

var repeater;

$(function() {

	if (isMobile.any()) {
		navbar.css("visibility", "visible");
		opener.css("visibility", "visible");
		projectsCurrent.css("visibility", "visible");
		
		aboutHeading.css("visibility", "visible");
		aboutCenter.css("visibility", "visible");
		aboutLeft.css("visibility", "visible");
		aboutRight.css("visibility", "visible");

		skillsHeading.css("visibility", "visible");
		skills1.css("visibility", "visible");
		skills2.css("visibility", "visible");
		skills3.css("visibility", "visible");
		skills4.css("visibility", "visible");

		contactHeading.css("visibility", "visible");
		contactRow1.css("visibility", "visible");
		contactRow2.css("visibility", "visible");
		contactRow3.css("visibility", "visible");

		footer.css("visibility", "visible");
	} else {
		opener.css("visibility", "visible").addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			navbar.css("visibility", "visible").addClass('animated flipInX');
		});
		repeater = setInterval(scrollCheck, 50);
	}

	w.scroll(function() {

		if (w.scrollTop() >= contact.offset().top - 61) {
			$("#thecompetition-nav").removeClass('active');
			$("#whoweare-nav").removeClass('active');
			$("#testimonials-nav").removeClass('active');
			$("#contactus-nav").addClass('active');
		} else if (w.scrollTop() >= about.offset().top - 61) {
			$("#thecompetition-nav").removeClass('active');
			$("#whoweare-nav").addClass('active');
			$("#testimonials-nav").removeClass('active');
			$("#contactus-nav").removeClass('active');
		} else if (w.scrollTop() >= opener.offset().top - 61) {
			$("#thecompetition-nav").removeClass('active');
			$("#whoweare-nav").removeClass('active');
			$("#testimonials-nav").removeClass('active');
			$("#contactus-nav").removeClass('active');
		}
	});

});

function scrollCheck() {

	if (isScrolledIntoView(projectsCurrent)) {
		projectsCurrent.css("visibility", "visible").addClass('animated fadeIn');
	}

	if (isScrolledIntoView(rankCurrent) && !scrolledIntoView["rank-current"]) {
		$('#hackerrankNumber').animateNumber({ number: 14 }, 1000);
		scrolledIntoView["rank-current"] = true;
	}

	if (isScrolledIntoView(about)) {
		aboutHeading.css("visibility", "visible").addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			aboutCenter.css("visibility", "visible").addClass('animated fadeIn');
		});
		aboutLeft.css("visibility", "visible").addClass('animated fadeInLeft');
		aboutRight.css("visibility", "visible").addClass('animated fadeInRight');
	}

	if (isScrolledIntoView(projects) && !scrolledIntoView["projects-display"]) {
		scrolledIntoView["projects-display"] = true;
	}

	if (isScrolledIntoView(skills)) {
		skillsHeading.css("visibility", "visible").addClass('animated bounceInUp');
		setTimeout(function(){ skills1.css("visibility", "visible").addClass('animated bounceInUp'); }, 200); 
		setTimeout(function(){ skills2.css("visibility", "visible").addClass('animated bounceInUp'); }, 400); 
		setTimeout(function(){ skills3.css("visibility", "visible").addClass('animated bounceInUp'); }, 600); 
		setTimeout(function(){ skills4.css("visibility", "visible").addClass('animated bounceInUp'); }, 800); 
	}

	if (isScrolledIntoView(contact)) {
		contactHeading.css("visibility", "visible").addClass('animated fadeIn');
		contactRow1.css("visibility", "visible").addClass('animated fadeInLeft');
		contactRow2.css("visibility", "visible").addClass('animated fadeInRight');
		contactRow3.css("visibility", "visible").addClass('animated fadeInLeft');
	}

	if (scrollDone()) {
		clearInterval(repeater);
	}

}

// check if element is scrolled into view
function isScrolledIntoView(elem) {
	var showLoc = w.scrollTop() + 61 + w.height()/2;
	var elemTop = elem.offset().top;
	return (elemTop <= showLoc);
}

function scrollDone() {
	return (Math.round(footer.offset().top + footer.outerHeight()) == $(window).scrollTop() + $(window).height());
}
