$('document').ready(function() {
   var controllerObj = new Controller();
   controllerObj.whenDocumentReady();
});

var Controller = function() {
	
	this.headerObj = new Header(false);
	this.sharedPrepsObj  = new SharedPreps();
	
	this.whenDocumentReady = function() {
			var homePageNotSignedInObj = new HomePageNotSignedIn(this.headerObj, this.sharedPrepsObj, this);
			homePageNotSignedInObj.pageReady();
	}
	
	this.clearPage = function() {
		$('body').empty();
	}
	
	this.loadMainArtistPage = function() {
		this.clearPage();
		var mainArtistPageObj = new MainArtistPage(this.headerObj, this.sharedPrepsObj, this);
		mainArtistPageObj.pageReady();
	}
	
	this.loadMainVenuePage = function() {
		this.clearPage();
		var mainVenuePageObj = new MainVenuePage(this.headerObj, this.sharedPrepsObj, this);
		mainVenuePageObj.pageReady();
	}
}
