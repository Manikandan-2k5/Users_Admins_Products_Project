Lyte.Component.register("update-product", {
_template:"<template tag-name=\"update-product\"> <lyte-input id=\"product_name\" name=\"product_name\" lt-prop-label=\"Product_Name\" lt-prop-placeholder=\"Enter Product Name\"></lyte-input> <lyte-input id=\"brand\" name=\"brand\" lt-prop-label=\"Brand\" lt-prop-placeholder=\"Enter Brand\"></lyte-input> <lyte-input id=\"price\" name=\"price\" lt-prop-label=\"Price\" lt-prop-placeholder=\"Enter Price\"></lyte-input> <lyte-input id=\"product_origin\" name=\"origin\" lt-prop-label=\"Origin\" lt-prop-placeholder=\"Enter Origin\"></lyte-input> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('updateProduct')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Update Product </template> </lyte-button> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('cancelUpdate')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Cancel </template> </lyte-button> </template>",
_dynamicNodes : [{"type":"componentDynamic","position":[1]},{"type":"componentDynamic","position":[3]},{"type":"componentDynamic","position":[5]},{"type":"componentDynamic","position":[7]},{"type":"attr","position":[9]},{"type":"registerYield","position":[9,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[9]},{"type":"attr","position":[11]},{"type":"registerYield","position":[11,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[11]}],
_observedAttributes :["product"],

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
