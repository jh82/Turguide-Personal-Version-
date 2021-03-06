var HomePageNotSignedIn = function(headerObj, sharedPrepsObj, controllerObj) {

    this.pageReady = function() {
    	sharedPrepsObj.makeDOMReady();
    	headerObj.fillInHeader();
		
		var mainElementsArray= [
			{elementType:'div',id:'mainLogo'},
			{elementType:'div',id:'mainRandomsDiv'}
		];
    	sharedPrepsObj.makeMainReady(mainElementsArray);
		
		var mainRandomsDiv = $('#mainRandomsDiv');
		mainRandomsDiv.addClass('threeColumns');
		mainRandomsDiv.append('<div id="randomArtist" class="bodyText"></div>');
		mainRandomsDiv.append('<div id="eventsRightNow" class="bodyText"></div>');
		mainRandomsDiv.append('<div id="randomVenue" class="bodyText"></div>');
		
		var titlesArray = [
			{divNode:$('#randomArtist'),titleString:'Random Artists'},
			{divNode:$('#eventsRightNow'),titleString:'Random Events'},
			{divNode:$('#randomVenue'),titleString:'Random Venues'}
		];
    	sharedPrepsObj.fillInAllTitles(titlesArray);
    	
		this.fillInMainLogo();
		$('randomArtist').addClass('flexVertical');
		$('randomVenue').addClass('flexVertical');
		$('eventsRightNow').addClass('flexVertical');
		this.randArtistsAJAXCall();
		this.randVenuesAJAXCall();
		this.randEventsAJAXCall();
    }

    this.fillInMainLogo = function() {
    	var mainLogoNode = $('#mainLogo');
		mainLogoNode.addClass('centeredColumn');
    	mainLogoNode.append('<img src="sketchFullLogo-transparent.png">' );
    }

    this.randArtistsAJAXCall = function() {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/artistController.php?random=10",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
    					//console.log("AJAX call successful!");
						//console.log(result);
						var parsedResult = undefined;
						result.forEach(function(element) {
							parsedResult = JSON.parse(element);
							currentObj.createTestAJAXArtistDiv(parsedResult);
						});
						
						//currentObj.createTestAJAXDiv(result.ranartists[0]);
						
						console.log(parsedResult.bandname);
    				},
    				error: function(xhr,status,error) {
    					console.log("AJAX call failed!");
    				}
    		   });
    }
	
	this.createTestAJAXArtistDiv = function(jsonResult) {
		if(jsonResult.bandname==null) {
			return;
		}
		console.log(jsonResult);
		var mpaDiv = $('<div class="bodyText AJAXDiv"></div>');
		mpaDiv.addClass('infoPanel');
		var tempBandName = jsonResult.bandname;
		//console.log(tempBandName);
		var tempWebsite = jsonResult.website;
		var tempOrigin = jsonResult.origin;
		var tempMembers = jsonResult.members;
		
		mpaDiv.append('<img src="'+jsonResult.imgurl+'" height=100 width=100 class="circleViewport">');
		mpaDiv.append('<h1>'+tempBandName+'</h1>');
		mpaDiv.append('<ul><li>Website:'+tempWebsite+'</li><li>Origin:'+tempOrigin+'</li><li>Members:'+tempMembers+'</li></ul>');
		
		$('#randomArtist').append(mpaDiv);
	}
	
	this.randVenuesAJAXCall = function() {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/venueController.php?random=10",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
    					console.log("AJAX call successful!");
						console.log(result);
						var parsedResult = undefined;
						result.forEach(function(element) {
							parsedResult = JSON.parse(element);
							currentObj.createTestAJAXVenuesDiv(parsedResult);
						});
						
						//currentObj.createTestAJAXDiv(result.ranartists[0]);
						
						console.log(parsedResult.bandname);
    				},
    				error: function(xhr,status,error) {
    					console.log("AJAX call failed!");
    				}
    		   });
    }
	
	this.createTestAJAXVenuesDiv = function(jsonResult) {
		console.log(jsonResult);
		var mpaDiv = $('<div class="bodyText AJAXDiv"></div>');
		mpaDiv.addClass('infoPanel');
		var tempVenueName = jsonResult.vname;
		//console.log(tempVenueName);
		var tempCity = jsonResult.vcity;
		var tempState = jsonResult.vstate;
		var tempCapacity = jsonResult.maxcap;
		
		mpaDiv.append('<h1>'+tempVenueName+'</h1>');
		mpaDiv.append('<ul><li>City:'+tempCity+'</li><li>State:'+tempState+'</li><li>Capacity:'+tempCapacity+'</li></ul>');
		
		$('#randomVenue').append(mpaDiv);
	}
	
	this.randEventsAJAXCall = function() {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/php/eventController.php?random=10",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
    					//console.log("AJAX call successful!");
						//console.log(result);
						var parsedResult = undefined;
						result.forEach(function(element) {
							parsedResult = JSON.parse(element);
							currentObj.createTestAJAXEventsDiv(parsedResult);
						});
						
						//currentObj.createTestAJAXDiv(result.ranartists[0]);
						
						//console.log(parsedResult.bandname);
    				},
    				error: function(xhr,status,error) {
    					console.log("AJAX call failed!");
						currentObj.randEventsAJAXCall();
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
		
		$('#eventsRightNow').append(mpaDiv);
	}
}
