var hobbiesApp = angular.module("app.hobbies", []);
hobbiesApp.controller("hobbiesController", hobbiesController);
hobbiesApp.service("hobbiesDataServices", hobbiesDataServices);
hobbiesApp.factory("hobbiesFactory", hobbiesFactory);