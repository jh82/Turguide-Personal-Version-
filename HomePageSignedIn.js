var HomePageSignedIn = function() {

    this.pageReady = function() {
    	makeDOMReady();
    	fillInHeader();
    	fillInAccountPreview();
    	makeMainReady();
    	fillInAllTitles();
    	fillInFavoriteArtists();
    	fillInFavoriteVenues();
    	setUpEventHandlers();
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
    	headerNode.append('<div id="accountPreviewArea"></div>');
    }

    this.fillInAccountPreview = function() {
    	var accountPreviewDiv = $('#accountPreviewArea');
    	accountPreviewDiv.append('<img id="avatar" src="fakeAvatar.png">');
    	accountPreviewDiv.append('<button id="accountSettings">Account Settings</button>');
    	accountPreviewDiv.append('<button id="logOff">Log Off</button>');
    }

    this.makeMainReady = function() {
    	var mainNode = $('main');
    	mainNode.append('<div id="eventsHappeningSoon"></div>');
    	mainNode.append('<div id="favoriteArtists"></div>');
    	mainNode.append('<div id="favoriteVenues"></div>');
    }

    this.fillInTitle = function(divNode, titleString) {
    	divNode.append('<h1>'+titleString+'</h1>');
    }

    this.fillInAllTitles = function() {
    	fillInTitle($('#eventsHappeningSoon'), 'Events Happening Right Now');
    	fillInTitle($('#favoriteArtists'), 'Favorite Artists');
    	fillInTitle($('#favoriteVenues'), 'Favorite Venues');
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
    	$('#turGuideLogo').on('click', function() {
    		whenTurGuideLogoClicked();
    	});

    	$('#artistsButton').on('click', function() {
    		whenArtistsClicked();
    	});

    	$('#venuesButton').on('click', function() {
    		whenVenuesClicked();
    	});

    	$('#accountSettings').on('click', function() {
    		whenAccountSettingsClicked();
    	});

    	$('#logOff').on('click', function() {
    		whenLogOffClicked();
    	});

    	$('#viewAllArtistsButton').on('click', function() {
    		whenViewAllArtistsClicked();
    	});

    	$('#viewAllVenuesButton').on('click', function() {
    		whenViewAllVenuesClicked();
    	});

    }

    this.whenTurGuideLogoClicked = function() {
    	console.log('turguide Logo Clicked!');
    }

    this.whenArtistsClicked = function() {
    	console.log('Artists Clicked!');
    }

    this.whenVenuesClicked = function() {
    	console.log('Venues Clicked!');
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

    this.randomInt = function(max) {
    	return Math.floor(Math.random() * max);
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
