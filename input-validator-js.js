var InputValidatorJS = {
	definitions : {
		FormId : "form",
		ElementError: "p",
		ClassRequired: "required", 
		addElementErro: true,
		addClassErroElement: false

	},
	init : function(params) {
		for (pKey in params) {
			this.definitions[pKey] = params[pKey];
		}
		
		window.addEventListener('load', this.onload());
	},
	onload : function() {
		var _f = this.definitions['FormId'];
		var fr = document.getElementById(this.definitions["FormId"]);

		var elementsRequired = fr.getElementsByClassName(this.definitions["ClassRequired"]);



		for (var i=0; i < elementsRequired.length; i++) {
			if (elementsRequired[i].getAttribute('type') == "text" || 
				elementsRequired[i].getAttribute('type') == "password") {
				var value = elementsRequired[i].getAttribute('value').trim();
				if (value == "") {
					console.log(document.getElementById(elementsRequired[i].getAttribute('id'))).appendChild('<small>This value is required</small>');
					 
				}
			}
		}



	}

};

