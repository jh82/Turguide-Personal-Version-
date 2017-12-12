var MainVenuePage = function(headerObj, sharedPrepsObj, controllerObj, stateImageArray) {

    this.pageReady = function() {
    	sharedPrepsObj.makeDOMReady();
    	headerObj.fillInHeader();
		
		var mainElementsArray= [
			{elementType:'div',id:'mainVenueDiv'}
		];
    	sharedPrepsObj.makeMainReady(mainElementsArray);
		
		var titlesArray = [
			{divNode:$('#mainVenueDiv'),titleString:'Main Venue'}
		];
    	sharedPrepsObj.fillInAllTitles(titlesArray);
		
    	this.fillInMainVenueDiv();
		this.fillInMapCanvas();
    	this.setUpEventHandlers();
    }

    this.fillInMainVenueDiv = function() {
    	var mainVenueDiv = $('#mainVenueDiv');
        mainVenueDiv.append('<canvas id="mapCanvas" width="25500" height="5000"></canvas>'); //1536 768
    	mainVenueDiv.append('Search Venues: <input type="text" id="venueSearchTextbox">');
    	mainVenueDiv.append('<button id="venueSearchButton">&#x1F50D;</button>');
    }
	
	this.fillInMapCanvas = function() {
		var ctx = document.getElementById('mapCanvas').getContext('2d');
		//ctx.drawImage(stateImageArray[0], 0, 0);
		
		/*for(var i = 0; i < stateImageArray.length; i++) {
			ctx.drawImage(stateImageArray[i], i*500, 0);
		}*/
		
		ctx.drawImage(stateImageArray[0], 1400, 2100);//alabama
		ctx.drawImage(stateImageArray[1], 0, 3000);//alaska
		ctx.drawImage(stateImageArray[2], 500, 2100);//arizona
		ctx.drawImage(stateImageArray[3], 1200, 1800);//arkansas
		ctx.drawImage(stateImageArray[4], 0, 1950);//california
		ctx.drawImage(stateImageArray[5], 500, 1800);//colorado
		ctx.drawImage(stateImageArray[6], 1800, 500);//connecticut
		ctx.drawImage(stateImageArray[7], 1650, 700);//delaware
		ctx.drawImage(stateImageArray[8], 1600, 2400);//florida
		ctx.drawImage(stateImageArray[9], 1600, 2100);//georgia
		ctx.drawImage(stateImageArray[10], 500, 3000);//hawaii
		ctx.drawImage(stateImageArray[11], 300, 400);//idaho
		ctx.drawImage(stateImageArray[12], 1250, 700);//illinois
		ctx.drawImage(stateImageArray[13], 1400, 700);//indiana
		ctx.drawImage(stateImageArray[14], 500, 0);
		ctx.drawImage(stateImageArray[15], 500, 0);
		ctx.drawImage(stateImageArray[16], 500, 0);
		ctx.drawImage(stateImageArray[17], 500, 0);
		ctx.drawImage(stateImageArray[18], 500, 0);
		ctx.drawImage(stateImageArray[19], 500, 0);
		ctx.drawImage(stateImageArray[20], 500, 0);
		ctx.drawImage(stateImageArray[21], 500, 0);
		ctx.drawImage(stateImageArray[22], 500, 0);
		ctx.drawImage(stateImageArray[23], 500, 0);
		ctx.drawImage(stateImageArray[24], 500, 0);
		ctx.drawImage(stateImageArray[25], 500, 0);
		ctx.drawImage(stateImageArray[26], 500, 0);
		ctx.drawImage(stateImageArray[27], 500, 0);
		ctx.drawImage(stateImageArray[28], 500, 0);
		ctx.drawImage(stateImageArray[29], 500, 0);
		ctx.drawImage(stateImageArray[30], 500, 0);
		ctx.drawImage(stateImageArray[31], 500, 0);
		ctx.drawImage(stateImageArray[32], 500, 0);
		ctx.drawImage(stateImageArray[33], 500, 0);
		ctx.drawImage(stateImageArray[34], 500, 0);
		ctx.drawImage(stateImageArray[35], 500, 0);
		ctx.drawImage(stateImageArray[36], 500, 0);
		ctx.drawImage(stateImageArray[37], 500, 0);
		ctx.drawImage(stateImageArray[38], 500, 0);
		ctx.drawImage(stateImageArray[39], 500, 0);
		ctx.drawImage(stateImageArray[40], 500, 0);
		ctx.drawImage(stateImageArray[41], 500, 0);
		ctx.drawImage(stateImageArray[42], 500, 0);
		ctx.drawImage(stateImageArray[43], 500, 0);
		ctx.drawImage(stateImageArray[44], 500, 0);
		ctx.drawImage(stateImageArray[45], 500, 0);
		ctx.drawImage(stateImageArray[46], 500, 0);
		ctx.drawImage(stateImageArray[47], 500, 0);
		ctx.drawImage(stateImageArray[48], 500, 0);
		ctx.drawImage(stateImageArray[49], 500, 0);
		
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
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/randomartists.php",
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
		mpaDiv.append('&#9733;');
	}
}
