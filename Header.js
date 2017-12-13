var Header = function(userSignedIn, controllerObj) {
	
	this.userSignedIn = userSignedIn;
	this.floatingDivActive = false;
	
	 this.fillInHeader = function() {
    	var headerNode = $('header');
    	headerNode.append('<img id="turGuideLogo" src="sketchSmallLogo.png">');
		headerNode.append('<div id="centerButtonsDiv" class="centerHeaderDiv"></div>');
    	$('#centerButtonsDiv').append('<button id="artistsButton" class="header-button left-header-button">Artists</button>');
    	$('#centerButtonsDiv').append('<button id="venuesButton" class="header-button right-header-button">Venues</button>');
		headerNode.append('<div id="rightButtonsDiv"></div>');
		
		if(userSignedIn){
			$('#rightButtonsDiv').append('<div id="accountPreviewArea"></div>');
			this.fillInAccountPreview();
		}
		else {
			$('#rightButtonsDiv').append('<button id="signUpButton" class="header-button">Sign Up</button>');
			$('#rightButtonsDiv').append('<button id="loginButton" class="header-button">Login</button>');
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

    	$('#loginButton').on('click', function(event) {
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
		if(!this.floatingDivActive) {
			this.appendSignUp();
			this.floatingDivActive = true;
		}
    }

    this.whenLoginClicked = function() {
    	console.log('Login Clicked!');
		if(!this.floatingDivActive) {
			this.appendLogin();
			this.floatingDivActive = true;
		}
    }
	
	this.whenLoginConfirmClicked = function() {
    	console.log('Login Confirm Clicked!');
		var uname = "";
		var pword = "";
		uname = $('#username').val();
		pword = $('#password').val();
		this.loginAJAXCall(uname, pword);
    }
	
	this.whenLoginCancelClicked = function() {
    	console.log('Login Cancel Clicked!');
		$('#loginDiv').remove();
		this.floatingDivActive = false;
    }

	this.whenSignUpConfirmClicked = function() {
    	console.log('Login Confirm Clicked!');
		if($('#password').val()!=$('#passwordConfirm').val()) {
			alert("Passwords do not match!!!!!!!!!!!!!");
			return;
		}
		if (($('#username').val().indexOf(' ') > -1)||($('#password').val().indexOf(' ') > -1)) {
			alert("No spaces allowed in username or password!!!!!!!!");
			return;
		}
		if(($('#username').val()=="")||($('#password').val()=="")||($('#passwordConfirm').val()=="")) {
			alert("Please input values for both username and password");
			return;
		}
		this.signUpAJAXCall($('#username').val(), $('#password').val())
    }
	
	this.whenSignUpCancelClicked = function() {
    	console.log('Login Cancel Clicked!');
		$('#signUpDiv').remove();
		this.floatingDivActive = false;
    }
	
	this.whenAccountSettingsClicked = function() {
    	console.log('Account Settings Clicked!');
		controllerObj.loadAccountSettings();
    }

    this.whenLogOffClicked = function() {
    	console.log('Log Off Clicked!');
		this.logOffAJAXCall();
    }

    this.appendLogin = function() {
		var currentObj = this;
    	var loginFormDiv = '<div id="loginDiv" class="floatingDiv">\
    												<form action="">\
    													Username:<input type="text" name="username" id="username">\
    													Password:<input type="password" name="password" id="password">	\
    													Remember Me<input type="checkbox">\
    													<button id="loginConfirmButton">Login</button>\
														<button id="loginCancelButton">X</button>\
    												</form>\
    											</div>';
    	$('header').append(loginFormDiv);
	
		$('#loginConfirmButton').on('click', function(event) {
    		event.preventDefault();
			currentObj.whenLoginConfirmClicked();
    	});
		
		$('#loginCancelButton').on('click', function(event) {
			event.preventDefault();
    		currentObj.whenLoginCancelClicked();
    	});
    }
	
	this.appendSignUp = function() {
		var currentObj = this;
    	var loginFormDiv = '<div id="signUpDiv" class="floatingDiv">\
    												<form action="">\
    													Username:<input type="text" name="username" id="username">\
    													Password:<input type="password" name="password" id="password">	\
    													Confirm Password:<input type="password" name="password" id="passwordConfirm">\
    													<button id="signUpConfirmButton">Sign Up</button>\
														<button id="signUpCancelButton">X</button>\
    												</form>\
    											</div>';
    	$('header').append(loginFormDiv);
	
		$('#signUpConfirmButton').on('click', function(event) {
    		event.preventDefault();
			currentObj.whenSignUpConfirmClicked();
    	});
		
		$('#signUpCancelButton').on('click', function(event) {
			event.preventDefault();
    		currentObj.whenSignUpCancelClicked();
    	});
    }
	
	this.loginAJAXCall = function(uname, pword) {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/login.php",
    	       {	type: "POST",
    				dataType: "json",
					data: {username:uname, password:pword},
    				success: function(result, status, xhr) {
    					console.log("AJAX call success!");
						console.log(result);
						console.log(document.cookie);
						currentObj.userSignedIn = true;
						controllerObj.loadHomePage();
    				},
    				error: function(xhr,status,error) {
    					console.log("AJAX call failed!");
						console.log(xhr);
						console.log(status);
						console.log(error);
    				}
    		   });
	}
	
	this.logOffAJAXCall = function() {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/logout.php",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
    					console.log("AJAX call success!");
						console.log(result);
						console.log(document.cookie);
						currentObj.userSignedIn = false;
						controllerObj.loadHomePage();
    				},
    				error: function(xhr,status,error) {
    					console.log("AJAX call failed!");
						console.log(xhr);
						console.log(status);
						console.log(error);
    				}
    		   });
	}
	
	this.signUpAJAXCall = function(uname, pword) {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/userController.php",
    	       {	type: "POST",
    				dataType: "json",
					data: {username:uname, password:pword},
    				success: function(result, status, xhr) {
    					console.log("AJAX call success!");
						console.log(result);
						currentObj.loginAJAXCall(uname, pword);
    				},
    				error: function(xhr,status,error) {
    					console.log("AJAX call failed!");
						console.log(xhr);
						console.log(status);
						console.log(error);
    				}
    		   });
	}
}