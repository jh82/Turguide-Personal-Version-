var VenueSearchPage = function(headerObj, sharedPrepsObj, controllerObj, searchResult) {
	
	this.currentFavorites;

    this.pageReady = function() {
		this.venueAJAXCall();
    	sharedPrepsObj.makeDOMReady();
    	headerObj.fillInHeader();
		
		var mainElementsArray= [
			{elementType:'div',id:'mainSearchDiv'}
		];
    	sharedPrepsObj.makeMainReady(mainElementsArray);
		
		var titlesArray = [
			{divNode:$('#mainSearchDiv'),titleString:'Search Results'}
		];
    	sharedPrepsObj.fillInAllTitles(titlesArray);
		
    	this.fillInMainSearchDiv();
    	this.setUpEventHandlers();
    }

    this.fillInMainSearchDiv = function() {
    	var mainVenuesDiv = $('#mainSearchDiv');
		var currentObj = this;
		$('main').removeClass('centeredColumn');
		$('main').addClass('centeredColumn');
		mainVenuesDiv.addClass('flexVertical');
		mainVenuesDiv.addClass('styledColumn');
    	//mainVenuesDiv.append('Search Venues: <input type="text" id="venueSearchTextbox">');
    	//mainVenuesDiv.append('<button id="venueSearchButton">&#x1F50D;</button>');
    	//mainVenuesDiv.append('<h1>Search Results</h1>');
    	mainVenuesDiv.append('<div id="foundVenueDiv"></div>');
		searchResult.forEach(function(element) {
			parsedResult = JSON.parse(element);
			currentObj.createTestAJAXDiv(parsedResult);
		});
    }

    this.setUpEventHandlers = function() {
		var currentObj = this;

    	$('#venueSearchButton').on('click', function() {
    		currentObj.whenSearchButtonClicked();
    	});
		
		$('.starButton').on('click', function() {
    		currentObj.whenStarButtonClicked($(this));
    	});
    }

    this.whenSearchButtonClicked = function() {
    	console.log('Search Button Clicked!');
    }
	
	this.whenStarButtonClicked = function(starButton) {
    	var favoriteBool = starButton.data('favorited');
		var venid = starButton.data('venid');
		
		if(favoriteBool==0){
			starButton.data('favorited', 1);
			starButton.addClass('favorite');
			this.addFaveAJAXCall(starButton.data('venid'));
		}
		else if(favoriteBool==1){
			starButton.data('favorited', 0);
			starButton.removeClass('favorite');
			this.removeFaveAJAXCall(starButton.data('venid'));
		}
    }


    this.testAJAXCall =function() {
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
	
	this.createTestAJAXDiv = function(jsonResult) {
		console.log(jsonResult.artistinfo);
		var mpaDiv = $('#foundVenueDiv');
		var tempBandName = jsonResult.vname;
		console.log(tempBandName);
		var tempWebsite = jsonResult.vcity;
		var tempOrigin = jsonResult.vstate;
		var tempMembers = jsonResult.maxcap;
		var favoriteBool = 0;
		this.currentFavorites.forEach(function(element) {
			var parsedElement = JSON.parse(element);
			if(parsedElement.venid==jsonResult.venid) {
				favoriteBool = 1;
			}
		})
		
		mpaDiv.append('<img src="fakeAvatar.png">');
		mpaDiv.append('<h1>'+tempBandName+'</h1>');
		mpaDiv.append('<ul><li>Website:'+tempWebsite+'</li><li>Origin:'+tempOrigin+'</li><li>Members:'+tempMembers+'</li></ul>');
		mpaDiv.append('<button class="starButton" data-venid="'+jsonResult.venid+'" data-favorited="'+favoriteBool+'">&#9733;</button><br>');
		if(favoriteBool) {$('.starButton').addClass('favorite');}
	}
	
	/*this.createTestAJAXDiv = function(jsonResult) {
		console.log(jsonResult.artistinfo);
		var artistInfo = JSON.parse(jsonResult.artistinfo);
		var mpaDiv = $('#foundArtistsDiv');
		var tempBandName = artistInfo.bandname;
		console.log(tempBandName);
		var tempWebsite = artistInfo.website;
		var tempOrigin = artistInfo.origin;
		var tempMembers = artistInfo.members;
		var favoriteBool = 0;
		this.currentFavorites.forEach(function(element) {
			var parsedElement = JSON.parse(element);
			if(artistInfo.artid==parsedElement.artid) {
				favoriteBool = 1;
			}
		})
		console.log(favoriteBool);
		
		mpaDiv.append('<img src="'+artistInfo.imgurl+'">');
		mpaDiv.append('<h1>'+tempBandName+'</h1>');
		mpaDiv.append('<ul><li>Website:'+tempWebsite+'</li><li>Origin:'+tempOrigin+'</li><li>Members:'+tempMembers+'</li></ul>');
		mpaDiv.append('<button class="starButton" data-artid="'+artistInfo.artid+'" data-favorited="'+favoriteBool+'">&#9733;</button>');
		if(favoriteBool) {$('.starButton').addClass('favorite');}
	}*/
	
	this.addFaveAJAXCall = function(venid) {
		var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/userController.php/venues",
    	       {	type: "POST",
    				dataType: "json",
					data: {venid: venid},
    				success: function(result, status, xhr) {
    					console.log("AJAX call successful!");
    				},
    				error: function(xhr,status,error) {
    					console.log("AJAX call failed!");
    				}
    		   });
	}
	
	this.removeFaveAJAXCall = function(venid) {
		var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/userController.php/venues/"+venid+"?action=delete",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
    					console.log("AJAX call successful!");
						$('.starButton').removeClass('favorite');
    				},
    				error: function(xhr,status,error) {
    					console.log("AJAX call failed!");
    				}
    		   });
	}
	
	this.venueAJAXCall = function() {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/userController.php/venues",
    	       {	type: "GET",
					async: false,
    				dataType: "json",
    				success: function(result, status, xhr) {
    					console.log("AJAX call successful!");
						console.log(result);
						currentObj.currentFavorites = result;
    				},
    				error: function(xhr,status,error) {
    					alert("AJAX call failed!");
					
    				}
    		   });
    }
}
