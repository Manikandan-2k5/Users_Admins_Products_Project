Lyte.Component.register("user-signup-portal", {
_template:"<template tag-name=\"user-signup-portal\"> <section> <lyte-input id=\"username\" name=\"username\" lt-prop-label=\"Name\" lt-prop-placeholder=\"Enter Name\"></lyte-input> <lyte-input id=\"phone\" name=\"phone\" lt-prop-label=\"Phone No\" lt-prop-placeholder=\"Enter Phone No\"></lyte-input> <lyte-input id=\"mail\" name=\"mail\" lt-prop-label=\"Mail\" lt-prop-placeholder=\"Enter Mail\"></lyte-input> <lyte-input id=\"password\" name=\"password\" lt-prop-label=\"Password\" lt-prop-placeholder=\"Enter Password\"></lyte-input> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('addRequest')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Request Approval </template> </lyte-button> </section> <lyte-alert lt-prop-type=\"warning\" id=\"signup_alert\"></lyte-alert> </template>",
_dynamicNodes : [{"type":"componentDynamic","position":[1,1]},{"type":"componentDynamic","position":[1,3]},{"type":"componentDynamic","position":[1,5]},{"type":"componentDynamic","position":[1,7]},{"type":"attr","position":[1,9]},{"type":"registerYield","position":[1,9,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,9]},{"type":"componentDynamic","position":[3]}],
_observedAttributes :["username","phone","mail","password","signup_alert"],

	data : function(){
		return {
			username:Lyte.attr("object"),
			phone:Lyte.attr("object"),
			mail:Lyte.attr("object"),
			password:Lyte.attr("object"),
			signup_alert:Lyte.attr("object")
		}		
	},
	actions : {
		addRequest:function(){
			let record = store.createRecord("requestedUsers", {name:username.ltProp("value"), phone_no:phone.ltProp("value"), email:mail.ltProp("value"), password:password.ltProp("value")});
			if(record.$.isError){
				console.log
				let errorField = (Object.keys(record.$.error)[0]);
				let errorMessage = record.$.error[(Object.keys(record.$.error)[0])].message;
				signup_alert.ltProp("heading", errorField.toUpperCase());
				signup_alert.ltProp("primaryMessage", errorMessage);
				signup_alert.ltProp("show", "true");
			}
			else{
				this.executeMethod("addRequestInDB");
			}
		}
	},
	methods : {
		addRequestInDB: async function(){
			 let response = await fetch("http://127.0.0.1:8080/product_project/registerUserRequest.action",
			{
				method:"POST", 
				headers:{"Accept":"application/json", "Content-Type":"application/json"}, 
				body:JSON.stringify({name:username.ltProp("value"), phone_no:phone.ltProp("value"), email:mail.ltProp("value"), password:password.ltProp("value")})
			});	
			let responseData = await response.json();
			if(responseData.requestRegistered){
				signup_alert.ltProp("type", "success");
				signup_alert.ltProp("heading","Registration Successful");
				signup_alert.ltProp("primaryMessage","Your Account is waiting for Approval");
				signup_alert.ltProp("show", "true");
			}
			else{
				signup_alert.ltProp("type", "warning");
				signup_alert.ltProp("heading","Registration Failed");
				signup_alert.ltProp("primaryMessage",responseData.error);
				signup_alert.ltProp("show", "true");
			}
			this.executeMethod("clearFields");
		},
		clearFields:function(){
			username.ltProp("value", "")
			phone.ltProp("value", "")
			mail.ltProp("value", "")
			password.ltProp("value", "")
		}
	}
});
