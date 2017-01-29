var hobbiesDataServices = function (hobbiesFactory) {
    var hobbiesDataModel = {
        navigationList: [],
       // categoriesList: []
    };
    var getNavigationsList = function () {
        hobbiesFactory.getNavigations()
            .then(function (response) {
                if (response) {
                    hobbiesDataModel.navigationList = response.data.navigationList;
                }
            }, function (error) {

            });
    };
    //var getSkillsList = function () {
    //    myCareerFactory.getSkillsListData()
    //       .then(function (response) {
    //           if (response) {
    //               myCareerDataModel.skillsList = response.data.skillsData;
    //           }
    //       }, function (error) {

    //       });
    //};
    return {
        hobbiesDataModel: hobbiesDataModel,
        getNavigationsList: getNavigationsList,
       // getSkillsList: getSkillsList
    }
}