Lyte.Component.register("admin-main-portal", {
_template:"<template tag-name=\"admin-main-portal\"> <div class=\"admin-header\"> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('logout')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Logout </template> </lyte-button> </div> <template is=\"if\" value=\"{{expHandlers(requests.length,'==',0)}}\"><template case=\"true\"> <div>No Requested Users</div> </template><template case=\"false\"> <lyte-search lt-prop-placeholder=\"Search User\" class=\"admin-search-bar\" lt-prop-query-selector=\"{&quot;scope&quot; : &quot;tbody&quot;, &quot;search&quot; : &quot;td:first-of-type&quot;, &quot;target&quot; : &quot;tr&quot;}\" on-search=\"{{method('error')}}\"></lyte-search> <table> <thead> <tr> <th>Name</th> <th>Mail</th> <th>Phone No</th> <th>Approve</th> </tr> </thead> <tbody> <tr is=\"for\" lyte-for=\"true\" items=\"{{requests}}\" item=\"request\" index=\"index\" depth=\"2\"></tr> </tbody> </table> </template></template> </template>\n<style>.admin-header{\n    width:100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    margin:1rem 0;\n}\n\n.requests{\n    display:flex;\n    align-items:center;\n    justify-content:space-evenly;\n}</style>",
_dynamicNodes : [{"type":"attr","position":[1,1]},{"type":"registerYield","position":[1,1,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,1]},{"type":"attr","position":[3]},{"type":"if","position":[3],"cases":{"true":{"dynamicNodes":[]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]},{"type":"attr","position":[3,3,1]},{"type":"for","position":[3,3,1],"dynamicNodes":[{"type":"text","position":[1,1,0]},{"type":"text","position":[1,3,0]},{"type":"text","position":[1,5,0]},{"type":"attr","position":[1,7,0]},{"type":"registerYield","position":[1,7,0,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,7,0]}],"actualTemplate":"<template is=\"for\" items=\"{{requests}}\" item=\"request\" index=\"index\" depth=\"2\"><table><tbody> <tr> <td>{{request.name}}</td> <td>{{request.phone_no}}</td> <td>{{request.email}}</td> <td><lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('approveUser',request)}}\"> <template is=\"registerYield\" yield-name=\"text\"> Approve </template> </lyte-button> </td> </tr> </tbody></table></template>","tagName":"TBODY"}]}},"default":{}}],
_observedAttributes :["requests"],

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
