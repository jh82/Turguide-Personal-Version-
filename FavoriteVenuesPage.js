var FavoriteVenuesPage = function(headerObj, sharedPrepsObj, controllerObj) {

    this.pageReady = function() {
    	sharedPrepsObj.makeDOMReady();
    	headerObj.fillInHeader();
		
		var mainElementsArray= [
			{elementType:'div',id:'favoritesDiv'}
		];
    	sharedPrepsObj.makeMainReady(mainElementsArray);
		
		var titlesArray = [
			{divNode:$('#favoritesDiv'),titleString:'Favorite Venues'}
		];
    	sharedPrepsObj.fillInAllTitles(titlesArray);
		
    	this.fillInFavoritesDiv();
    	this.setUpEventHandlers();
    }

    this.fillInFavoritesDiv = function() {
    	var favoritesDiv = $('#favoritesDiv');
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
