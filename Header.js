var Header = function(userSignedIn) {
	
	 this.fillInHeader = function() {
    	var headerNode = $('header');
    	headerNode.append('<img id="turGuideLogo" src="türguideLogo.png">');
    	headerNode.append('<button id="artistsButton" class="header-button">Artists</button>');
    	headerNode.append('<button id="venuesButton" class="header-button">Venues</button>');
		
		if(userSignedIn){
			headerNode.append('<div id="accountPreviewArea"></div>');
			this.fillInAccountPreview();
		}
		else {
			headerNode.append('<button id="signUpButton class="header-button"">Sign Up</button>');
			headerNode.append('<button id="loginButton" class="header-button">Login</button>');
		}
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
}