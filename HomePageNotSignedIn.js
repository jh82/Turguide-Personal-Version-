var HomePageNotSignedIn = function() {

    this.pageReady = function() {
    	this.makeDOMReady();
    	this.fillInHeader();
    	this.makeMainReady();
    	this.fillInAllTitles();
    	this.fillInMainLogo();
    	this.setUpEventHandlers();
    }

    this.makeDOMReady = function() {
    	var bodyNode = $('body');
    	bodyNode.append('<header></header>');
    	bodyNode.append('<main></main>');
    	bodyNode.append('<footer></footer>');
    }

    this.fillInHeader = function() {
    	var headerNode = $('header');
    	headerNode.append('<img id="turGuideLogo" src="türguideLogo.png">');
    	headerNode.append('<button id="artistsButton">Artists</button>');
    	headerNode.append('<button id="venuesButton">Venues</button>');
    	headerNode.append('<button id="signUpButton">Sign Up</button>');
    	headerNode.append('<button id="loginButton">Login</button>');
    }

    this.makeMainReady = function() {
    	var mainNode = $('main');
    	mainNode.append('<div id="mainLogo"></div>');
    	mainNode.append('<div id="randomArtist"></div>');
    	mainNode.append('<div id="eventsRightNow"></div>');
    	mainNode.append('<div id="randomVenue"></div>');
    }

    this.fillInTitle = function(divNode, titleString) {
    	divNode.append('<h1>'+titleString+'</h1>');
    }

    this.fillInAllTitles = function() {
    	this.fillInTitle($('#randomArtist'), 'Random Artists');
    	this.fillInTitle($('#eventsRightNow'), 'Events Happening Right Now!!!!!!');
    	this.fillInTitle($('#randomVenue'), 'Random Venues');
    }

    this.fillInMainLogo = function() {
    	var mainLogoNode = $('#mainLogo');
    	mainLogoNode.append('<img src="türguideLogoFull.png">');
    }

    this.setUpEventHandlers = function() {
		var currentObj = this;
    	$('#turGuideLogo').on('click', function() {
    		currentObj.whenTurGuideLogoClicked();
    	});

    	$('#artistsButton').on('click', function() {
    		currentObj.whenArtistsClicked();
    	});

    	$('#venuesButton').on('click', function() {
    		currentObj.whenVenuesClicked();
    	});

    	$('#signUpButton').on('click', function() {
    		currentObj.whenSignUpClicked();
    	});

    	$('#loginButton').on('click', function() {
    		currentObj.whenLoginClicked();
    	});
    }

    this.whenTurGuideLogoClicked = function() {
    	console.log('turguide Logo Clicked!');
    	this.testAJAXCall();
    }

    this.whenArtistsClicked = function() {
    	console.log('Artists Clicked!');
    }

    this.whenVenuesClicked = function() {
    	console.log('Venues Clicked!');
    }

    this.whenSignUpClicked = function() {
    	console.log('Sign Up Clicked!');
    }

    this.whenLoginClicked = function() {
    	console.log('Login Clicked!');
    	this.replaceLogin();
    }

    this.replaceLogin = function() {
    	var loginFormDiv = '<div id="loginDiv">\
    												<form action="">\
    													Username:<input type="text" name="username">\
    													Password:<input type="password" name="password">	\
    													Remember Me<input type="checkbox">\
    													<button>Login</button>\
    												</form>\
    											</div>';
    	$('#loginButton').replaceWith(loginFormDiv);
    }

    this.randomInt = function(max) {
    	return Math.floor(Math.random() * max);
    }

    this.testAJAXCall = function() {
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/testfunctions.php",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
    					alert("AJAX call successful!");
						console.log(result);
    				},
    				error: function(xhr,status,error) {
    					alert("AJAX call failed!");
    				}
    		   });
    }
}
