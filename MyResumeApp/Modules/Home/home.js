var homeApp = angular.module("app.home", []);
homeApp.factory("personalDetailsFactory", personalDetailsFactory);
homeApp.factory("personalDetailsDataService", personalDetailsDataService);
homeApp.controller("homeController", homeController);