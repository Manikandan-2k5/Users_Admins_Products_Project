Lyte.Component.register("create-product", {
	data : function(){
		return {
		}		
	},
	actions : {
		createProduct:function(){
			let thisObject = this;
			let	pname = product_name.ltProp("value");
			let pbrand = brand.ltProp("value");
			let pprice = parseInt(price.ltProp("value"));
			let porigin = product_origin.ltProp("value");
			let json = {product_name:pname, product_brand:pbrand, product_price:pprice, product_origin:porigin};
			let record = store.createRecord("products", json);
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
					url: 'http://localhost:8080/product_project/createProduct.action',
					type: 'POST',
					async:true,
					contentType:'application/json',
					data:JSON.stringify(json),
					xhrFields: {
						withCredentials: true
					},
					success: function (response) {
						if(JSON.parse(response).creation){
							products_alert.ltProp("type", "success");
							products_alert.ltProp("heading", "Product Created");
							products_alert.ltProp("primaryMessage", "Successful product creation.");
							products_alert.ltProp("show", "true");
						}
						else{
							products_alert.ltProp("type", "warning");
							products_alert.ltProp("heading", "Product Creation Failed");
							products_alert.ltProp("primaryMessage", JSON.parse(response).error);
							products_alert.ltProp("show", "true");
						}
						thisObject.executeMethod("getUserProducts");
					},
					error: function (xhr, status, error) {
						console.error(xhr.responseText);
					}
				});
				product_fields_box.innerHTML = "";
			}
		},
		cancelCreate:function(){
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
