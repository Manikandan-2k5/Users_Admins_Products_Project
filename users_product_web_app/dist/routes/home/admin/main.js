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
