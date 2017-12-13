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
        mainVenueDiv.append('<canvas id="mapCanvas" width="4000" height="3300"></canvas>'); //1536 768
    	mainVenueDiv.append('Search Venue Name:<input type="text" id="venueNameTextbox">');
		mainVenueDiv.append('Search Venue City:<input type="text" id="venueCityTextbox">');
		mainVenueDiv.append('Search Venue State:<input type="text" id="venueStateTextbox">');
    	mainVenueDiv.append('<button id="venueSearchButton">&#x1F50D;</button>');
    }
	
	this.fillInMapCanvas = function() {
		var canvas = document.getElementById('mapCanvas');
		var ctx = canvas.getContext('2d');
		ctx.fillStyle = "grey";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		ctx.drawImage(stateImageArray[0], 1400, 2100);//alabama
		ctx.drawImage(stateImageArray[1], 0, 3000);//alaska
		ctx.drawImage(stateImageArray[2], 500, 2100);//arizona
		ctx.drawImage(stateImageArray[3], 1200, 1800);//arkansas
		ctx.drawImage(stateImageArray[4], 0, 1950);//california
		ctx.drawImage(stateImageArray[5], 500, 1800);//colorado
		ctx.drawImage(stateImageArray[6], 1800, 500);//connecticut
		ctx.drawImage(stateImageArray[7], 1950, 700);//delaware
		ctx.drawImage(stateImageArray[8], 1600, 2400);//florida
		ctx.drawImage(stateImageArray[9], 1600, 2100);//georgia
		ctx.drawImage(stateImageArray[10], 500, 3000);//hawaii
		ctx.drawImage(stateImageArray[11], 300, 400);//idaho
		ctx.drawImage(stateImageArray[12], 1250, 700);//illinois
		ctx.drawImage(stateImageArray[13], 1400, 700);//indiana
		ctx.drawImage(stateImageArray[14], 950, 650);//iowa
		ctx.drawImage(stateImageArray[15], 700, 800);//kansas
		ctx.drawImage(stateImageArray[16], 1300, 1650);//kentucky
		ctx.drawImage(stateImageArray[17], 1200, 2300);//louisiana
		ctx.drawImage(stateImageArray[18], 2200, 0);//maine
		ctx.drawImage(stateImageArray[19], 1680, 700);//maryland
		ctx.drawImage(stateImageArray[20], 2080, 250);//massachusetts
		ctx.drawImage(stateImageArray[21], 1250, 200);//michigan
		ctx.drawImage(stateImageArray[22], 950, 200);//minnesota
		ctx.drawImage(stateImageArray[23], 1100, 2100);//misssissippi
		ctx.drawImage(stateImageArray[24], 950, 700);//missouri
		ctx.drawImage(stateImageArray[25], 500, 200);//montana
		ctx.drawImage(stateImageArray[26], 650, 1650);//nebraska
		ctx.drawImage(stateImageArray[27], 300, 1950);//nevada
		ctx.drawImage(stateImageArray[28], 2150, 200);//new hampshire
		ctx.drawImage(stateImageArray[29], 2050, 670);//new jersey
		ctx.drawImage(stateImageArray[30], 500, 1800);//new mexico
		ctx.drawImage(stateImageArray[31], 1850, 200);//new york
		ctx.drawImage(stateImageArray[32], 1680, 1750);//north carolina
		ctx.drawImage(stateImageArray[33], 680, 200);//north dakota
		ctx.drawImage(stateImageArray[34], 1600, 700);//ohio
		ctx.drawImage(stateImageArray[35], 650, 1750);//oklahoma
		ctx.drawImage(stateImageArray[36], 0, 350);//oregon
		ctx.drawImage(stateImageArray[37], 1850, 650);//pennsylvania
		ctx.drawImage(stateImageArray[38], 2200, 275);//rhode island
		ctx.drawImage(stateImageArray[39], 1800, 2080);//south carolina
		ctx.drawImage(stateImageArray[40], 650, 250);//south dakota
		ctx.drawImage(stateImageArray[41], 1325, 1780);//tennessee
		ctx.drawImage(stateImageArray[42], 600, 1850);//texas
		ctx.drawImage(stateImageArray[43], 530, 2020);//utah
		ctx.drawImage(stateImageArray[44], 1800, 200);//vermont
		ctx.drawImage(stateImageArray[45], 1640, 700);//viriginia
		ctx.drawImage(stateImageArray[46], 60, 160);//washington
		ctx.drawImage(stateImageArray[47], 1680, 670);//west virginia
		ctx.drawImage(stateImageArray[48], 1220, 340);//wisconsin
		ctx.drawImage(stateImageArray[49], 460, 760);//wyoming
		
	}

    this.setUpEventHandlers = function() {
		var currentObj = this;
    	$('#artistSearchButton').on('click', function() {
    		currentObj.whenSearchButtonClicked();
    	});
    }

    this.whenSearchButtonClicked = function() {
    	console.log('Search Button Clicked!');
		var nameVal = $('#artistNameTextbox').val();
		var cityVal = $('#artistCityTextbox').val();
		var stateVal = $('#artistStateTextbox').val();
		this.searchAJAXCall(nameVal, cityVal, stateVal);
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
	
	 this.searchAJAXCall = function(nameVal, cityVal, stateVal) {
		var currentObj = this;
    	var url_base = "https://wwwp.cs.unc.edu/Courses/comp426-f17/users/gibsonb/finalproj";
    	$.ajax(url_base + "/artistsearch.php?vname="+encodeURIComponent(nameVal)+"&vcity="+encodeURIComponent(cityVal)+"&vstate="+encodeURIComponent(stateVal)+"",
    	       {	type: "GET",
    				dataType: "json",
    				success: function(result, status, xhr) {
						console.log("AJAX call successful!");
						console.log(result);
						controllerObj.loadVenueSearchPage(result);
    				},
    				error: function(xhr,status,error) {
    					console.log("AJAX call failed!");
						alert('Venue not found!');
    				}
    		   });
    }
}