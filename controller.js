$('document').ready(function() {
   // var HPNSIobj = new HomePageNotSignedIn();
   // HPNSIobj.pageReady(); 
   
	var headerObj = new Header(true);
	var sharedPrepsObj = new SharedPreps();
	
	//var mainArtistPageObj = new MainArtistPage(headerObj, sharedPrepsObj);
	//mainArtistPageObj.pageReady();
	
	var homePageNotSignedInObj = new HomePageNotSignedIn(headerObj, sharedPrepsObj);
	homePageNotSignedInObj.pageReady();
});