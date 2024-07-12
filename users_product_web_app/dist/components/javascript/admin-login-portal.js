Lyte.Component.register("admin-login-portal", {
_template:"<template tag-name=\"admin-login-portal\"> <lyte-input id=\"mail\" name=\"mail\" lt-prop-label=\"Mail\" lt-prop-placeholder=\"Enter Mail\"></lyte-input> <lyte-input id=\"password\" name=\"password\" lt-prop-label=\"Password\" lt-prop-placeholder=\"Enter Password\"></lyte-input> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('login')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Login </template> </lyte-button> <lyte-alert lt-prop-heading=\"\" lt-prop-primary-message=\"\" lt-prop-type=\"warning\" id=\"admin_login_alert\"></lyte-alert> </template>",
_dynamicNodes : [{"type":"componentDynamic","position":[1]},{"type":"componentDynamic","position":[3]},{"type":"attr","position":[5]},{"type":"registerYield","position":[5,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[5]},{"type":"componentDynamic","position":[7]}],
_observedAttributes :["urls","mail","password","admin_login_alert"],

	data : function(){
		return {
			urls:Lyte.attr("array"),
			mail:Lyte.attr("string"),
			password:Lyte.attr("string"),
			admin_login_alert:Lyte.attr("object")
		}		
	},
	actions : {
		login : function(){
			this.executeMethod('isAdmin');
		}
	},
	methods : {
		isAdmin : async function(){
			$L.ajax({
				url: 'http://localhost:8080/product_project/adminLogin.action',
				type: 'POST',
				contentType:"application/json",
				data:JSON.stringify({email:mail.ltProp("value"), password:password.ltProp("value")}),
				xhrFields: {
					withCredentials: true
				},
				success: function (response) {
					if(JSON.parse(response).logged_in){
						Lyte.Router.transitionTo("home.admin.main");
					}
					else{
						admin_login_alert.ltProp("heading", "Authentication Failed");
						admin_login_alert.ltProp("primaryMessage", "Your credentials are wrong.");
						admin_login_alert.ltProp("show", "true");
					}
				},
				error: function (xhr, status, error) {
					console.error(xhr.responseText);
				}
			})
		}
	}
});
