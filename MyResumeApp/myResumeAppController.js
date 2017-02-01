var myResumeAppController = function ($scope) {
    var init = function () {
        $scope.headerNavText = globalConfig.strings.Home;
        //$scope.mainMenuIndex = 0;
    };
    init();
    $scope.mainMenuClick = function (menuText,menuIndex) {
        $scope.headerNavText = menuText;
        $scope.mainMenuIndex = menuIndex;
    }
};