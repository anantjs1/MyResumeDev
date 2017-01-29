var personalDetailsFactory = function ($http, globalConstants) {
    var serviceObject = {};
    serviceObject.getDetails = function () {
        var url = globalConfig.modulePaths.dataPath.home + 'personalDetailsData.js';
        return $http.get(url);
    };
    return serviceObject;   
}