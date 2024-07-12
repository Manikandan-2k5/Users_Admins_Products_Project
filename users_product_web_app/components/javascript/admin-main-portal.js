Lyte.Component.register("admin-main-portal", {
	data : function(){
		return {
			requests:Lyte.attr("array")
		}	
	},
	actions : {
		approveUser : function(request){
			$L.ajax({
				url: 'http://localhost:8080/product_project/addUser.action',
				type: 'POST',
				contentType:"application/json",
				data:JSON.stringify(request),
				xhrFields: {
					withCredentials: true
				},
				success: function (response) {
					let responseData = JSON.parse(response);
					if(responseData.UserApproved){
						let record = store.peekAll("requestedUsers").filter(function(user){ return user.email==request.email && user.phone_no==request.phone_no} );
						store.unloadAll("requestedUsers", record);
					}
					else{
						alert("There is No Requested User with such Credentials");
					}
				},
				error: function (xhr, status, error) {
					console.error(xhr.responseText);
				}
			});
		},
		logout:function(){
			$L.ajax({
				url: 'http://localhost:8080/product_project/logoutUser.action',
				type: 'GET',
				xhrFields: {
					withCredentials: true
				},
				success: function (response) {
					Lyte.Router.transitionTo("home.admin.login");
				},
				error: function (xhr, status, error) {
					console.error(xhr.responseText);
				}
			});
		}
	},
	methods : {
		error:function ( visibleList , searchElem, inputEvent, inputValue, hiddenList ) {
			if ( visibleList.length == 0 ) {
				console.log("No such Users");
			}
		}
	}
});
