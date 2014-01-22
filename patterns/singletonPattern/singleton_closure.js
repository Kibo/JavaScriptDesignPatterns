var Singleton = (function () {
	var instantiated;
	
	function init() {
		// singleton here
		return {			
			publicProperty: 'test',
			
			publicMethod: function () {
				console.log('hello world');
			},				
		};
	}
	
	return {
		getInstance: function () {
			if (!instantiated) {
				instantiated = init();
			}
			return instantiated;
		}
	};
})();

// calling public methods is then as easy as:
Singleton.getInstance().publicMethod();			


