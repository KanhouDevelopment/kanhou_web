$(document).ready(function () {
	updateCurrentActiveButton();
});

function currentPage() {
	if(window.location.href.indexOf("about") > -1) {
		return "about-nav";
    }
    else if(window.location.href.indexOf("projects") > -1) {
		return "projects-nav";
    }
    else if(window.location.href.indexOf("contact") > -1) {
		return "contact-nav";
    }
    else {
		return "home-nav";
    }

};

function updateCurrentActiveButton() {
	$(".nav-item").removeClass("active"); //this will remove the active class from previously active menu item 

	if(currentPage() == "home-nav") {
		$('#home-nav').addClass('active');
	};
	if(currentPage() == "about-nav") {
		$('#about-nav').addClass('active');
	};
	if(currentPage() == "projects-nav") {
		$('#projects-nav').addClass('active');
	};
	if(currentPage() == "contact-nav") {
		$('#contact-nav').addClass('active');
	};
};