var SharedPreps = function() {
    this.makeDOMReady = function() {
    	var bodyNode = $('body');
		bodyNode.addClass('body');
    	bodyNode.append('<header class="header"></header>');
    	bodyNode.append('<main class ></main>');
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
		var currentObj = this;
		toFillInArray.forEach(function(element) {
			currentObj.fillInTitle(element.divNode, element.titleString);
		})
    }
}