#UiRouterDemoApp#

A simple implementation of ui-router, for quick reference.

###Steps:###
1. Add a reference to the angular-ui-router.js file in index.html.

2. Add a module dependency for "ui.router" when you create the module in JavaScript.

3. Find where you want the content of the router to go in HTML and add:	

	```HTML
		<ui-view></ui-view>
	```

4. Inside a call to module(...).config(), configure states with one or more call to $stateProvider.state, passing it a state name and an object with configuration properties. Example:

	```JavaScript
	var app = angular
		.module("App", ["ui.router"])
		.config(function($stateProvider) {

			$stateProvider.state("home", {
				url: "/home",
				templateUrl: "home.html",
				controller: "homeController",
				controllerAs: "homeCtrl"
			});

			...
		});
	```

5. Wherever you are providing navigation controls, use the ui-sref attribute, rather than the href attribute (like with ngRoute) to specify the name of the state/route to navigate to.

**Remember:** A "state" corresponds to the view you want to present to the user when you select a navigation link in the application.
