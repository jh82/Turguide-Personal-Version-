$('document').ready(function() {
	makeDOMReady();
	fillInHeader();
	fillInAccountPreview();
	makeMainReady();
	fillInAllTitles();
	fillInFavoriteArtists();
	fillInFavoriteVenues();
	setUpEventHandlers();
	
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
	headerNode.append('<div id="accountPreviewArea"></div>');
}

function fillInAccountPreview() {
	var accountPreviewDiv = $('#accountPreviewArea');
	accountPreviewDiv.append('<img id="avatar" src="fakeAvatar.png">');
	accountPreviewDiv.append('<button id="accountSettings">Account Settings</button>');
	accountPreviewDiv.append('<button id="logOff">Log Off</button>');
}

function makeMainReady() {
	var mainNode = $('main');
	mainNode.append('<div id="eventsHappeningSoon"></div>');
	mainNode.append('<div id="favoriteArtists"></div>');
	mainNode.append('<div id="favoriteVenues"></div>');
}

function fillInTitle(divNode, titleString) {
	divNode.append('<h1>'+titleString+'</h1>');
}

function fillInAllTitles() {
	fillInTitle($('#eventsHappeningSoon'), 'Events Happening Right Now');
	fillInTitle($('#favoriteArtists'), 'Favorite Artists');
	fillInTitle($('#favoriteVenues'), 'Favorite Venues');
}

function fillInFavoriteArtists() {
	var favoriteArtistsDiv = $('#favoriteArtists');
	favoriteArtistsDiv.append('<button id="viewAllArtistsButton">View All Artists</button>');
}

function fillInFavoriteVenues() {
	var favoriteVenuesDiv = $('#favoriteVenues');
	favoriteVenuesDiv.append('<button id="viewAllVenuesButton">View All Venues</button>');
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

function whenTurGuideLogoClicked() {
	console.log('turguide Logo Clicked!');
}

function whenArtistsClicked() {
	console.log('Artists Clicked!');
}

function whenVenuesClicked() {
	console.log('Venues Clicked!');
}

function whenAccountSettingsClicked() {
	console.log('Account Settings Clicked!');
}

function whenLogOffClicked() {
	console.log('Log Off Clicked!');
}

function whenViewAllArtistsClicked() {
	console.log('View All Artists Clicked!');
}

function whenViewAllVenuesClicked() {
	console.log('View All Venues Clicked!');
}

function randomInt(max) {
	return Math.floor(Math.random() * max);
}

function testAJAXCall() {
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