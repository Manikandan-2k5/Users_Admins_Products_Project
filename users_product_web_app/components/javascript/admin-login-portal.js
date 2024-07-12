Lyte.Component.register("admin-login-portal", {
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
