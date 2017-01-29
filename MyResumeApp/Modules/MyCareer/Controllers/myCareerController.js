var myCareerController = function ($scope, myCareerDataService, globalConstants) {
    var self = this;
    var init = function () {
        $scope.template = "";
        $scope.parentScopeObject = $scope.globalObj;
        $scope.myCareerDataModel = myCareerDataService.myCareerDataModel;
        myCareerDataService.getNavigationsList();
        myCareerDataService.getSkillsList();
        $scope.template = globalConfig.modulePaths.templatePath.myCareer + "careerSummary.html";
        $scope.activeMenuIndex = 0;
        self.scope = $scope;
    };
    init();
    $scope.sideBarMenuClick = function (item, index) {
        $scope.template = globalConfig.modulePaths.templatePath.myCareer + item.template;
        $scope.activeMenuIndex = index;
        switch (item.id) {
            case "careerSummary":
                myCareerDataService.getSkillsList();
                break;
            case "techskills":
                break;
            case "experience":
                myCareerDataService.getWorkExperienceData();
                break;
            case "projectSummary":
                myCareerDataService.getProjectSummaryData();
                break;
            case "academic":
                myCareerDataService.getEducationData();
                break;
        }
    };
};