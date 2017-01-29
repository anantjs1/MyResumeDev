var myCareerDataService = function (myCareerFactory) {
    var myCareerDataModel = {
        navigationList: [],
        skillsList: []
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
           .success(function (response) {
               if (response) {
                   myCareerDataModel.skillsList = response.data.skillsData;
               }
           });
    };
    return {
        myCareerDataModel: myCareerDataModel,
        getNavigationsList: getNavigationsList,
        getSkillsList: getSkillsList
    }
}