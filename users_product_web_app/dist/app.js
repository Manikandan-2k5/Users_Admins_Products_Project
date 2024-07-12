Lyte.Router.configureRoutes(function(){
	this.route("home",function(){
		this.route("user",{path :"/user"},function(){
			this.route("login",{path :"/login"});
			this.route("signup",{path :"/signup"});
			this.route("main",{path :"/main"});
			this.route("my_products");
		});
		this.route("admin",{path :"/admin"},function(){
			this.route("login",{path :"/login"});
			this.route("main",{path :"/main"});
		});
	});
});

Lyte.Router.beforeRouteTransition = function() {
	//console.log('before Route Change');
}

Lyte.Router.afterRouteTransition = function() {
	//console.log('after Route Change');
}


Lyte.Router.registerRoute("home",{
	getResources  : function (paramsObject ){ 
		return [];
	},
// getDependencies  : function (paramsObject ){ 
//         /* Files returned as dependencies will be downloaded at once and will be available before 'beforeModel' hook. */
// },
// beforeModel  : function (paramsObject ){ 
//         /* Pre processing stage where you can decide whether to abort/redirect the current transition(e.g Permission check). */
// },
// model  : function (paramsObject ){ 
//         /* Initiate data request that are necessary for the current page. */
// },
// afterModel  : function (model, paramsObject ){ 
//         /* Manipulating data before returning data to component. */
// },
// redirect  : function (model, paramsObject ){ 
//         /* Redirections based on data fetched. */
// },
    renderTemplate  : function (model, paramsObject ){ 
        return {outlet:"#outlet", component:"home-portal"};
    }
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

Lyte.Router.registerRoute('index',{
// 	getResources  : function (paramsObject ){ 
//         /* View related files should be returned as resources(HTML, CSS, components etc). It will be available before 'renderTemplate' hook. */
// },
// getDependencies  : function (paramsObject ){ 
//         /* Files returned as dependencies will be downloaded at once and will be available before 'beforeModel' hook. */
// },
// beforeModel  : function (paramsObject ){ 
//         /* Pre processing stage where you can decide whether to abort/redirect the current transition(e.g Permission check). */
// },
	model : function()	{
		return {
			features : [
				{module : 'Router',url : 'http://lyte/2.0/doc/route/introduction'},
				{module : 'Components',url : 'http://lyte/2.0/doc/components/introduction'},
				{module : 'Data',url : 'http://lyte/2.0/doc/data/introduction'},
				{module : 'CLI',url : 'http://lyte/2.0/doc/cli/introduction'}
			]
		}
				
	},
// afterModel  : function (model, paramsObject ){ 
//         /* Manipulating data before returning data to component. */
// },
// redirect  : function (model, paramsObject ){ 
//         /* Redirections based on data fetched. */
// },
	renderTemplate : function()	{
		return {outlet : "#outlet",component : "welcome-comp"}
	}
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

Lyte.Router.registerRoute("home.admin",{
// 	getResources  : function (paramsObject ){ 
//         /* View related files should be returned as resources(HTML, CSS, components etc). It will be available before 'renderTemplate' hook. */
// },
// getDependencies  : function (paramsObject ){ 
//         /* Files returned as dependencies will be downloaded at once and will be available before 'beforeModel' hook. */
// },
// beforeModel  : function (paramsObject ){ 
//         /* Pre processing stage where you can decide whether to abort/redirect the current transition(e.g Permission check). */
// },
    model  : function (paramsObject ){ 
        return {
            urls: [
                {modulename:"LOGIN", url:"/#/home/admin/login"}
            ]
        }
    },
// afterModel  : function (model, paramsObject ){ 
//         /* Manipulating data before returning data to component. */
// },
// redirect  : function (model, paramsObject ){ 
//         /* Redirections based on data fetched. */
// },
    renderTemplate  : function (model, paramsObject ){ 
        return {outlet:"#outlet", component:"admin-portal"};
    }
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

Lyte.Router.registerRoute("home.user",{
// 	getResources  : function (paramsObject ){ 
//         /* View related files should be returned as resources(HTML, CSS, components etc). It will be available before 'renderTemplate' hook. */
// },
// getDependencies  : function (paramsObject ){ 
//         /* Files returned as dependencies will be downloaded at once and will be available before 'beforeModel' hook. */
// },
    model  : function (paramsObject){ 
        return {
            urls: [
                {modulename:"LOGIN", url:"/#/home/user/login"},
                {modulename:"SIGNUP", url:"/#/home/user/signup"}
            ]
        }
    },
// afterModel  : function (model, paramsObject ){ 
//         /* Manipulating data before returning data to component. */
// },
// redirect  : function (model, paramsObject ){ 
//         /* Redirections based on data fetched. */
// },
    renderTemplate  : function (model, paramsObject ){ 
        return {outlet:"#outlet", component:"user-portal"};
    }
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

Lyte.Router.registerRoute("home.user.login",{
	getResources  : function (paramsObject ){ 
        return [
            "addons/@zoho/lyte-ui-component/dist/components/lyte-input.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-button.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-alert.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-wormhole.js",
            "addons/@zoho/lyte-ui-component/dist/theme/compiledCSS/default/ltr/lyte-ui-input.css",
            "addons/@zoho/lyte-ui-component/dist/theme/compiledCSS/default/ltr/lyte-ui-button.css",
            "addons/@zoho/lyte-ui-component/dist/theme/compiledCSS/default/ltr/lyte-ui-alert.css"
        ];
    },
// getDependencies  : function (paramsObject ){ 
//         /* Files returned as dependencies will be downloaded at once and will be available before 'beforeModel' hook. */
// },
    beforeModel:function(paramsObject){
        $L.ajax({
            url: 'http://localhost:8080/product_project/beforeLogin.action',
            type: 'GET',
            contentType:"application/json",
            xhrFields: {
                withCredentials: true
            },
            success: function (response) {
                if(JSON.parse(response).user_type=="USER"){
                    Lyte.Router.transitionTo("home.user.main");
                }
                else if(JSON.parse(response).user_type=="ADMIN"){
                    Lyte.Router.transitionTo("home.admin.main");
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        })
    },
// model  : function (paramsObject ){ 
//         /* Initiate data request that are necessary for the current page. */
// },
// afterModel  : function (model, paramsObject ){ 
//         /* Manipulating data before returning data to component. */
// },
// redirect  : function (model, paramsObject ){ 
//         /* Redirections based on data fetched. */
// },
    renderTemplate  : function (model, paramsObject ){ 
        return {outlet:"#outlet", component:"user-login-portal"};
    }
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

Lyte.Router.registerRoute("home.user.main",{
	getResources  : function (paramsObject ){ 
        return [
            "addons/@zoho/lyte-ui-component/dist/components/lyte-input.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-button.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-search.js",
            "addons/@zoho/lyte-ui-component/dist/plugins/lyte-search.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-tooltip.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-dropdown.js",
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
        return {products:store.peekAll("products")};
    },
// afterModel  : function (model, paramsObject ){ 
//         /* Manipulating data before returning data to component. */
// },
// redirect  : function (model, paramsObject ){ 
//         /* Redirections based on data fetched. */
// },
    renderTemplate  : function (model, paramsObject ){ 
        return {outlet:"#outlet", component:"user-main-portal"};
    }
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

Lyte.Router.registerRoute("home.user.signup",{
    getResources  : function (paramsObject ){ 
        return [
            "addons/@zoho/lyte-ui-component/dist/components/lyte-input.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-button.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-alert.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-wormhole.js",
            "addons/@zoho/lyte-ui-component/dist/theme/compiledCSS/default/ltr/lyte-ui-input.css",
            "addons/@zoho/lyte-ui-component/dist/theme/compiledCSS/default/ltr/lyte-ui-button.css",
            "addons/@zoho/lyte-ui-component/dist/theme/compiledCSS/default/ltr/lyte-ui-alert.css"
        ];
    },
// getDependencies  : function (paramsObject ){ 
//         /* Files returned as dependencies will be downloaded at once and will be available before 'beforeModel' hook. */
// },
// beforeModel  : function (paramsObject ){ 
//         /* Pre processing stage where you can decide whether to abort/redirect the current transition(e.g Permission check). */
// },
// model  : function (paramsObject ){ 
//         /* Initiate data request that are necessary for the current page. */
// },
// afterModel  : function (model, paramsObject ){ 
//         /* Manipulating data before returning data to component. */
// },
// redirect  : function (model, paramsObject ){ 
//         /* Redirections based on data fetched. */
// },
    renderTemplate  : function (model, paramsObject ){ 
        return {outlet:"#outlet", component:"user-signup-portal"};
    }
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

Lyte.Router.registerRoute("home.admin.login",{
	getResources  : function (paramsObject ){ 
        return  [
            "addons/@zoho/lyte-ui-component/dist/components/lyte-input.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-button.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-alert.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-wormhole.js",
            "addons/@zoho/lyte-ui-component/dist/theme/compiledCSS/default/ltr/lyte-ui-input.css",
            "addons/@zoho/lyte-ui-component/dist/theme/compiledCSS/default/ltr/lyte-ui-button.css",
            "addons/@zoho/lyte-ui-component/dist/theme/compiledCSS/default/ltr/lyte-ui-alert.css"
        ];
    },
// getDependencies  : function (paramsObject ){ 
//         /* Files returned as dependencies will be downloaded at once and will be available before 'beforeModel' hook. */
// },
    beforeModel  : function (paramsObject ){ 
        $L.ajax({
            url: 'http://localhost:8080/product_project/beforeLogin.action',
            type: 'GET',
            contentType:"application/json",
            xhrFields: {
                withCredentials: true
            },
            success: function (response) {
                if(JSON.parse(response).user_type=="USER"){
                    Lyte.Router.transitionTo("home.user.main");
                }
                else if(JSON.parse(response).user_type=="ADMIN"){
                    Lyte.Router.transitionTo("home.admin.main");
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        })
    },
// model  : function (paramsObject ){ 
//         /* Initiate data request that are necessary for the current page. */
// },
// afterModel  : function (model, paramsObject ){ 
//         /* Manipulating data before returning data to component. */
// },
// redirect  : function (model, paramsObject ){ 
//         /* Redirections based on data fetched. */
// },
    renderTemplate  : function (model, paramsObject ){ 
        return {outlet:"#outlet", component:"admin-login-portal"};
    }
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

Lyte.Router.registerRoute("home.admin.main",{
	getResources  : function (paramsObject ){ 
        return [
            "addons/@zoho/lyte-ui-component/dist/components/lyte-input.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-button.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-search.js",
            "addons/@zoho/lyte-ui-component/dist/plugins/lyte-search.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-tooltip.js",
            "addons/@zoho/lyte-ui-component/dist/components/lyte-dropdown.js",
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
            Lyte.Router.transitionTo("home.admin.login");
        }
    },
    model  : async function (paramsObject ){ 
        $L.ajax({
            url: 'http://localhost:8080/product_project/getRequestedUsers.action',
            type: 'GET',
            xhrFields: {
                withCredentials: true
            },
            success: function (response) {
                let responseData = JSON.parse(response);
                if(responseData.validation!=null || responseData.validation!=undefined || responseData.validation==false){
                    Lyte.Router.transitionTo("home.admin.login");
                }
                else if(responseData.Statement==null || responseData.Statement==undefined){
                    store.unloadAll("requestedUsers");
                    responseData.forEach(function(request){
                        store.createRecord("requestedUsers", {name:request.name, email:request.email, phone_no:request.phone_no, password:request.password});
                    });
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
        return {requests:store.peekAll("requestedUsers")};
    },
// afterModel  : function (model, paramsObject ){ 
//         /* Manipulating data before returning data to component. */
// },
// redirect  : function (model, paramsObject ){ 
//         /* Redirections based on data fetched. */
// },
    renderTemplate  : function (model, paramsObject ){ 
        return {outlet:"#outlet", component:"admin-main-portal"};
    },
// afterRender  : function (model, paramsObject ){ 
//         /* Post processing of rendered page. */
// },
// beforeExit  : function (model, paramsObject ){ 
//         /* Will be invoked before a route is removed from view. */
// },
    didDestroy  : function (model, paramsObject ){ 
        store.unloadAll("requestedUsers");
    },
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

Lyte.Component.register("admin-login-portal", {
_template:"<template tag-name=\"admin-login-portal\"> <lyte-input id=\"mail\" name=\"mail\" lt-prop-label=\"Mail\" lt-prop-placeholder=\"Enter Mail\"></lyte-input> <lyte-input id=\"password\" name=\"password\" lt-prop-label=\"Password\" lt-prop-placeholder=\"Enter Password\"></lyte-input> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('login')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Login </template> </lyte-button> <lyte-alert lt-prop-heading=\"\" lt-prop-primary-message=\"\" lt-prop-type=\"warning\" id=\"admin_login_alert\"></lyte-alert> </template>",
_dynamicNodes : [{"type":"componentDynamic","position":[1]},{"type":"componentDynamic","position":[3]},{"type":"attr","position":[5]},{"type":"registerYield","position":[5,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[5]},{"type":"componentDynamic","position":[7]}],
_observedAttributes :["urls","mail","password","admin_login_alert"],

	data : function(){
		return {
			urls:Lyte.attr("array"),
			mail:Lyte.attr("string"),
			password:Lyte.attr("string"),
			admin_login_alert:Lyte.attr("object")
		}		
	},
	actions : {
		login : function(){
			this.executeMethod('isAdmin');
		}
	},
	methods : {
		isAdmin : async function(){
			$L.ajax({
				url: 'http://localhost:8080/product_project/adminLogin.action',
				type: 'POST',
				contentType:"application/json",
				data:JSON.stringify({email:mail.ltProp("value"), password:password.ltProp("value")}),
				xhrFields: {
					withCredentials: true
				},
				success: function (response) {
					if(JSON.parse(response).logged_in){
						Lyte.Router.transitionTo("home.admin.main");
					}
					else{
						admin_login_alert.ltProp("heading", "Authentication Failed");
						admin_login_alert.ltProp("primaryMessage", "Your credentials are wrong.");
						admin_login_alert.ltProp("show", "true");
					}
				},
				error: function (xhr, status, error) {
					console.error(xhr.responseText);
				}
			})
		}
	}
});

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

Lyte.Component.register("admin-portal", {
_template:"<template tag-name=\"admin-portal\"> <template items=\"{{urls}}\" item=\"url\" index=\"index\" is=\"for\"><div> <a href=\"{{url.url}}\">{{url.modulename}}</a> </div></template> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"for","position":[1],"dynamicNodes":[{"type":"attr","position":[0,1]},{"type":"text","position":[0,1,0]}]}],
_observedAttributes :["urls"],

	data : function(){
		return {
			urls:Lyte.attr("array")
		}		
	},
	actions : {
		// Functions for event handling
	},
	methods : {
		// Functions which can be used as callback in the component.
	}
});

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

Lyte.Component.register("home-portal", {
_template:"<template tag-name=\"home-portal\"> <a href=\"/#/home/admin\">ADMIN</a> <a href=\"/#/home/user\">USER</a> </template>",
_dynamicNodes : [],
_observedAttributes :["someArray"],

	data : function(){
		return {
      				someArray : Lyte.attr ( 'array' , { default : [{ name : "New File ..." , key : "Ctrl + N" }, { name : "Open File...." , key : 'Ctrl + O' }] })
      		};
      				
	},
	actions : {
		// Functions for event handling
	},
	methods : {
		// Functions which can be used as callback in the component.
	}
});

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

Lyte.Component.register("user-login-portal", {
_template:"<template tag-name=\"user-login-portal\"> <section> <lyte-input id=\"mail\" name=\"mail\" lt-prop-label=\"Mail\" lt-prop-placeholder=\"Enter Mail\"></lyte-input> <lyte-input id=\"password\" name=\"password\" lt-prop-label=\"Password\" lt-prop-placeholder=\"Enter Password\"></lyte-input> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('login')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Login </template> </lyte-button> </section> <lyte-alert lt-prop-type=\"warning\" id=\"user_login_alert\"></lyte-alert> </template>",
_dynamicNodes : [{"type":"componentDynamic","position":[1,1]},{"type":"componentDynamic","position":[1,3]},{"type":"attr","position":[1,5]},{"type":"registerYield","position":[1,5,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,5]},{"type":"componentDynamic","position":[3]}],
_observedAttributes :["mail","password","user_login_alert"],

	data : function(){
		return {
			mail:Lyte.attr("string"),
			password:Lyte.attr("string"),
			user_login_alert:Lyte.attr("object")
		}		
	},
	actions : {
		login: function(){
			this.executeMethod("isUser");
		}
	},
	methods : {
		isUser : async function(){
			$L.ajax({
				url: 'http://localhost:8080/product_project/userLogin.action',
				type: 'POST',
				contentType:"application/json",
				data:JSON.stringify({email:mail.ltProp("value"), password:password.ltProp("value")}),
				xhrFields: {
					withCredentials: true
				},
				success: function (response) {
					if(JSON.parse(response).logged_in){
						Lyte.Router.transitionTo("home.user.main");
					}
					else{
						user_login_alert.ltProp("heading", "Authentication Failed");
						user_login_alert.ltProp("primaryMessage", "Your credentials are wrong.");
						user_login_alert.ltProp("show","true");
					}
				},
				error: function (xhr, status, error) {
					console.error(xhr.responseText);
				}
			})
		}
	}
});

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

Lyte.Component.register("user-portal", {
_template:"<template tag-name=\"user-portal\"> <template items=\"{{urls}}\" item=\"url\" index=\"index\" is=\"for\"><div> <a href=\"{{url.url}}\">{{url.modulename}}</a> </div></template> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"for","position":[1],"dynamicNodes":[{"type":"attr","position":[0,1]},{"type":"text","position":[0,1,0]}]}],
_observedAttributes :["urls"],

	data : function(){
		return {
			urls:Lyte.attr("array")
		}		
	},
	actions : {
		// Functions for event handling
	},
	methods : {
		// Functions which can be used as callback in the component.
	}
});

Lyte.Component.register("user-signup-portal", {
_template:"<template tag-name=\"user-signup-portal\"> <section> <lyte-input id=\"username\" name=\"username\" lt-prop-label=\"Name\" lt-prop-placeholder=\"Enter Name\"></lyte-input> <lyte-input id=\"phone\" name=\"phone\" lt-prop-label=\"Phone No\" lt-prop-placeholder=\"Enter Phone No\"></lyte-input> <lyte-input id=\"mail\" name=\"mail\" lt-prop-label=\"Mail\" lt-prop-placeholder=\"Enter Mail\"></lyte-input> <lyte-input id=\"password\" name=\"password\" lt-prop-label=\"Password\" lt-prop-placeholder=\"Enter Password\"></lyte-input> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action('addRequest')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Request Approval </template> </lyte-button> </section> <lyte-alert lt-prop-type=\"warning\" id=\"signup_alert\"></lyte-alert> </template>",
_dynamicNodes : [{"type":"componentDynamic","position":[1,1]},{"type":"componentDynamic","position":[1,3]},{"type":"componentDynamic","position":[1,5]},{"type":"componentDynamic","position":[1,7]},{"type":"attr","position":[1,9]},{"type":"registerYield","position":[1,9,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,9]},{"type":"componentDynamic","position":[3]}],
_observedAttributes :["username","phone","mail","password","signup_alert"],

	data : function(){
		return {
			username:Lyte.attr("object"),
			phone:Lyte.attr("object"),
			mail:Lyte.attr("object"),
			password:Lyte.attr("object"),
			signup_alert:Lyte.attr("object")
		}		
	},
	actions : {
		addRequest:function(){
			let record = store.createRecord("requestedUsers", {name:username.ltProp("value"), phone_no:phone.ltProp("value"), email:mail.ltProp("value"), password:password.ltProp("value")});
			if(record.$.isError){
				console.log
				let errorField = (Object.keys(record.$.error)[0]);
				let errorMessage = record.$.error[(Object.keys(record.$.error)[0])].message;
				signup_alert.ltProp("heading", errorField.toUpperCase());
				signup_alert.ltProp("primaryMessage", errorMessage);
				signup_alert.ltProp("show", "true");
			}
			else{
				this.executeMethod("addRequestInDB");
			}
		}
	},
	methods : {
		addRequestInDB: async function(){
			 let response = await fetch("http://127.0.0.1:8080/product_project/registerUserRequest.action",
			{
				method:"POST", 
				headers:{"Accept":"application/json", "Content-Type":"application/json"}, 
				body:JSON.stringify({name:username.ltProp("value"), phone_no:phone.ltProp("value"), email:mail.ltProp("value"), password:password.ltProp("value")})
			});	
			let responseData = await response.json();
			if(responseData.requestRegistered){
				signup_alert.ltProp("type", "success");
				signup_alert.ltProp("heading","Registration Successful");
				signup_alert.ltProp("primaryMessage","Your Account is waiting for Approval");
				signup_alert.ltProp("show", "true");
			}
			else{
				signup_alert.ltProp("type", "warning");
				signup_alert.ltProp("heading","Registration Failed");
				signup_alert.ltProp("primaryMessage",responseData.error);
				signup_alert.ltProp("show", "true");
			}
			this.executeMethod("clearFields");
		},
		clearFields:function(){
			username.ltProp("value", "")
			phone.ltProp("value", "")
			mail.ltProp("value", "")
			password.ltProp("value", "")
		}
	}
});

Lyte.Component.register("welcome-comp",{
_template:"<template tag-name=\"welcome-comp\"> <h1>Available features of LYTE</h1> <ul> <template items=\"{{features}}\" item=\"item\" index=\"index\" is=\"for\"><li> <a href=\"{{item.url}}\" target=\"_blank\">{{item.module}}</a> </li></template> </ul> </template>",
_dynamicNodes : [{"type":"attr","position":[3,1]},{"type":"for","position":[3,1],"dynamicNodes":[{"type":"attr","position":[0,1]},{"type":"text","position":[0,1,0]}]}],
_observedAttributes :["features"],

	data : function(){
		return {
			features : Lyte.attr("array")
		}
	},
	actions : {
		// Functions for event handling
	},
	methods : {
		// Functions which can be used as callback in the component.
	}
});

store.registerModel("admins",{
    name:Lyte.attr("string",{mandatory:true, minLength:1}),
    phone_no:Lyte.attr("string",{mandatory:true, minLength:10, maxLength:11}),
    email:Lyte.attr("string",{mandatory:true, minLength:5}),
    password:Lyte.attr("string",{mandatory:true, minLength:5})
});

store.registerModel("products",{
    product_id:Lyte.attr("string", { primaryKey : true }),
    product_name:Lyte.attr("string", {minLength:5, mandatory:true}),
    product_price:Lyte.attr("number", {mandatory:true, minimum:1}),
    product_brand:Lyte.attr("string", {minLength:2, mandatory:true}),
    product_origin:Lyte.attr("string", {minLength:2, mandatory:true})
});

store.registerModel("requestedUsers",{
    name:Lyte.attr("string",{mandatory:true, minLength:1}),
    phone_no:Lyte.attr("string",{mandatory:true, minLength:10, maxLength:11}),
    email:Lyte.attr("string",{mandatory:true, minLength:5}),
    password:Lyte.attr("string",{mandatory:true, minLength:5})
});

store.registerModel("users",{
    name:Lyte.attr("string",{mandatory:true, minLength:1}),
    phone_no:Lyte.attr("string",{mandatory:true, minLength:10, maxLength:11}),
    email:Lyte.attr("string",{mandatory:true, minLength:5}),
    password:Lyte.attr("string",{mandatory:true, minLength:5})
});
