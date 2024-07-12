Lyte.Component.register("user-login-portal", {
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
