Lyte.Component.register("update-product", {
	data : function(){
		return {
			product:Lyte.attr('object')
		}		
	},
	actions : {
		updateProduct: function(){
			let thisObject = this;
			product.product_name = product_name.ltProp("value");
			product.product_price = parseInt(price.ltProp("value"));
			product.product_brand = brand.ltProp("value");
			product.product_origin = product_origin.ltProp("value");
			let record = store.peekRecord("products",product.product_id);
			record.$.set(product);
			if(record.$.isError){
				let errorField = (Object.keys(record.$.error)[0]);
				let errorMessage = record.$.error[(Object.keys(record.$.error)[0])].message;
				products_alert.ltProp("type", "warning");
				products_alert.ltProp("heading", errorField);
				products_alert.ltProp("primaryMessage", errorMessage);
				products_alert.ltProp("show", "true");
			}
			else{
				$L.ajax({
					url: 'http://localhost:8080/product_project/updateProduct.action',
					type: 'POST',
					async:false,	
					contentType:'application/json',
					data:JSON.stringify(product),
					xhrFields: {
						withCredentials: true
					},
					success: function (response) {
						if(JSON.parse(response).updation){
							products_alert.ltProp("type", "success");
							products_alert.ltProp("heading", "Updation Successful");
							products_alert.ltProp("primaryMessage", "Your product is updated.");
							products_alert.ltProp("show", "true");
						}
						else{
							products_alert.ltProp("type", "warning");
							products_alert.ltProp("heading", "Updation Fail");
							products_alert.ltProp("primaryMessage", JSON.parse(response).error);
							products_alert.ltProp("show", "true");
						}
					},
					error: function (xhr, status, error) {
						console.error(xhr.responseText);
					}
				});
			}
			product_fields_box.innerHTML = "";
			this.executeMethod("getUserProducts");
		},
		cancelUpdate: function(){
			product_fields_box.innerHTML = "";
		}
	},
	methods : {
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
		}
	}
});
