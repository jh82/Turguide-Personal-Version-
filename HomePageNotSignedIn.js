$('document').ready(function() {
	makeDOMReady();
	fillInHeader();
	makeMainReady();
	fillInAllTitles();
	fillInMainLogo();
	setUpEventHandlers();
	//setUpMainLogoAnimation();
})

function makeDOMReady() {
	var bodyNode = $('body');
	bodyNode.append('<header></header>');
	bodyNode.append('<main></main>');
	bodyNode.append('<footer></footer>');
}

function fillInHeader() {
	var headerNode = $('header');
	headerNode.append('<img id="turGuideLogo" src="türguideLogo.png">');
	headerNode.append('<button id="artistsButton">Artists</button>');
	headerNode.append('<button id="venuesButton">Venues</button>');
	headerNode.append('<button id="signUpButton">Sign Up</button>');
	headerNode.append('<button id="loginButton">Login</button>');
}

function makeMainReady() {
	var mainNode = $('main');
	mainNode.append('<div id="mainLogo"></div>');
	mainNode.append('<div id="randomArtist"></div>');
	mainNode.append('<div id="eventsRightNow"></div>');
	mainNode.append('<div id="randomVenue"></div>');
}

function fillInTitle(divNode, titleString) {
	divNode.append('<h1>'+titleString+'</h1>');
}

function fillInAllTitles() {
	fillInTitle($('#randomArtist'), 'Random Artists');
	fillInTitle($('#eventsRightNow'), 'Events Happening Right Now!!!!!!');
	fillInTitle($('#randomVenue'), 'Random Venues');
}

function fillInMainLogo() {
	var mainLogoNode = $('#mainLogo');
	mainLogoNode.append('<img src="türguideLogoFull.png">');
}

function setUpEventHandlers() {
	$('#turGuideLogo').on('click', function() {
		whenTurGuideLogoClicked();
	});

	$('#artistsButton').on('click', function() {
		whenArtistsClicked();
	});

	$('#venuesButton').on('click', function() {
		whenVenuesClicked();
	});
	
	$('#signUpButton').on('click', function() {
		whenSignUpClicked();
	});

	$('#loginButton').on('click', function() {
		whenLoginClicked();
	});
}

function whenTurGuideLogoClicked() {
	console.log('turguide Logo Clicked!');
	testAJAXCall();
}

function whenArtistsClicked() {
	console.log('Artists Clicked!');
}

function whenVenuesClicked() {
	console.log('Venues Clicked!');
}

function whenSignUpClicked() {
	console.log('Sign Up Clicked!');
}

function whenLoginClicked() {
	console.log('Login Clicked!');
	replaceLogin();
}

function setUpMainLogoAnimation() {
/*	var upDown = 1;
	var leftRight = 1;
	var upDownCounter = 0;
	var leftRightCounter = 0;
	var R = 0;
	var G = 90;
	var B = 180;
	var intervalTime = 17;
	$('#mainLogo').css({marginTop: '+=180px'});
	var animationTimer = setInterval(function() {
		switch(upDown) {
			case 1:
				$('#mainLogo').css({marginTop: '-=2px'});
				break;
			case -1:
				$('#mainLogo').css({marginTop: '+=2px'});
				break;
		}
		switch(leftRight) {
			case 1:
				$('#mainLogo').css({marginLeft: '+=2px'});
				break;
			case -1:
				$('#mainLogo').css({marginLeft: '-=2px'});
				break;
		}
		upDownCounter++;
		leftRightCounter++;
		if(randomInt(255)<2) {
			$("body").css({"background-color": "#000000", "color": "red"});
			R=0;
			G=0;
			B=0;
			//clearInterval(animationTimer);
		}
		R = randomInt(255);
		G = randomInt(255);
		B = randomInt(255);
		$('header').append('<h1 style="margin-left-=50">FREEMONEYDIEFREEMONEYDIEFREEMONEYDIEFREEMONEYDIEFREEMONEYDIEFREEMONEYDIEFREEMONEYDIEFREEMONEYDIE</h1><h2>CONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEYCONSUMEOBEY</h2><h3>ILOVEYOUILOVEYOULIVEEOUELOUVEUOVELUUOEVLEUOIVOLOUUEVELUUOUOYOUVLILYOVEUYLILOVEYOUASLIVOYLEUYOILOVEYOULIVYOUEVELUOVEULVYEOUYLUOEYVUIVLLYEVOUYVYELIYEVOUVLIYVOLEYVUEVYOLIYOLEVYILOVEYOUILEVYOULIEVYEULOEVYUVILOVEYUYVLOEYVULYOIILOVYEUILOVEYOUILVOUILOVEYOUILOVEYOUILOVEYUILOYVEU</h3>');
		window.scrollBy(0,50);
		if(upDownCounter>60){
			upDown = upDown*-1;
			upDownCounter=0;
		}
		if(leftRightCounter>120) {
			leftRight = leftRight*-1;
			leftRightCounter = 0;
		}
		$('body').css({backgroundColor:'rgb('+R+', '+G+', '+B+')'});
	}, intervalTime);*/
}

function replaceLogin() {
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

function randomInt(max) {
	return Math.floor(Math.random() * max);
}

function testAJAXCall() {
	var url_base = "wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj/index.html";
	$.ajax(url_base + "/testfunctions.php",
	       {type: "GET",
		       dataType: "json",
		       success: function(result, status, xhr) {
				   alert("AJAX call successful!");
		       },
			   error: function(xhr,status,error) {
				   alert("AJAX call failed!");
			   }
		   }
	      });
}