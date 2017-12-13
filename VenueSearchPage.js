var VenueSearchPage = function(headerObj, sharedPrepsObj, controllerObj, searchResult) {

    this.pageReady = function() {
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
    	mainVenuesDiv.append('Search Venues: <input type="text" id="venueSearchTextbox">');
    	mainVenuesDiv.append('<button id="venueSearchButton">&#x1F50D;</button>');
    	mainVenuesDiv.append('<h1>Search Results</h1>');
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
    }

    this.whenSearchButtonClicked = function() {
    	console.log('Search Button Clicked!');
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
		
		mpaDiv.append('<img src="fakeAvatar.png">');
		mpaDiv.append('<h1>'+tempBandName+'</h1>');
		mpaDiv.append('<ul><li>Website:'+tempWebsite+'</li><li>Origin:'+tempOrigin+'</li><li>Members:'+tempMembers+'</li></ul>');
		mpaDiv.append('&#9733;');
	}
}
