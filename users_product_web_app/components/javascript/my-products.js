Lyte.Component.register("my-products", {
	data : function(){
		return {
			products:Lyte.attr("array"),
			product_fields_box	:Lyte.attr('object'),
			products_alert : Lyte.attr("object")
		}		
	},
	actions : {
		create: function(){
			product_fields_box.innerHTML = "<create-product></create-product>";
		},
		update: function(productDetails){
			product_fields_box.innerHTML = "<update-product></update-product>";
			product_name.ltProp("value", productDetails.product_name);
			brand.ltProp("value", productDetails.product_brand);
			price.ltProp("value", productDetails.product_price);
			product_origin.ltProp("value", productDetails.product_origin);
			product = productDetails;
		},
		redirect: function(){
			Lyte.Router.transitionTo("home.user.main	");
		},
		delete: function(productId){
			$L.ajax({
				url: 'http://localhost:8080/product_project/deleteProduct.action',
				type: 'POST',
				contentType:'application/json',
				data:JSON.stringify({'product_id':productId}),
				xhrFields: {
					withCredentials: true
				},
				success: function (response) {
					if(JSON.parse(response).deletion){
						store.unloadAll("products", store.peekAll("products").filter(function(product){ return product.product_id==productId }));
						products_alert.ltProp("type", "success");
						products_alert.ltProp("heading", "Deletion Successful");
						products_alert.ltProp("primaryMessage", "Your product is deleted.");
						products_alert.ltProp("show", "true");
					}
					else{
						products_alert.ltProp("type", "warning");
						products_alert.ltProp("heading", "Deletion Failed");
						products_alert.ltProp("primaryMessage", JSON.parse(response).error);
						products_alert.ltProp("show", "true");
					}
				},
				error: function (xhr, status, error) {
					console.error(xhr.responseText);
				}
			});
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
		}
	},
	methods : {}
});
