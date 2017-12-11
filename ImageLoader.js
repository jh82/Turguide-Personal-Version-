var ImageLoader = function() {
	this.preloadImages = function() {
		<!--//--><![CDATA[//><!--
			var images = new Array()
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
				//"/State_Sill"/*,
				/*"http://domain.tld/gallery/image-002.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-001.jpg",
				"http://domain.tld/gallery/image-002.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-001.jpg",
				"http://domain.tld/gallery/image-002.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-001.jpg",
				"http://domain.tld/gallery/image-002.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-001.jpg",
				"http://domain.tld/gallery/image-002.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-001.jpg",
				"http://domain.tld/gallery/image-002.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-001.jpg",
				"http://domain.tld/gallery/image-002.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-001.jpg",
				"http://domain.tld/gallery/image-002.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-001.jpg",
				"http://domain.tld/gallery/image-002.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-001.jpg",
				"http://domain.tld/gallery/image-002.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-001.jpg",
				"http://domain.tld/gallery/image-002.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-001.jpg",
				"http://domain.tld/gallery/image-002.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-001.jpg",
				"http://domain.tld/gallery/image-002.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-001.jpg",
				"http://domain.tld/gallery/image-002.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-001.jpg",
				"http://domain.tld/gallery/image-002.jpg",
				"http://domain.tld/gallery/image-003.jpg",
				"http://domain.tld/gallery/image-003.jpg"*/
				
			)
		//--><!]]>
	}
}