var routeConfigApp = angular.module("app.routeConfig", ['ui.router']);
routeConfigApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/landing");
    $stateProvider
        .state("landing", {
            url: "/landing",
            templateUrl: "/homePage.html"
        })
        .state("home", {
            url: "/home",
            views: {
                "": { templateUrl: "/Views/home.html" },
                'content@home': { templateUrl: globalConfig.modulePaths.templatePath.home + "contentTemplate.html" }
            }

        })
        .state("myCareer", {
            url: "/mycareer",
            views: {
                "": { templateUrl: "/Views/myCareer.html" },
                'leftSection@myCareer': {
                    templateUrl: globalConfig.modulePaths.templatePath.myCareer + "navTemplate.html"
                },
                'rightSection@myCareer': {
                    templateUrl: globalConfig.modulePaths.templatePath.myCareer + "contentTemplate.html"
                }
            }

        })
        .state("hobbies", {
            url: "/hobbies",
            views: {
                "": { templateUrl: "/Views/hobbies.html" },
                'leftSection@hobbies': {
                    templateUrl: globalConfig.modulePaths.templatePath.hobbies + "navTemplate.html"
                },
                'rightSection@hobbies': {
                    templateUrl: globalConfig.modulePaths.templatePath.hobbies + "contentTemplate.html"
                }
            }

        })
        .state("achievements", {
            url: "/achievements",
            views: {
                "": { templateUrl: "/Views/achievements.html" },
                'content@achievements': { templateUrl: globalConfig.modulePaths.templatePath.achievements + "contentTemplate.html" }
            }

        })

});
