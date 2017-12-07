$('document').ready(function() {
	makeDOMReady();
	fillInHeader();
	fillInAccountPreview();
	makeMainReady();
	fillInAllTitles();
	fillInAccountSettings();
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
	mainNode.append('<div id="accountSettingsCentral"></div>');
}

function fillInTitle(divNode, titleString) {
	divNode.append('<h1>'+titleString+'</h1>');
}

function fillInAllTitles() {
	fillInTitle($('#accountSettingsCentral'), 'Account Settings');
}

function fillInAccountSettings() {
	var accountSettingsDiv = $('#accountSettingsCentral');
	accountSettingsDiv.append('<img id="avatarInContent" src="fakeAvatar.png">');
	accountSettingsDiv.append('<button id="changePassword">Change Password</button>');
	accountSettingsDiv.append('First Name:<input type="text"">');
	accountSettingsDiv.append('Last Name:<input type="text"">');
	accountSettingsDiv.append('<input type="checkbox">Use Real Name?');
	accountSettingsDiv.append('<button id="submitChangesButton">Submit Changes</button>');
	accountSettingsDiv.append('<button id="deleteAccountButton">Delete Account</button>');
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
	
	$('#changePassword').on('click', function() {
		whenChangePasswordClicked();
	});
	
	$('#submitChangesButton').on('click', function() {
		whenSubmitChangesClicked();
	});
	
	$('#deleteAccountButton').on('click', function() {
		whenDeleteAccountClicked();
	});
	
	$('#avatarInContent').hover(function() {
			whenAvatarHovered(true);
		}, function() {
			whenAvatarHovered(false);
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

function whenChangePasswordClicked() {
	console.log('Change Password Clicked!');
	replaceChangePassword();
}

function whenSubmitChangesClicked() {
	console.log('Submit Changes Clicked!');
}

function whenDeleteAccountClicked() {
	console.log('Delete Account Clicked!');
}

function whenAvatarHovered(mouseIn) {
	if(mouseIn){
		console.log('Avatar In!!');
		$('#avatarInContent').after('<button id="changeAvatarButton">Change Avatar</button>');
	}
	else {
		console.log('Avatar Out!!');
		$('#changeAvatarButton').remove();
	}
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