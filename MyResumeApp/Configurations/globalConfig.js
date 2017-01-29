var globalConfig = (function (parent, $) {
    var basePath = "/";
    parent.modulePaths = parent.modulePaths || {};
    var modulePaths = {
        templatePath: {
            home: basePath + "Modules/Home/Templates/",
            myCareer: basePath + "Modules/MyCareer/Templates/",
            hobbies: basePath + "Modules/Hobbies/Templates/",
            achievements: basePath + "Modules/Achievements/Templates/"
        },
        dataPath: {
            home: basePath + "Modules/Home/Data/",
            myCareer: basePath + "Modules/MyCareer/Data/",
            hobbies: basePath + "Modules/Hobbies/Data/",
            achievements: basePath + "Modules/Achievements/Data/"
        }
    }
    $.extend(parent.modulePaths, modulePaths);

    return parent;

})(globalConfig || {}, jQuery);