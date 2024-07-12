Lyte.Component.register("create-product", {
_template:"<template tag-name=\"create-product\"> <lyte-input id=\"product_name\" name=\"product_name\" lt-prop-label=\"Product_Name\" lt-prop-placeholder=\"Enter Product Name\"></lyte-input> <lyte-input id=\"brand\" name=\"brand\" lt-prop-label=\"Brand\" lt-prop-placeholder=\"Enter Brand\"></lyte-input> <lyte-input id=\"price\" name=\"price\" lt-prop-label=\"Price\" lt-prop-type=\"number\" lt-prop-placeholder=\"Enter Price\"></lyte-input> <lyte-input id=\"product_origin\" name=\"origin\" lt-prop-label=\"Origin\" lt-prop-placeholder=\"Enter Origin\"></lyte-input> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('createProduct')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Create Product </template> </lyte-button> <lyte-button lt-prop-appearance=\"failure\" onclick=\"{{action('cancelCreate')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Cancel </template> </lyte-button> </template>",
_dynamicNodes : [{"type":"componentDynamic","position":[1]},{"type":"componentDynamic","position":[3]},{"type":"componentDynamic","position":[5]},{"type":"componentDynamic","position":[7]},{"type":"attr","position":[9]},{"type":"registerYield","position":[9,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[9]},{"type":"attr","position":[11]},{"type":"registerYield","position":[11,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[11]}],

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
