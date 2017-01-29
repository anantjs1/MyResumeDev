var hobbiesController = function ($scope, hobbiesDataServices) {
    var init = function () {
        $scope.parentScopeObject = $scope.globalObj;
        $scope.hobbiesDataModel = hobbiesDataServices.hobbiesDataModel;
        hobbiesDataServices.getNavigationsList();
        $scope.template = globalConfig.modulePaths.templatePath.hobbies +'sportsTemplate.html';
        //$scope.parentScopeObject.template="/Modules/Achievements/Templates/contentTemplate.html";
    };
    init();
    $scope.sideBarMenuClick = function (menuItem) {
        $scope.template = globalConfig.modulePaths.templatePath.hobbies + menuItem.template;

    }
};