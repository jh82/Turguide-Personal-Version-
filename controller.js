$('document').ready(function() {
   // var HPNSIobj = new HomePageNotSignedIn();
   // HPNSIobj.pageReady();
	var headerObj = new Header(true);
	var mainArtistPageObj = new MainArtistPage(headerObj);
	
	mainArtistPageObj.pageReady();
});