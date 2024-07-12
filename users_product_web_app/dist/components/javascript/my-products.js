Lyte.Component.register("my-products", {
_template:"<template tag-name=\"my-products\"> <section class=\"products_header\"> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('create')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Create Product </template> </lyte-button> <section class=\"header-buttons\"> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('redirect')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Home </template> </lyte-button> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('logout')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Logout </template> </lyte-button> </section> </section> <section class=\"products_main\"> <div class=\"products\"> <template is=\"if\" value=\"{{expHandlers(products.length,'==',0)}}\"><template case=\"true\"> <div>No Products</div> </template><template case=\"false\"> <table> <thead> <tr> <th>Product Name</th> <th>Product Brand</th> <th>Product Price</th> <th>Product Origin</th> <th>Update Product</th> <th>Delete Product</th> </tr> </thead> <tbody> <tr is=\"for\" lyte-for=\"true\" items=\"{{products}}\" item=\"product\" index=\"index\" depth=\"2\"></tr> </tbody> </table> </template></template> </div> </section> <section id=\"product_fields_box\"></section> <lyte-alert lt-prop-heading=\"\" lt-prop-primary-message=\"\" lt-prop-type=\"warning\" id=\"products_alert\"></lyte-alert> </template>\n<style>.products_main{\n    display:flex;\n}\n\n.products_header{\n    display:flex;\n    justify-content: space-between;\n    width:100%;\n    margin:1rem 0;\n}\n\ncreate-product{\n    width:90%;\n    display:flex;\n    align-items:center;\n    justify-content:space-around;\n    margin:1rem auto;\n    border:1px solid black;\n    padding:1.5rem;\n}</style>",
_dynamicNodes : [{"type":"attr","position":[1,1]},{"type":"registerYield","position":[1,1,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,1]},{"type":"attr","position":[1,3,1]},{"type":"registerYield","position":[1,3,1,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,3,1]},{"type":"attr","position":[1,3,3]},{"type":"registerYield","position":[1,3,3,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,3,3]},{"type":"attr","position":[3,1,1]},{"type":"if","position":[3,1,1],"cases":{"true":{"dynamicNodes":[]},"false":{"dynamicNodes":[{"type":"attr","position":[1,3,1]},{"type":"for","position":[1,3,1],"dynamicNodes":[{"type":"text","position":[1,1,0]},{"type":"text","position":[1,3,0]},{"type":"text","position":[1,5,0]},{"type":"text","position":[1,7,0]},{"type":"attr","position":[1,9,1]},{"type":"registerYield","position":[1,9,1,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,9,1]},{"type":"attr","position":[1,11,1]},{"type":"registerYield","position":[1,11,1,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,11,1]}],"actualTemplate":"<template is=\"for\" items=\"{{products}}\" item=\"product\" index=\"index\" depth=\"2\"><table><tbody> <tr class=\"rows\"> <td>{{product.product_name}}</td> <td>{{product.product_brand}}</td> <td>{{product.product_price}}</td> <td>{{product.product_origin}}</td> <td> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('update',product)}}\"> <template is=\"registerYield\" yield-name=\"text\"> Update </template> </lyte-button> </td> <td> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('delete',product.product_id)}}\"> <template is=\"registerYield\" yield-name=\"text\"> Delete </template> </lyte-button> </td> </tr> </tbody></table></template>","tagName":"TBODY"}]}},"default":{}},{"type":"componentDynamic","position":[7]}],
_observedAttributes :["products","product_fields_box","products_alert"],

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
