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
