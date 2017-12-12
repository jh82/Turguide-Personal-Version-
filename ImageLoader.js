var ImageLoader = function() {
	this.preloadImages = function() {
			var images = new Array();
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image();
					images[i].src = preload.arguments[i];
				}
			}
			preload(
				"State%20Sillhouettes/alabama-silhouette/alabama-silhouette-small.png",
				"State%20Sillhouettes/alaska-silhouette/alaska-silhouette-small.png",
				"State%20Sillhouettes/arizona-silhouette/arizona-silhouette-small.png",
				"State%20Sillhouettes/arkansas-silhouette/arkansas-silhouette-small.png",
				"State%20Sillhouettes/california-silhouette/california-silhouette-small.png",
				"State%20Sillhouettes/colorado-silhouette/colorado-silhouette-small.png",
				"State%20Sillhouettes/connecticut-silhouette/connecticut-silhouette-small.png",
				"State%20Sillhouettes/delaware-silhouette/delaware-silhouette-small.png",
				"State%20Sillhouettes/florida-silhouette/florida-silhouette-small.png",
				"State%20Sillhouettes/georgia-silhouette/georgia-silhouette-small.png",
				"State%20Sillhouettes/hawaii-silhouette/hawaii-silhouette-small.png",
				"State%20Sillhouettes/idaho-silhouette/idaho-silhouette-small.png",
				"State%20Sillhouettes/illinois-silhouette/illinois-silhouette-small.png",
				"State%20Sillhouettes/indiana-silhouette/indiana-silhouette-small.png",
				"State%20Sillhouettes/iowa-silhouette/iowa-silhouette-small.png",
				"State%20Sillhouettes/kansas-silhouette/kansas-silhouette-small.png",
				"State%20Sillhouettes/kentucky-silhouette/kentucky-silhouette-small.png",
				"State%20Sillhouettes/louisiana-silhouette/louisiana-silhouette-small.png",
				"State%20Sillhouettes/maine-silhouette/maine-silhouette-small.png",
				"State%20Sillhouettes/maryland-silhouette/maryland-silhouette-small.png",
				"State%20Sillhouettes/massachusetts-silhouette/massachusetts-silhouette-small.png",
				"State%20Sillhouettes/michigan-silhouette/michigan-silhouette-small.png",
				"State%20Sillhouettes/minnesota-silhouette/minnesota-silhouette-small.png",
				"State%20Sillhouettes/mississippi-silhouette/mississippi-silhouette-small.png",
				"State%20Sillhouettes/missouri-silhouette/missouri-silhouette-small.png",
				"State%20Sillhouettes/montana-silhouette/montana-silhouette-small.png",
				"State%20Sillhouettes/nebraska-silhouette/nebraska-silhouette-small.png",
				"State%20Sillhouettes/nevada-silhouette/nevada-silhouette-small.png",
				"State%20Sillhouettes/new-hampshire-silhouette/new-hampshire-silhouette-small.png",
				"State%20Sillhouettes/new-jersey-silhouette/new-jersey-silhouette-small.png",
				"State%20Sillhouettes/new-mexico-silhouette/new-mexico-silhouette-small.png",
				"State%20Sillhouettes/new-york-silhouette/new-york-silhouette-small.png",
				"State%20Sillhouettes/north-carolina-silhouette/north-carolina-silhouette-small.png",
				"State%20Sillhouettes/north-dakota-silhouette/north-dakota-silhouette-small.png",
				"State%20Sillhouettes/ohio-silhouette/ohio-silhouette-small.png",
				"State%20Sillhouettes/oklahoma-silhouette/oklahoma-silhouette-small.png",
				"State%20Sillhouettes/oregon-silhouette/oregon-silhouette-small.png",
				"State%20Sillhouettes/pennsylvania-silhouette/pennsylvania-silhouette-small.png",
				"State%20Sillhouettes/rhode-island-silhouette/rhode-island-silhouette-small.png",
				"State%20Sillhouettes/south-carolina-silhouette/south-carolina-silhouette-small.png",
				"State%20Sillhouettes/south-dakota-silhouette/south-dakota-silhouette-small.png",
				"State%20Sillhouettes/tennessee-silhouette/tennessee-silhouette-small.png",
				"State%20Sillhouettes/texas-silhouette/texas-silhouette-small.png",
				"State%20Sillhouettes/utah-silhouette/utah-silhouette-small.png",
				"State%20Sillhouettes/vermont-silhouette/vermont-silhouette-small.png",
				"State%20Sillhouettes/virginia-silhouette/virginia-silhouette-small.png",
				"State%20Sillhouettes/washington-silhouette/washington-silhouette-small.png",
				"State%20Sillhouettes/west-virginia-silhouette/west-virginia-silhouette-small.png",
				"State%20Sillhouettes/wisconsin-silhouette/wisconsin-silhouette-small.png",
				"State%20Sillhouettes/wyoming-silhouette/wyoming-silhouette-small.png"
			);
			
			return images;
	}
}