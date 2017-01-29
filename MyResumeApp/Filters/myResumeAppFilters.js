var customFilterApp = angular.module("app.customFilter", []);
customFilterApp.filter("getStringValue", function ($sce) {
    return function (key) {
        if(globalConfig.strings[key])
        {
            //return  $sce.trustAsHtml(globalConfig.strings[key]);
            return globalConfig.strings[key];
        }
        return key;
    }
});