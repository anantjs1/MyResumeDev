//This is the main module app
var myResumeApp = angular.module("myResumeApp", ["app.routeConfig", "ngSanitize", "app.customFilter", "app.myCareer", "app.home", "app.achievements", "app.hobbies"]);
myResumeApp.service("globalConstants", globalConstants);
myResumeApp.controller("myResumeAppController", myResumeAppController); highChartDirective
myResumeApp.directive("hcPieChart", highChartDirective);