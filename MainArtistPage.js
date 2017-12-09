var MainArtistPage = function() {

    this.pageReady = function() {
    	makeDOMReady();
    	fillInHeader();
    	fillInAccountPreview();
    	makeMainReady();
    	fillInAllTitles();
    	fillInMainArtistsDiv();
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
    	mainNode.append('<div id="mainArtistsDiv"></div>');
    }

    this.fillInTitle = function(divNode, titleString) {
    	divNode.append('<h1>'+titleString+'</h1>');
    }

    this.fillInAllTitles = function() {
    	this.fillInTitle($('#accountSettingsCentral'), 'Account Settings');
    }

    this.fillInMainArtistsDiv = function() {
    	var mainArtistsDiv = $('#mainArtistsDiv');
    	mainArtistsDiv.append('Search Artists: <input type="text" id="artistSearchTextbox">');
    	mainArtistsDiv.append('<button id="artistSearchButton">&#x1F50D;</button>');
    	mainArtistsDiv.append('<h1>Most Popular Artists</h1>');
    	mainArtistsDiv.append('<div id="mostPopularArtistsDiv"></div>');
    }

    this.setUpEventHandlers  = function() {
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

    	$('#artistSearchButton').on('click', function() {
    		currentObj.whenSearchButtonClicked();
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
		var currentObj = this;
    	var url_base = "http://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/testfunctions.php",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
    					alert("AJAX call successful!");
						console.log(result);
						currentObj.createTestAJAXDiv(result);
    				},
    				error: function(xhr,status,error) {
    					alert("AJAX call failed!");
    				}
    		   });
    }
	
	this.createTestAJAXDiv = function(jsonResult) {
		var mpaDiv = $('#mostPopularArtistsDiv');
		mpaDiv.append('<img src="fakeAvatar.png">');
		mpaDiv.append('<h1>'+jsonResult.bandname+'</h1>');
		mpaDiv.append('<ul><li>Website:'+jsonResult.website+'</li><li>Origin:'+jsonResult.origin+'</li><li>Members:'+jsonResult.members+'</li></ul>');
	}
}
