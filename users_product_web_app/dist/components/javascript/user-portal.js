Lyte.Component.register("user-portal", {
_template:"<template tag-name=\"user-portal\"> <template items=\"{{urls}}\" item=\"url\" index=\"index\" is=\"for\"><div> <a href=\"{{url.url}}\">{{url.modulename}}</a> </div></template> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"for","position":[1],"dynamicNodes":[{"type":"attr","position":[0,1]},{"type":"text","position":[0,1,0]}]}],
_observedAttributes :["urls"],

	data : function(){
		return {
			urls:Lyte.attr("array")
		}		
	},
	actions : {
		// Functions for event handling
	},
	methods : {
		// Functions which can be used as callback in the component.
	}
});
