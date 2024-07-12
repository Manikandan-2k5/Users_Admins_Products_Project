Lyte.Component.register("user-main-portal", {
	data : function(){
		return {
			products:Lyte.attr("array")
		}
	},
	actions : {
		getAllProducts:function(){
			$L.ajax({
				url: 'http://localhost:8080/product_project/getAllProducts.action',
				type: 'GET',
				async:false,
				xhrFields: {
					withCredentials: true
				},
				success: function (response) {
					let responseData = JSON.parse(response);
					if(responseData.validation!=null || responseData.validation!=undefined || responseData.validation==false){
						Lyte.Router.transitionTo("home.user.login");
					}
					else if(responseData.isError==null || responseData.isError==undefined){
						store.unloadAll("products");
						responseData.forEach(function(product){
							store.createRecord("products",{product_id:product.product_id,product_name:product.product_name, product_price:parseInt(product.product_price), product_brand:product.product_brand, product_origin:product.product_origin});
						})
					}
				},
				error: function (xhr, status, error) {
					console.error(xhr.responseText);
				}
			});
		},
		getUserProducts:function(){
			$L.ajax({
				url: 'http://localhost:8080/product_project/getUserProducts.action',
				type: 'GET',
				async:false,
				xhrFields: {
					withCredentials: true
				},
				success: function (response) {
					let responseData = JSON.parse(response);
					if(responseData.validation!=null || responseData.validation!=undefined || responseData.validation==false){
						Lyte.Router.transitionTo("home.user.login");
					}
					else if(responseData.isError==null || responseData.isError==undefined){
						store.unloadAll("products");
						responseData.forEach(function(product){
							store.createRecord("products",{product_id:product.product_id, product_name:product.product_name, product_price:parseInt(product.product_price), product_brand:product.product_brand, product_origin:product.product_origin});
						})
					}
					else{
						store.unloadAll("products");
					}
				},
				error: function (xhr, status, error) {
					console.error(xhr.responseText);
				}
			})
		},
		getMRSProducts:function(){
			$L.ajax({
				url: 'http://localhost:8080/product_project/getMRSProducts.action',
				type: 'GET',
				async:false,
				xhrFields: {
					withCredentials: true
				},
				success: function (response) {
					let responseData = JSON.parse(response);
					if(responseData.validation!=null || responseData.validation!=undefined || responseData.validation==false){
						Lyte.Router.transitionTo("home.user.login");
					}
					else if(responseData.isError==null || responseData.isError==undefined){
						store.unloadAll("products");
						responseData.forEach(function(product){
							store.createRecord("products",{product_id:product.product_id, product_name:product.product_name, product_price:parseInt(product.product_price), product_brand:product.product_brand, product_origin:product.product_origin});
						})
					}
					else{
						store.unloadAll("products");
					}
				},
				error: function (xhr, status, error) {
					console.error(xhr.responseText);
				}
			})
		},
		viewProduct:function(product){
			$L.ajax({
				url: 'http://localhost:8080/product_project/updateUserProductPriority.action',
				type: 'POST',
				contentType:'application/json',
				data:JSON.stringify({'productId':product.product_id}),
				xhrFields: {
					withCredentials: true
				},
				success: function (response) {
					console.log(response);
				},
				error: function (xhr, status, error) {
					console.error(xhr.responseText);
				}
			});
			document.querySelector(".view-product-section").classList.add("display");
			document.querySelector("#product_name").textContent = product.product_name;
			document.querySelector("#product_brand").textContent = product.product_brand;
			document.querySelector("#product_price").textContent = product.product_price;
			document.querySelector("#product_origin").textContent = product.product_origin;
		},
		redirect:function(){
			Lyte.Router.transitionTo("home.user.my_products");
		},
		logout: function(){
			$L.ajax({
				url: 'http://localhost:8080/product_project/logoutUser.action',
				type: 'GET',
				xhrFields: {
					withCredentials: true
				},
				success: function (response) {
					Lyte.Router.transitionTo("home.user.login");
				},
				error: function (xhr, status, error) {
					console.error(xhr.responseText);
				}
			});
		},
		closeProductView:function(){
			document.querySelector(".view-product-section").classList.remove("display");
		}
	},
	methods : {
		error:function ( visibleList , searchElem, inputEvent, inputValue, hiddenList ) {
			if ( visibleList.length == 0 ) {
				console.log("No such products");
			}
		}
	
	}
});
