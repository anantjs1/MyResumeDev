var myCareerDataService = ["myCareerFactory", function (myCareerFactory) {
    //var myInjector = angular.injector(["app.myCareer"]);
    //var myCareerFactory = myInjector.get("myCareerFactory");
    var self = this;
    var myCareerDataModel = {
        navigationList: [],
        skillsList: [],
        workExperienceList: [],
        educationDetailsList: [],
        projectSummaryList:[]
    };
    var getNavigationsList = function () {
        myCareerFactory.getNavigations()
            .then(function (response) {
                if (response) {
                    myCareerDataModel.navigationList = response.data.navigationList;
                }
            }, function (error) {

            });
    };
    var getSkillsList = function () {
        myCareerFactory.getSkillsListData()
           .then(function (response) {
               if (response) {
                   myCareerDataModel.skillsList = response.data.skillsData;
               }
           }, function (error) {

           });
    };
    var getWorkExperienceData = function () {
        myCareerFactory.getWorkExperienceData()
           .success(function (response) {
               if (response) {
                   myCareerDataModel.workExperienceList = response.myWorkExperienceData;
               }
           });
    };
    var getEducationData = function () {
        myCareerFactory.getEducationData()
           .success(function (response) {
               if (response) {
                   myCareerDataModel.educationDetailsList = response.educationData;
               }
           });
    };

    var getProjectSummaryData = function () {
        myCareerFactory.getProjectSummaryData()
           .success(function (response) {
               if (response) {
                   myCareerDataModel.projectSummaryList = response.projectSummaryData;
               }
           });
    };
    return {
        myCareerDataModel: myCareerDataModel,
        getNavigationsList: getNavigationsList,
        getSkillsList: getSkillsList,
        getWorkExperienceData: getWorkExperienceData,
        getEducationData: getEducationData,
        getProjectSummaryData: getProjectSummaryData
    }
}];