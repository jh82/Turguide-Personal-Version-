var MainVenuePage = function() {

    this.pageReady = function() {
    	makeDOMReady();
    	fillInHeader();
    	fillInAccountPreview();
    	makeMainReady();
    	fillInAllTitles();
    	fillInMainVenueDiv();
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
    	mainNode.append('<div id="mainVenueDiv"></div>');
    }

    this.fillInTitle = function(divNode, titleString) {
    	divNode.append('<h1>'+titleString+'</h1>');
    }

    this.fillInAllTitles = function() {
    	fillInTitle($('#accountSettingsCentral'), 'Account Settings');
    }

    this.fillInMainVenueDiv = function() {
    	var mainVenueDiv = $('#mainVenueDiv');
        mainVenueDiv.append('<img src="fakeUSMap.png"></img>');
    	mainVenueDiv.append('Search Venues: <input type="text" id="venueSearchTextbox">');
    	mainVenueDiv.append('<button id="venueSearchButton">&#x1F50D;</button>');
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

    	$('#artistSearchButton').on('click', function() {
    		whenSearchButtonClicked();
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

    this.whenSearchButtonClicked = function() {
    	console.log('Search Button Clicked!');
    }

    this.replaceChangePassword = function() {
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
