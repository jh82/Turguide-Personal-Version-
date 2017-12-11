var HomePageSignedIn = function(headerObj, sharedPrepsObj, controllerObj) {

    this.pageReady = function() {
    	sharedPrepsObj.makeDOMReady();
    	headerObj.fillInHeader();
		
		var mainElementsArray= [
			{elementType:'div',id:'eventsHappeningSoon'},
			{elementType:'div',id:'favoriteArtists'},
			{elementType:'div',id:'favoriteVenues'}
		];
    	sharedPrepsObj.makeMainReady(mainElementsArray);
		
		var titlesArray = [
			{divNode:$('#eventsHappeningSoon'),titleString:'Events Happening Right Now'},
			{divNode:$('#favoriteArtists'),titleString:'Favorite Artists'},
			{divNode:$('#favoriteVenues'),titleString:'Favorite Venues'}
		];
    	sharedPrepsObj.fillInAllTitles(titlesArray);
		
    	this.fillInFavoriteArtists();
    	this.fillInFavoriteVenues();
    	this.setUpEventHandlers();
    }

    this.fillInFavoriteArtists = function() {
    	var favoriteArtistsDiv = $('#favoriteArtists');
    	favoriteArtistsDiv.append('<button id="viewAllArtistsButton">View All Artists</button>');
    }

    this.fillInFavoriteVenues = function() {
    	var favoriteVenuesDiv = $('#favoriteVenues');
    	favoriteVenuesDiv.append('<button id="viewAllVenuesButton">View All Venues</button>');
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

    	$('#accountSettings').on('click', function() {
    		currentObj.whenAccountSettingsClicked();
    	});

    	$('#logOff').on('click', function() {
    		currentObj.whenLogOffClicked();
    	});

    	$('#viewAllArtistsButton').on('click', function() {
    		currentObj.whenViewAllArtistsClicked();
    	});

    	$('#viewAllVenuesButton').on('click', function() {
    		currentObj.whenViewAllVenuesClicked();
    	});

    }

    this.whenTurGuideLogoClicked = function() {
    	console.log('turguide Logo Clicked!');
    }

    this.whenArtistsClicked = function() {
    	console.log('Artists Clicked!');
		controllerObj.loadMainArtistPage();
    }

    this.whenVenuesClicked = function() {
    	console.log('Venues Clicked!');
		controllerObj.loadMainVenuePage();
    }

    this.whenAccountSettingsClicked = function() {
    	console.log('Account Settings Clicked!');
    }

    this.whenLogOffClicked = function() {
    	console.log('Log Off Clicked!');
    }

    this.whenViewAllArtistsClicked = function() {
    	console.log('View All Artists Clicked!');
    }

    this.whenViewAllVenuesClicked = function() {
    	console.log('View All Venues Clicked!');
    }

    this.testAJAXCall = function() {
    	var url_base = "http://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/testfunctions.php",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
    					alert("AJAX call successful!");
    				},
    				error: function(xhr,status,error) {
    					alert("AJAX call failed!");
    				}
    		   });
    }
}
