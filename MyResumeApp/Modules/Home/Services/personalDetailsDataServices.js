var personalDetailsDataService = ["personalDetailsFactory", function (personalDetailsFactory) {
    //var myInjector = angular.injector(["app.myCareer"]);
    //var myCareerFactory = myInjector.get("myCareerFactory");
    var self = this;
    var personalDetailsDataModel = {
        model: {}
    };
    var getDetails = function () {
        personalDetailsFactory.getDetails()
            .success(function (response) {
                if (response) {
                    personalDetailsDataModel.model = response;
                }
            }, function (error) {
            });
    };
    return {
        personalDetailsDataModel:personalDetailsDataModel,
        getDetails: getDetails
    }
}];