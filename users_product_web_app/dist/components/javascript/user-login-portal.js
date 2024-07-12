Lyte.Component.register("user-login-portal", {
_template:"<template tag-name=\"user-login-portal\"> <section> <lyte-input id=\"mail\" name=\"mail\" lt-prop-label=\"Mail\" lt-prop-placeholder=\"Enter Mail\"></lyte-input> <lyte-input id=\"password\" name=\"password\" lt-prop-label=\"Password\" lt-prop-placeholder=\"Enter Password\"></lyte-input> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('login')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Login </template> </lyte-button> </section> <lyte-alert lt-prop-type=\"warning\" id=\"user_login_alert\"></lyte-alert> </template>",
_dynamicNodes : [{"type":"componentDynamic","position":[1,1]},{"type":"componentDynamic","position":[1,3]},{"type":"attr","position":[1,5]},{"type":"registerYield","position":[1,5,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,5]},{"type":"componentDynamic","position":[3]}],
_observedAttributes :["mail","password","user_login_alert"],

	data : function(){
		return {
			mail:Lyte.attr("string"),
			password:Lyte.attr("string"),
			user_login_alert:Lyte.attr("object")
		}		
	},
	actions : {
		login: function(){
			this.executeMethod("isUser");
		}
	},
	methods : {
		isUser : async function(){
			$L.ajax({
				url: 'http://localhost:8080/product_project/userLogin.action',
				type: 'POST',
				contentType:"application/json",
				data:JSON.stringify({email:mail.ltProp("value"), password:password.ltProp("value")}),
				xhrFields: {
					withCredentials: true
				},
				success: function (response) {
					if(JSON.parse(response).logged_in){
						Lyte.Router.transitionTo("home.user.main");
					}
					else{
						user_login_alert.ltProp("heading", "Authentication Failed");
						user_login_alert.ltProp("primaryMessage", "Your credentials are wrong.");
						user_login_alert.ltProp("show","true");
					}
				},
				error: function (xhr, status, error) {
					console.error(xhr.responseText);
				}
			})
		}
	}
});
