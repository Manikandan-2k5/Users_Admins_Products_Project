Lyte.Component.register("user-main-portal", {
_template:"<template tag-name=\"user-main-portal\"> <div class=\"header\"> <lyte-dropdown lt-prop-selected=\"all_products\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-drop-box> <lyte-drop-body> <lyte-drop-item data-value=\"all_products\" onclick=\"{{action('getAllProducts')}}\">All Products</lyte-drop-item> <lyte-drop-item data-value=\"user_products\" onclick=\"{{action('getUserProducts')}}\">My Products</lyte-drop-item> <lyte-drop-item data-value=\"mrs_products\" onclick=\"{{action('getMRSProducts')}}\">Most Recently Searched</lyte-drop-item> </lyte-drop-body> </lyte-drop-box> </template> </lyte-dropdown> <section class=\"header-buttons\"> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('redirect')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Your Products </template> </lyte-button> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('logout')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Logout </template> </lyte-button> </section> </div> <section class=\"main\"> <div class=\"products\"> <template is=\"if\" value=\"{{expHandlers(products.length,'==',0)}}\"><template case=\"true\"> <div>No Products</div> </template><template case=\"false\"> <lyte-search lt-prop-placeholder=\"Search Product\" class=\"search-bar\" lt-prop-query-selector=\"{&quot;scope&quot; : &quot;tbody&quot;, &quot;search&quot; : &quot;td:first-of-type&quot;, &quot;target&quot; : &quot;tr&quot;}\" on-search=\"{{method('error')}}\"></lyte-search> <table> <thead> <tr> <th>Product Name</th> <th>Product Brand</th> <th>Product Price</th> <th>Product Origin</th> </tr> </thead> <tbody> <tr is=\"for\" lyte-for=\"true\" items=\"{{products}}\" item=\"product\" index=\"index\" depth=\"2\"></tr> </tbody> </table> </template></template> </div> <div class=\"view-product-section\"> <div class=\"detail\"> <label>Name:</label> <p id=\"product_name\"></p> </div> <div class=\"detail\"> <label>Brand:</label> <p id=\"product_brand\"></p> </div> <div class=\"detail\"> <label>Price:</label> <p id=\"product_price\"></p> </div> <div class=\"detail\"> <label>Origin:</label> <p id=\"product_origin\"></p> </div> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('closeProductView')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Close </template> </lyte-button> </div> </section> </template>\n<style>table {\n    margin:1rem 0;\n    width: 100%;\n    border-collapse: collapse;\n}\nth, td {\n    border: 1px solid black;\n    padding: 8px;\n    text-align: left;\n}\nth {\n    background-color: #f2f2f2;\n}\n\n.header-buttons{\n    display:flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.header-buttons > lyte-button{\n    margin: 0 1rem;\n}\n\n\n\nlyte-search{ \n    width:500px !important;\n    display: block;\n}\n\n.rows:hover{\n    transform:scaley(1.2);\n    background-color: black;\n    color:white;\n}\n\n.header{\n    width:100%;\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n    margin:1rem 0;\n}\n\n.main{\n    display: flex;\n    width:100vw;\n}\n\n.products{\n    flex-grow:1;\n}\n\n.view-product-section{\n    flex-grow:1;\n    display:none;\n}\n\n.display{\n    display:flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n.detail{\n    display:flex;\n    align-items: center;\n    justify-content: center;\n    gap:2rem;\n}\n\n.detail>label, .detail>p{\n    font-size:1.5rem;\n}</style>",
_dynamicNodes : [{"type":"registerYield","position":[1,1,1],"dynamicNodes":[{"type":"attr","position":[1,1,1]},{"type":"componentDynamic","position":[1,1,1]},{"type":"attr","position":[1,1,3]},{"type":"componentDynamic","position":[1,1,3]},{"type":"attr","position":[1,1,5]},{"type":"componentDynamic","position":[1,1,5]},{"type":"componentDynamic","position":[1,1]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1,1]},{"type":"attr","position":[1,3,1]},{"type":"registerYield","position":[1,3,1,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,3,1]},{"type":"attr","position":[1,3,3]},{"type":"registerYield","position":[1,3,3,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,3,3]},{"type":"attr","position":[3,1,1]},{"type":"if","position":[3,1,1],"cases":{"true":{"dynamicNodes":[]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]},{"type":"attr","position":[3,3,1]},{"type":"for","position":[3,3,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1,0]},{"type":"text","position":[1,3,0]},{"type":"text","position":[1,5,0]},{"type":"text","position":[1,7,0]}],"actualTemplate":"<template is=\"for\" items=\"{{products}}\" item=\"product\" index=\"index\" depth=\"2\"><table><tbody> <tr class=\"rows\" onclick=\"{{action('viewProduct',product)}}\"> <td>{{product.product_name}}</td> <td>{{product.product_brand}}</td> <td>{{product.product_price}}</td> <td>{{product.product_origin}}</td> </tr> </tbody></table></template>","tagName":"TBODY"}]}},"default":{}},{"type":"attr","position":[3,3,9]},{"type":"registerYield","position":[3,3,9,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[3,3,9]}],
_observedAttributes :["products"],

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
