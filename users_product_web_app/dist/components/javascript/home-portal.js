Lyte.Component.register("home-portal", {
_template:"<template tag-name=\"home-portal\"> <a href=\"/#/home/admin\">ADMIN</a> <a href=\"/#/home/user\">USER</a> </template>",
_dynamicNodes : [],
_observedAttributes :["someArray"],

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
