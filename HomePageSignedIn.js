var HomePageSignedIn = function(headerObj, sharedPrepsObj, controllerObj) {

    this.pageReady = function() {
    	sharedPrepsObj.makeDOMReady();
    	headerObj.fillInHeader();
		
		var mainElementsArray= [
			{elementType:'div',id:'eventsHappeningSoon'},
			{elementType:'div',id:'favoriteArtists'},
			{elementType:'div',id:'favoriteVenues'}
		];
    	sharedPrepsObj.makeMainReady(mainElementsArray);
		
		var titlesArray = [
			{divNode:$('#eventsHappeningSoon'),titleString:'Events Happening Right Now'},
			{divNode:$('#favoriteArtists'),titleString:'Favorite Artists'},
			{divNode:$('#favoriteVenues'),titleString:'Favorite Venues'}
		];
    	sharedPrepsObj.fillInAllTitles(titlesArray);
		
    	this.fillInFavoriteArtists();
    	this.fillInFavoriteVenues();
    	this.setUpEventHandlers();
		this.artistAJAXCall();
		this.venueAJAXCall();
    }

    this.fillInFavoriteArtists = function() {
    	var favoriteArtistsDiv = $('#favoriteArtists');
    	favoriteArtistsDiv.append('<button id="viewAllArtistsButton">View All Artists</button>');
    }

    this.fillInFavoriteVenues = function() {
    	var favoriteVenuesDiv = $('#favoriteVenues');
    	favoriteVenuesDiv.append('<button id="viewAllVenuesButton">View All Venues</button>');
    }

    this.setUpEventHandlers = function() {
		var currentObj = this;

    	$('#viewAllArtistsButton').on('click', function() {
    		currentObj.whenViewAllArtistsClicked();
    	});

    	$('#viewAllVenuesButton').on('click', function() {
    		currentObj.whenViewAllVenuesClicked();
    	});

    }

    this.whenViewAllArtistsClicked = function() {
    	console.log('View All Artists Clicked!');
    }

    this.whenViewAllVenuesClicked = function() {
    	console.log('View All Venues Clicked!');
    }

    this.artistAJAXCall = function() {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/jaunuserController.php/artists",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
    					console.log("AJAX call successful!");
						console.log(result);
						result.forEach(function(element) {
							var parsedResult = JSON.parse(element);
							currentObj.createArtistAJAXDiv(parsedResult);
						});
    				},
    				error: function(xhr,status,error) {
    					alert("AJAX call failed!");
    				}
    		   });
    }
	
	this.createArtistAJAXDiv = function(jsonResult) {
		console.log(jsonResult);
		var mpaDiv = $('#favoriteArtists');
		var tempBandName = jsonResult.bandname;
		console.log(tempBandName);
		var tempWebsite = jsonResult.website;
		var tempOrigin = jsonResult.origin;
		var tempMembers = jsonResult.members;
		
		mpaDiv.append('<img src="fakeAvatar.png">');
		mpaDiv.append('<h1>'+tempBandName+'</h1>');
		mpaDiv.append('<ul><li>Website:'+tempWebsite+'</li><li>Origin:'+tempOrigin+'</li><li>Members:'+tempMembers+'</li></ul>');
		mpaDiv.append('&#9733;');
	}
	
	this.venueAJAXCall = function() {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/jaunuserController.php/venues",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
    					console.log("AJAX call successful!");
						console.log(result);
						result.forEach(function(element) {
							var parsedResult = JSON.parse(element);
							currentObj.createVenueAJAXDiv(parsedResult);
						});
    				},
    				error: function(xhr,status,error) {
    					alert("AJAX call failed!");
    				}
    		   });
    }
	
	this.createVenueAJAXDiv = function(jsonResult) {
		console.log(jsonResult.artistinfo);
		var mpaDiv = $('#favoriteVenues');
		var tempBandName = jsonResult.vname;
		console.log(tempBandName);
		var tempWebsite = jsonResult.vcity;
		var tempOrigin = jsonResult.vstate;
		var tempMembers = jsonResult.maxcap;
		
		mpaDiv.append('<img src="fakeAvatar.png">');
		mpaDiv.append('<h1>'+tempBandName+'</h1>');
		mpaDiv.append('<ul><li>Website:'+tempWebsite+'</li><li>Origin:'+tempOrigin+'</li><li>Members:'+tempMembers+'</li></ul>');
		mpaDiv.append('&#9733;');
	}
}
