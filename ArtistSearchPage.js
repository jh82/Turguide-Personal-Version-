$('document').ready(function() {
	makeDOMReady();
	fillInHeader();
	fillInAccountPreview();
	makeMainReady();
	fillInAllTitles();
	fillInMainSearchDiv();
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
	mainNode.append('<div id="mainSearchDiv"></div>');
}

function fillInTitle(divNode, titleString) {
	divNode.append('<h1>'+titleString+'</h1>');
}

function fillInAllTitles() {
	fillInTitle($('#accountSettingsCentral'), 'Account Settings');
}

function fillInMainSearchDiv() {
	var mainArtistsDiv = $('#mainSearchDiv');
	mainArtistsDiv.append('Search Artists: <input type="text" id="artistSearchTextbox">');
	mainArtistsDiv.append('<button id="artistSearchButton">&#x1F50D;</button>');
	mainArtistsDiv.append('<h1>Search Results</h1>');
	mainArtistsDiv.append('<div id="foundArtistsDiv"></div>');
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
	
	$('#artistSearchButton').on('click', function() {
		whenSearchButtonClicked();
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

function whenSearchButtonClicked() {
	console.log('Search Button Clicked!');
}

function replaceChangePassword() {
	var changePasswordFormDiv = '<div id="changePasswordDiv">\
												<form action="">\
													Current Password:<input type="password" name="oldPassword">\
													New Password:<input type="password" name="newPassword">	\
													Confirm New Password<input type="password" name="confirmNewPassword">\
													<button>Submit</button>\
												</form>\
											</div>';
	$('#changePassword').replaceWith(changePasswordFormDiv);
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