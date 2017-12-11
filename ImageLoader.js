var ImageLoader = function() {
	this.preloadImages = function() {
			var images = new Array()
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
				"State%20Sillhouettes/alabama-silhouette/alabama-silhouette.png",
				"State%20Sillhouettes/alaska-silhouette/alaska-silhouette.png",
				"State%20Sillhouettes/arizona-silhouette/arizona-silhouette.png",
				"State%20Sillhouettes/arkansas-silhouette/arkansas-silhouette.png",
				"State%20Sillhouettes/california-silhouette/california-silhouette.png",
				"State%20Sillhouettes/colorado-silhouette/colorado-silhouette.png",
				"State%20Sillhouettes/connecticut-silhouette/connecticut-silhouette.png",
				"State%20Sillhouettes/delaware-silhouette/delaware-silhouette.png",
				"State%20Sillhouettes/florida-silhouette/florida-silhouette.png",
				"State%20Sillhouettes/georgia-silhouette/georgia-silhouette.png",
				"State%20Sillhouettes/hawaii-silhouette/hawaii-silhouette.png",
				"State%20Sillhouettes/idaho-silhouette/idaho-silhouette.png",
				"State%20Sillhouettes/illinois-silhouette/illinois-silhouette.png",
				"State%20Sillhouettes/indiana-silhouette/indiana-silhouette.png",
				"State%20Sillhouettes/iowa-silhouette/iowa-silhouette.png",
				"State%20Sillhouettes/kansas-silhouette/kansas-silhouette.png",
				"State%20Sillhouettes/kentucky-silhouette/kentucky-silhouette.png",
				"State%20Sillhouettes/louisiana-silhouette/louisiana-silhouette.png",
				"State%20Sillhouettes/maine-silhouette/maine-silhouette.png",
				"State%20Sillhouettes/maryland-silhouette/maryland-silhouette.png",
				"State%20Sillhouettes/massachusetts-silhouette/massachusetts-silhouette.png",
				"State%20Sillhouettes/michigan-silhouette/michigan-silhouette.png",
				"State%20Sillhouettes/minnesota-silhouette/minnesota-silhouette.png",
				"State%20Sillhouettes/mississippi-silhouette/mississippi-silhouette.png",
				"State%20Sillhouettes/missouri-silhouette/missouri-silhouette.png",
				"State%20Sillhouettes/montana-silhouette/montana-silhouette.png",
				"State%20Sillhouettes/nebraska-silhouette/nebraska-silhouette.png",
				"State%20Sillhouettes/nevada-silhouette/nevada-silhouette.png",
				"State%20Sillhouettes/new-hampshire-silhouette/new-hampshire-silhouette.png",
				"State%20Sillhouettes/new-jersey-silhouette/new-jersey-silhouette.png",
				"State%20Sillhouettes/new-mexico-silhouette/new-mexico-silhouette.png",
				"State%20Sillhouettes/new-york-silhouette/new-york-silhouette.png",
				"State%20Sillhouettes/north-carolina-silhouette/north-carolina-silhouette.png",
				"State%20Sillhouettes/north-dakota-silhouette/north-dakota-silhouette.png",
				"State%20Sillhouettes/ohio-silhouette/ohio-silhouette.png",
				"State%20Sillhouettes/oklahoma-silhouette/oklahoma-silhouette.png",
				"State%20Sillhouettes/oregon-silhouette/oregon-silhouette.png",
				"State%20Sillhouettes/pennsylvania-silhouette/pennsylvania-silhouette.png",
				"State%20Sillhouettes/rhode-island-silhouette/rhode-island-silhouette.png",
				"State%20Sillhouettes/south-carolina-silhouette/south-carolina-silhouette.png",
				"State%20Sillhouettes/south-dakota-silhouette/south-dakota-silhouette.png",
				"State%20Sillhouettes/tennessee-silhouette/tennessee-silhouette.png",
				"State%20Sillhouettes/texas-silhouette/texas-silhouette.png",
				"State%20Sillhouettes/utah-silhouette/utah-silhouette.png",
				"State%20Sillhouettes/vermont-silhouette/vermont-silhouette.png",
				"State%20Sillhouettes/virginia-silhouette/virginia-silhouette.png",
				"State%20Sillhouettes/washington-silhouette/washington-silhouette.png",
				"State%20Sillhouettes/west-virginia-silhouette/west-virginia-silhouette.png",
				"State%20Sillhouettes/wisconsin-silhouette/wisconsin-silhouette.png",
				"State%20Sillhouettes/wyoming-silhouette/wyoming-silhouette.png"
			);
			
			return images;
	}
}