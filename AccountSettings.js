var accountSettings = function(headerObj, sharedPrepsObj, controllerObj) {

    this.pageReady = function() {
    	sharedPrepsObj.makeDOMReady();
    	headerObj.fillInHeader();
		
		var mainElementsArray= [
			{elementType:'div',id:'accountSettingsCentral'}
		];
    	sharedPrepsObj.makeMainReady(mainElementsArray);
		
		var titlesArray = [
			{divNode:$('#accountSettingsCentral'),titleString:'Account Settings'}
		];
    	sharedPrepsObj.fillInAllTitles(titlesArray);
		
    	this.fillInAccountSettings();
    	this.setUpEventHandlers();
    }

    this.fillInAccountSettings = function() {
    	var accountSettingsDiv = $('#accountSettingsCentral');
    	accountSettingsDiv.append('<img id="avatarInContent" src="fakeAvatar.png">');
    	accountSettingsDiv.append('<button id="changePassword">Change Password</button>');
    	accountSettingsDiv.append('First Name:<input type="text"">');
    	accountSettingsDiv.append('Last Name:<input type="text"">');
    	accountSettingsDiv.append('<input type="checkbox">Use Real Name?');
    	accountSettingsDiv.append('<button id="submitChangesButton">Submit Changes</button>');
    	accountSettingsDiv.append('<button id="deleteAccountButton">Delete Account</button>');
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

    	$('#changePassword').on('click', function() {
    		currentObj.whenChangePasswordClicked();
    	});

    	$('#submitChangesButton').on('click', function() {
    		currentObj.whenSubmitChangesClicked();
    	});

    	$('#deleteAccountButton').on('click', function() {
    		currentObj.whenDeleteAccountClicked();
    	});

    	$('#avatarInContent').hover(function() {
    			whenAvatarHovered(true);
    		}, function() {
    			whenAvatarHovered(false);
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
    }

    this.whenAccountSettingsClicked = function() {
    	console.log('Account Settings Clicked!');
    }

    this.whenLogOffClicked = function() {
    	console.log('Log Off Clicked!');
    }

    this.whenChangePasswordClicked = function() {
    	console.log('Change Password Clicked!');
    	replaceChangePassword();
    }

    this.whenSubmitChangesClicked = function() {
    	console.log('Submit Changes Clicked!');
    }

    this.whenDeleteAccountClicked = function() {
    	console.log('Delete Account Clicked!');
    }

    this.whenAvatarHovered = function(mouseIn) {
    	if(mouseIn){
    		console.log('Avatar In!!');
    		$('#avatarInContent').after('<button id="changeAvatarButton">Change Avatar</button>');
    	}
    	else {
    		console.log('Avatar Out!!');
    		$('#changeAvatarButton').remove();
    	}
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
