var MainArtistPage = function(headerObj, sharedPrepsObj, controllerObj) {

    this.pageReady = function() {
    	sharedPrepsObj.makeDOMReady();
    	headerObj.fillInHeader();
		
		var mainElementsArray= [
			{elementType:'div',id:'mainArtistsDiv'}
		];
    	sharedPrepsObj.makeMainReady(mainElementsArray);
		
		var titlesArray = [
			{divNode:$('#mainArtistsDiv'),titleString:'Main Artists'}
		];
    	sharedPrepsObj.fillInAllTitles(titlesArray);
		
		$("main").addClass('centeredColumn');
		$("#mainArtistsDiv").addClass('flexVertical');
		$("#mainArtistsDiv").addClass('styledColumn');
    	this.fillInMainArtistsDiv();
    	this.setUpEventHandlers();
		this.randArtistsAJAXCall();
    }

    this.fillInMainArtistsDiv = function() {
    	var mainArtistsDiv = $('#mainArtistsDiv');
		if(headerObj.userSignedIn) {
			mainArtistsDiv.append('Search Artists: <input type="text" id="artistSearchTextbox">');
			mainArtistsDiv.append('<button id="artistSearchButton">&#x1F50D;</button>');
		}
    	mainArtistsDiv.append('<h1>Most Popular Artists</h1>');
    	mainArtistsDiv.append('<div id="mostPopularArtistsDiv"></div>');
    }

    this.setUpEventHandlers  = function() {
		var currentObj = this;
		
    	$('#artistSearchButton').on('click', function() {
    		currentObj.whenSearchButtonClicked();
    	});
    }

    this.whenSearchButtonClicked = function() {
    	console.log('Search Button Clicked!');
		var searchval = $('#artistSearchTextbox').val();
		this.searchAJAXCall(searchval);
    }

    this.randArtistsAJAXCall = function() {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/artistController.php?random=10",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
    					console.log("AJAX call successful!");
						console.log(result);
						var parsedResult = undefined;
						result.forEach(function(element) {
							parsedResult = JSON.parse(element);
							currentObj.createTestAJAXDiv(parsedResult);
						});
						
						//currentObj.createTestAJAXDiv(result.ranartists[0]);
						
						console.log(parsedResult.bandname);
    				},
    				error: function(xhr,status,error) {
    					console.log("AJAX call failed!");
    				}
    		   });
    }
	
	this.createTestAJAXDiv = function(jsonResult) {
		console.log(jsonResult);
		var mpaDiv = $('#mostPopularArtistsDiv');
		var tempBandName = jsonResult.bandname;
		console.log(tempBandName);
		var tempWebsite = jsonResult.website;
		var tempOrigin = jsonResult.origin;
		var tempMembers = jsonResult.members;
		
		mpaDiv.append('<img src="fakeAvatar.png">');
		mpaDiv.append('<h1>'+tempBandName+'</h1>');
		mpaDiv.append('<ul><li>Website:'+tempWebsite+'</li><li>Origin:'+tempOrigin+'</li><li>Members:'+tempMembers+'</li></ul>');
	}
	
	 this.searchAJAXCall = function(searchval) {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/artistController.php?bname="+encodeURIComponent(searchval)+"",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
						console.log("AJAX call successful!");
						console.log(result);
						controllerObj.loadArtistSearchPage(result, this);
    				},
    				error: function(xhr,status,error) {
    					console.log("AJAX call failed!");
						alert('Band not found!');
    				}
    		   });
    }
}
