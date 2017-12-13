var ArtistSearchPage = function(headerObj, sharedPrepsObj, controllerObj, searchresult) {
	
	this.searchresult = searchresult;
	this.currentFavorites;
	
    this.pageReady = function() {
		this.artistAJAXCall();
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
    	var mainArtistsDiv = $('#mainSearchDiv');
		$('main').removeClass('centeredColumn');
		$('main').addClass('centeredColumn');
		mainArtistsDiv.addClass('flexVertical');
		mainArtistsDiv.addClass('styledColumn');
    	mainArtistsDiv.append('Search Artists: <input type="text" id="artistSearchTextbox">');
    	mainArtistsDiv.append('<button id="artistSearchButton">&#x1F50D;</button>');
    	mainArtistsDiv.append('<h1>Search Results</h1>');
    	mainArtistsDiv.append('<div id="foundArtistsDiv"></div>');
		this.createTestAJAXDiv(this.searchresult);
    }

    this.setUpEventHandlers = function() {
		var currentObj = this;

    	$('#artistSearchButton').on('click', function() {
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
		var artid = starButton.data('artid');
		
		if(favoriteBool==0){
			starButton.data('favorited', 1);
			starButton.addClass('favorite');
			this.addFaveAJAXCall(starButton.data('artid'));
		}
		else if(favoriteBool==1){
			starButton.data('favorited', 0);
			starButton.addClass('favorite');
			this.removeFaveAJAXCall(starButton.data('artid'));
		}
    }

    this.testAJAXCall = function() {
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
	}
	
	this.addFaveAJAXCall = function(artid) {
		var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/userController.php/artists",
    	       {	type: "POST",
    				dataType: "json",
					data: {artid: artid},
    				success: function(result, status, xhr) {
    					console.log("AJAX call successful!");
    				},
    				error: function(xhr,status,error) {
    					console.log("AJAX call failed!");
    				}
    		   });
	}
	
	this.removeFaveAJAXCall = function(artid) {
		var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/userController.php/artists/"+artid+"",
    	       {	type: "DELETE",
    				dataType: "json",
    				success: function(result, status, xhr) {
    					alert("AJAX call successful!");
    				},
    				error: function(xhr,status,error) {
    					alert("AJAX call failed!");
    				}
    		   });
	}
	
	this.artistAJAXCall = function() {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/userController.php/artists",
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
