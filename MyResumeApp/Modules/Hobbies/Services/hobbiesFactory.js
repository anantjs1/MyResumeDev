var hobbiesFactory = function ($http) {
    var serviceObject = {};
    serviceObject.getNavigations = function () {
        //var url = globalConstants.modules.dataPath.myCareer + 'myCareerNavigationList.js';
        var url = globalConfig.modulePaths.dataPath.hobbies + 'hobbiesNavigationList.js';

        return $http.get(url);
    };
    //serviceObject.getSkillsListData = function () {
    //    //var url = globalConstants.modules.dataPath.myCareer + 'myCareerSkillsData.js';
    //    var url = globalConfig.modulePaths.dataPath.myCareer + 'myCareerSkillsData.js';
    //    return $http.get(url);
    //};

    return serviceObject;
}