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

