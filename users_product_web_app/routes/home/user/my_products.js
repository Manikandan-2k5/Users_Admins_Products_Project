Lyte.Router.registerRoute("home.user.my_products",{
	getResources  : function (paramsObject ){ 
        return [
            "addons/@zoho/lyte-ui-component/dist/components/lyte-input.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-button.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-search.js",
            "addons/@zoho/lyte-ui-component/dist/plugins/lyte-search.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-tooltip.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-dropdown.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-alert.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-wormhole.js",
            "addons/@zoho/lyte-ui-component/dist/theme/compiledCSS/default/ltr/lyte-ui-alert.css",
            "addons/@zoho/lyte-ui-component/dist/theme/compiledCSS/default/ltr/lyte-ui-search.css",
            "addons/@zoho/lyte-ui-component/dist/theme/compiledCSS/default/ltr/lyte-ui-input.css",
            "addons/@zoho/lyte-ui-component/dist/theme/compiledCSS/default/ltr/lyte-ui-button.css",
            "addons/@zoho/lyte-ui-component/dist/theme/compiledCSS/default/ltr/lyte-ui-dropdown.css",
            "addons/@zoho/lyte-ui-component/dist/theme/compiledCSS/default/ltr/lyte-ui-tooltip.css"
        ];
    },
// getDependencies  : function (paramsObject ){ 
//         /* Files returned as dependencies will be downloaded at once and will be available before 'beforeModel' hook. */
// },
    beforeModel  : function (paramsObject ){ 
        let sessionAvailable = false;
        let cookies = document.cookie.split(";");
        for(let cookie of cookies){
            if(cookie.split("=")[0].trim()=="session"){
                sessionAvailable = true;
            }
        }
        if(!sessionAvailable){
            Lyte.Router.transitionTo("home.user.login");
        }    
    },
    model  : function (paramsObject ){ 
        store.unloadAll("products");
        $L.ajax({
            url: 'http://localhost:8080/product_project/getUserProducts.action',
            type: 'GET',
            async:true,
            xhrFields: {
                withCredentials: true
            },
            success: function (response) {
                let responseData = JSON.parse(response);
                if(responseData.validation!=null || responseData.validation!=undefined || responseData.validation==false){
                    Lyte.Router.transitionTo("home.user.login");
                }
                else if(responseData.isError==null || responseData.isError==undefined){
                    responseData.forEach(function(product){
                        store.createRecord("products",{product_id:product.product_id,product_name:product.product_name, product_price:parseInt(product.product_price), product_brand:product.product_brand, product_origin:product.product_origin});
                    })
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
        return {products:store.peekAll("products")};
    },
// afterModel  : function (model, paramsObject ){ 
//         /* Manipulating data before returning data to component. */
// },
// redirect  : function (model, paramsObject ){ 
//         /* Redirections based on data fetched. */
// },
    renderTemplate  : function (model, paramsObject ){ 
            return{outlet:"#outlet", component:"my-products"};
    },
// afterRender  : function (model, paramsObject ){ 
//         /* Post processing of rendered page. */
// },
// beforeExit  : function (model, paramsObject ){ 
//         /* Will be invoked before a route is removed from view. */
// },
// didDestroy  : function (model, paramsObject ){ 
//         /* Will be invoked when a route is completly destroyed(remove residues of route. eg: file cache removal). */
// },
// actions  : { 
//        onBeforeLoad  : function (paramsObject ){ 
//                 /* Triggered once route transition starts. */
//         },
//        onError  : function (error, pausedTrans, paramsObject ){ 
//                 /* Triggered by error on file load or on data request. */
//         },
//        willTransition  : function (transition ){ 
//                 /* Triggered before a transition is going to change. */
//         },
//        didTransition  : function (paramsObject ){ 
//                 /* Triggered after completion of transition. */
//         },
// }
});
