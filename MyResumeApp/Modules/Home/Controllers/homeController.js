var homeController = function ($scope, personalDetailsDataService) {
    var init = function () {
        $scope.personalDetailsDataModel = personalDetailsDataService.personalDetailsDataModel;
        personalDetailsDataService.getDetails();
    };
    init();
};