var artistSearchPage = function(headerObj, sharedPrepsObj, controllerObj) {
	
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
    	var mainArtistsDiv = $('#mainSearchDiv');
    	mainArtistsDiv.append('Search Artists: <input type="text" id="artistSearchTextbox">');
    	mainArtistsDiv.append('<button id="artistSearchButton">&#x1F50D;</button>');
    	mainArtistsDiv.append('<h1>Search Results</h1>');
    	mainArtistsDiv.append('<div id="foundArtistsDiv"></div>');
    }

    this.setUpEventHandlers = function() {
		var currentObj = this;

    	$('#artistSearchButton').on('click', function() {
    		currentObj.whenSearchButtonClicked();
    	});
    }

    this.whenSearchButtonClicked = function() {
    	console.log('Search Button Clicked!');
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
}
