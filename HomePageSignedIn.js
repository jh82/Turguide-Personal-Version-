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
			{divNode:$('#eventsHappeningSoon'),titleString:'Events Happening Soon'},
			{divNode:$('#favoriteArtists'),titleString:'Favorite Artists'},
			{divNode:$('#favoriteVenues'),titleString:'Favorite Venues'}
		];
    	sharedPrepsObj.fillInAllTitles(titlesArray);
		$('main').addClass('threeColumns');
    	this.fillInFavoriteArtists();
    	this.fillInFavoriteVenues();
    	this.setUpEventHandlers();
		this.artistAJAXCall();
		this.venueAJAXCall();
		this.soonEventsAJAX();
    }

    this.fillInFavoriteArtists = function() {
    	var favoriteArtistsDiv = $('#favoriteArtists');
    }

    this.fillInFavoriteVenues = function() {
    	var favoriteVenuesDiv = $('#favoriteVenues');
    }

    this.setUpEventHandlers = function() {
		var currentObj = this;

    	$('#viewAllArtistsButton').on('click', function() {
    		currentObj.whenViewAllArtistsClicked();
    	});

    	$('#viewAllVenuesButton').on('click', function() {
    		currentObj.whenViewAllVenuesClicked();
    	});
		
		$('.starButtonArtist').on('click', function() {
    		currentObj.whenStarButtonClickedArtist($(this));
    	});
		
		$('.starButtonVenue').on('click', function() {
    		currentObj.whenStarButtonClickedVenue($(this));
    	});

    }
	
	this.whenStarButtonClickedArtist = function(starButton) {
    	var favoriteBool = starButton.data('favorited');
		var artid = starButton.data('artid');

		starButton.data('favorited', 0);
		starButton.removeClass('favorite');
		this.removeFaveAJAXCall(starButton.data('artid'));
		
    }
	
	this.whenStarButtonClickedVenue = function(starButton) {
    	var favoriteBool = starButton.data('favorited');
		var venid = starButton.data('venid');

		starButton.data('favorited', 0);
		starButton.removeClass('favorite');
		this.removeFaveAJAXCall(starButton.data('venid'));
		
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
    	$.ajax(url_base + "/php/userController.php/artists",
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
		var mpaDiv = $('<div></div>');
		var tempBandName = jsonResult.bandname;
		console.log(tempBandName);
		var tempWebsite = jsonResult.website;
		var tempOrigin = jsonResult.origin;
		var tempMembers = jsonResult.members;
		
		mpaDiv.append('<img src="fakeAvatar.png" class="circleViewport">');
		mpaDiv.append('<h1>'+tempBandName+'</h1>');
		mpaDiv.append('<ul><li>Website:'+tempWebsite+'</li><li>Origin:'+tempOrigin+'</li><li>Members:'+tempMembers+'</li></ul>');
		mpaDiv.append('<button class="starButtonArtist favorite" data-favorited="1" data-artid="'+jsonResult.artid+'">&#9733;</button><br>');
		mpaDiv.addClass('AJAXDiv');
		$('#favoriteArtists').append(mpaDiv);
	}
	
	this.venueAJAXCall = function() {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/userController.php/venues",
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
		var mpaDiv = $('<div></div>');
		var tempBandName = jsonResult.vname;
		console.log(tempBandName);
		var tempWebsite = jsonResult.vcity;
		var tempOrigin = jsonResult.vstate;
		var tempMembers = jsonResult.maxcap;
		
		
		mpaDiv.append('<h1>'+tempBandName+'</h1>');
		mpaDiv.append('<ul><li>City:'+tempWebsite+'</li><li>State:'+tempOrigin+'</li><li>Capacity:'+tempMembers+'</li></ul>');
		mpaDiv.append('<button class="starButtonVenue favorite" data-favorited="1" data-venid="'+jsonResult.venid+'">&#9733;</button><br>');
		mpaDiv.addClass('AJAXDiv');
		$('#favoriteVenues').append(mpaDiv);
	}
	
	this.soonEventsAJAX = function() {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/next2weeks.php",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
    					console.log("AJAX call successful!");
						console.log(result);
						result.forEach(function(element) {
							var parsedResult = JSON.parse(element);
							currentObj.createTestAJAXEventsDiv(parsedResult);
						});
    				},
    				error: function(xhr,status,error) {
    					alert("AJAX call failed!");
    				}
    		   });
	}
	
	this.createTestAJAXEventsDiv = function(jsonResult) {
		console.log(jsonResult);
		var mpaDiv = $('<div class="bodyText AJAXDiv"></div>');
		mpaDiv.addClass('infoPanel');
		var tempEventDate = jsonResult.edate;
		//console.log(tempBandName);
		var tempEventTime = jsonResult.etime;
		var tempVenueName = jsonResult.vname;
		var tempCity = jsonResult.vcity;
		var tempState = jsonResult.vstate;
		var tempPrice = jsonResult.price;
		var tempHeadliners = "";
		tempHeadliners = jsonResult.headliners[0];
		var tempOtherBands = "";
		tempOtherBands = jsonResult.otherbands[0];
		
		if(tempHeadliners!=undefined){mpaDiv.append('<h1>'+tempHeadliners+'</h1>');}
		if(tempOtherBands!=undefined){mpaDiv.append('<h4>'+tempOtherBands+'</h4>');}
		mpaDiv.append('<ul><li>Event Data:'+tempEventDate+'</li><li>Event Time:'+tempEventTime+'</li><li>Venue Name:'+tempVenueName+'</li><li>City:'+tempCity+'</li><li>State:'+tempState+'</li><li>Price:'+tempPrice+'</li></ul>');
		
		$('#eventsHappeningSoon').append(mpaDiv);
	}
	
	this.removeFaveAJAXCall = function(artid) {
		var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/userController.php/artists/"+artid+"?action=delete",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
    					alert("AJAX call successful!");
						$('.starButton').removeClass('favorite');
    				},
    				error: function(xhr,status,error) {
    					alert("AJAX call failed!");
    				}
    		   });
	}
}
