$('document').ready(function() {
   // var HPNSIobj = new HomePageNotSignedIn();
   // HPNSIobj.pageReady();
	var mainArtistPageObj = new MainArtistPage();
	var headerObj = new Header();
	
	mainArtistPageObj.pageReady(headerObj);
});