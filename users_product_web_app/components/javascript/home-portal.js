Lyte.Component.register("home-portal", {
	data : function(){
		return {
      				someArray : Lyte.attr ( 'array' , { default : [{ name : "New File ..." , key : "Ctrl + N" }, { name : "Open File...." , key : 'Ctrl + O' }] })
      		};
      				
	},
	actions : {
		// Functions for event handling
	},
	methods : {
		// Functions which can be used as callback in the component.
	}
});
