﻿var myCareerFactory = function ($http, globalConstants) {
    var serviceObject = {};
    serviceObject.getNavigations = function () {
        //var url = globalConstants.modules.dataPath.myCareer + 'myCareerNavigationList.js';
        var url = globalConfig.modulePaths.dataPath.myCareer + 'myCareerNavigationList.js';

        return $http.get(url);
    };

    serviceObject.getSkillsListData = function () {
        //var url = globalConstants.modules.dataPath.myCareer + 'myCareerSkillsData.js';
        var url = globalConfig.modulePaths.dataPath.myCareer + 'myCareerSkillsData.js';
        return $http.get(url);
    };

    serviceObject.getWorkExperienceData = function () {
        //var url = globalConstants.modules.dataPath.myCareer + 'myCareerSkillsData.js';
        var url = globalConfig.modulePaths.dataPath.myCareer + 'myCareerWorkExperience.js';
        return $http.get(url);
    };

    serviceObject.getEducationData = function () {
        //var url = globalConstants.modules.dataPath.myCareer + 'myCareerSkillsData.js';
        var url = globalConfig.modulePaths.dataPath.myCareer + 'myCareerEducationData.js';
        return $http.get(url);
    };

    serviceObject.getProjectSummaryData = function () {
        //var url = globalConstants.modules.dataPath.myCareer + 'myCareerSkillsData.js';
        var url = globalConfig.modulePaths.dataPath.myCareer + 'myCareerProjectSummaryData.js';
        return $http.get(url);
    };

    return serviceObject;
}