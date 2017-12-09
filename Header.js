var Header = function(userSignedIn) {
	
	 this.fillInHeader = function() {
    	var headerNode = $('header');
    	headerNode.append('<img id="turGuideLogo" src="türguideLogo.png">');
    	headerNode.append('<button id="artistsButton">Artists</button>');
    	headerNode.append('<button id="venuesButton">Venues</button>');
		
		if(userSignedIn){
			headerNode.append('<div id="accountPreviewArea"></div>');
		}
		else {
			headerNode.append('<button id="signUpButton">Sign Up</button>');
			headerNode.append('<button id="loginButton">Login</button>');
		}
    }
	
    this.fillInAccountPreview = function() {
		if(!userSignedIn) {
			return;
		}
    	var accountPreviewDiv = $('#accountPreviewArea');
    	accountPreviewDiv.append('<img id="avatar" src="fakeAvatar.png">');
    	accountPreviewDiv.append('<button id="accountSettings">Account Settings</button>');
    	accountPreviewDiv.append('<button id="logOff">Log Off</button>');
    }
	
	this.clearHeader = function() {
		$('header').empty();
	}
}