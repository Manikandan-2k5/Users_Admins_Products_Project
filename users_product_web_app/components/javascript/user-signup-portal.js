Lyte.Component.register("user-signup-portal", {
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
