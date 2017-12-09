$('document').ready(function() {
   // var HPNSIobj = new HomePageNotSignedIn();
   // HPNSIobj.pageReady();
	var headerObj = new Header();
	var mainArtistPageObj = new MainArtistPage(headerObj);
	
	mainArtistPageObj.pageReady();
});