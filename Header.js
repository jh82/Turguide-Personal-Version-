var Header = function(userSignedIn, controllerObj) {
	
	this.userSignedIn = userSignedIn;
	
	 this.fillInHeader = function() {
    	var headerNode = $('header');
    	headerNode.append('<img id="turGuideLogo" src="sketchSmallLogo.png">');
    	headerNode.append('<button id="artistsButton" class="header-button">Artists</button>');
    	headerNode.append('<button id="venuesButton" class="header-button">Venues</button>');
		
		if(userSignedIn){
			headerNode.append('<div id="accountPreviewArea"></div>');
			this.fillInAccountPreview();
		}
		else {
			headerNode.append('<button id="signUpButton" class="header-button">Sign Up</button>');
			headerNode.append('<button id="loginButton" class="header-button">Login</button>');
		}
		
		this.setUpEventHandlers();
    }
	
    this.fillInAccountPreview = function() {
		if(!userSignedIn) {
			return;
		}
    	var accountPreviewDiv = $('#accountPreviewArea');
    	accountPreviewDiv.append('<img id="avatar" src="fakeAvatar.png">');
    	accountPreviewDiv.append('<button id="accountSettings" class="header-button">Account Settings</button>');
    	accountPreviewDiv.append('<button id="logOff" class="header-button">Log Off</button>');
    }
	
	this.clearHeader = function() {
		$('header').empty();
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
		
		$('#accountSettings').on('click', function() {
    		currentObj.whenAccountSettingsClicked();
    	});

    	$('#logOff').on('click', function() {
    		currentObj.whenLogOffClicked();
    	});
    }

    this.whenTurGuideLogoClicked = function() {
    	console.log('turguide Logo Clicked!');
		controllerObj.loadHomePage();
    }

    this.whenArtistsClicked = function() {
    	console.log('Artists Clicked!');
		controllerObj.loadMainArtistPage();
    }

    this.whenVenuesClicked = function() {
    	console.log('Venues Clicked!');
		controllerObj.loadMainVenuePage();
    }

    this.whenSignUpClicked = function() {
    	console.log('Sign Up Clicked!');
    }

    this.whenLoginClicked = function() {
    	console.log('Login Clicked!');
    	this.replaceLogin();
    }
	
	this.whenAccountSettingsClicked = function() {
    	console.log('Account Settings Clicked!');
    }

    this.whenLogOffClicked = function() {
    	console.log('Log Off Clicked!');
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
}