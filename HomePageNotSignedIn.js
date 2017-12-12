var HomePageNotSignedIn = function(headerObj, sharedPrepsObj, controllerObj) {

    this.pageReady = function() {
    	sharedPrepsObj.makeDOMReady();
    	headerObj.fillInHeader();
		
		var mainElementsArray= [
			{elementType:'div',id:'mainLogo'},
			{elementType:'div',id:'randomArtist'},
			{elementType:'div',id:'eventsRightNow'},
			{elementType:'div',id:'randomVenue'}
		];
    	sharedPrepsObj.makeMainReady(mainElementsArray);
		
		var titlesArray = [
			{divNode:$('#randomArtist'),titleString:'Random Artists'},
			{divNode:$('#eventsRightNow'),titleString:'Events Happening Right Now!!!!!'},
			{divNode:$('#randomVenue'),titleString:'Random Venues'}
		];
    	sharedPrepsObj.fillInAllTitles(titlesArray);
    	
		this.fillInMainLogo();
    	this.setUpEventHandlers();
		this.randArtistsAJAXCall();
		this.randVenuesAJAXCall();
		this.randEventsAJAXCall();
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

    this.randArtistsAJAXCall = function() {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/randomartists.php",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
    					//console.log("AJAX call successful!");
						//console.log(result);
						var parsedResult = undefined;
						result.forEach(function(element) {
							parsedResult = JSON.parse(element);
							currentObj.createTestAJAXArtistDiv(parsedResult);
						});
						
						//currentObj.createTestAJAXDiv(result.ranartists[0]);
						
						console.log(parsedResult.bandname);
    				},
    				error: function(xhr,status,error) {
    					console.log("AJAX call failed!");
    				}
    		   });
    }
	
	this.createTestAJAXArtistDiv = function(jsonResult) {
		//console.log(jsonResult);
		var mpaDiv = $('#randomArtist');
		var tempBandName = jsonResult.bandname;
		//console.log(tempBandName);
		var tempWebsite = jsonResult.website;
		var tempOrigin = jsonResult.origin;
		var tempMembers = jsonResult.members;
		
		mpaDiv.append('<img src="fakeAvatar.png">');
		mpaDiv.append('<h1>'+tempBandName+'</h1>');
		mpaDiv.append('<ul><li>Website:'+tempWebsite+'</li><li>Origin:'+tempOrigin+'</li><li>Members:'+tempMembers+'</li></ul>');
		mpaDiv.append('&#9733;<br>');
	}
	
	this.randVenuesAJAXCall = function() {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/randomvenues.php",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
    					console.log("AJAX call successful!");
						console.log(result);
						var parsedResult = undefined;
						result.forEach(function(element) {
							parsedResult = JSON.parse(element);
							currentObj.createTestAJAXVenuesDiv(parsedResult);
						});
						
						//currentObj.createTestAJAXDiv(result.ranartists[0]);
						
						console.log(parsedResult.bandname);
    				},
    				error: function(xhr,status,error) {
    					console.log("AJAX call failed!");
    				}
    		   });
    }
	
	this.createTestAJAXVenuesDiv = function(jsonResult) {
		console.log(jsonResult);
		var mpaDiv = $('#randomVenue');
		var tempVenueName = jsonResult.vname;
		console.log(tempVenueName);
		var tempCity = jsonResult.vcity;
		var tempState = jsonResult.vstate;
		var tempCapacity = jsonResult.maxcap;
		
		mpaDiv.append('<img src="fakeAvatar.png">');
		mpaDiv.append('<h1>'+tempVenueName+'</h1>');
		mpaDiv.append('<ul><li>Website:'+tempCity+'</li><li>Origin:'+tempState+'</li><li>Members:'+tempCapacity+'</li></ul>');
		mpaDiv.append('&#9733;<br>');
	}
	
	this.randEventsAJAXCall = function() {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/randomevents.php",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
    					//console.log("AJAX call successful!");
						//console.log(result);
						var parsedResult = undefined;
						result.forEach(function(element) {
							parsedResult = JSON.parse(element);
							currentObj.createTestAJAXEventsDiv(parsedResult);
						});
						
						//currentObj.createTestAJAXDiv(result.ranartists[0]);
						
						//console.log(parsedResult.bandname);
    				},
    				error: function(xhr,status,error) {
    					console.log("AJAX call failed!");
    				}
    		   });
    }
	
	this.createTestAJAXEventsDiv = function(jsonResult) {
		console.log(jsonResult);
		var mpaDiv = $('#eventsRightNow');
		var tempBandName = jsonResult.bandname;
		//console.log(tempBandName);
		var tempWebsite = jsonResult.website;
		var tempOrigin = jsonResult.origin;
		var tempMembers = jsonResult.members;
		
		mpaDiv.append('<img src="fakeAvatar.png">');
		mpaDiv.append('<h1>'+tempBandName+'</h1>');
		mpaDiv.append('<ul><li>Website:'+tempWebsite+'</li><li>Origin:'+tempOrigin+'</li><li>Members:'+tempMembers+'</li></ul>');
		mpaDiv.append('&#9733;<br>');
	}
}
