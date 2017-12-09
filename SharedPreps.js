var SharedPreps = function() {
    this.makeDOMReady = function() {
    	var bodyNode = $('body');
    	bodyNode.append('<header></header>');
    	bodyNode.append('<main></main>');
    	bodyNode.append('<footer></footer>');
    }

    this.makeMainReady = function(mainElementsArray) {
    	var mainNode = $('main');
		mainElementsArray.forEach(function(element) {
			mainNode.append('<'+element.elementType+' id="'+element.id+'"></'+element.elementType+'>');
		})
    }

    this.fillInTitle = function(divNode, titleString) {
    	divNode.append('<h1>'+titleString+'</h1>');
    }

    this.fillInAllTitles = function(toFillInArray) {
		toFillInArray.forEach(function(element) {
			this.fillInTitle(element.divNode, element.titleString);
		})
    }
}