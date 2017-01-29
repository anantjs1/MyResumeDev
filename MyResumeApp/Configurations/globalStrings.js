var globalConfig = (function (parent, $) {
    parent.strings = parent.strings || {};
    var strings = {
        Home: "Personal Details",
        MyCareer: "My Career",
        Hobbies: "Hobbies",
        Achievements: "Achievements",
        Summary: "<ul class='summaryList'><li >4 Years of Technical experience in Microsoft .Net Technology</li><li>Hands on development experience in client side framework like Angular js</li><li>Experience in IIS, XML , AJAX, JSON</li><li>Experienced in ASP.NET MVC 4 and Web API</li><li>Ability to learn & develop using new technologies</li><li>Good experience in development of applications using .NET and Web technologies like XML, JSON, Ajax, JavaScript, Knockout and HTML in n-tier architecture</li><li>Good Knowledge in SQL Server database concepts and Fair amount of experience in writing SQL Stored Procedures.</li></ul>",
        "Project Summary": "Project Summary",
        "Career Summary": "Career Summary",
        "Technical Skills": "Technical Skills",
        "Work Experience": "Work Experience",
        "Academic": "Academic",
        "RolesResponsibilities": "Responsibilities",
        "EmploymentType": "Employment Type",
        "ProjectLocation": "Project Location",
        "ProjectName": "Project Name"

    }
    $.extend(parent.strings, strings);

    return parent;

})(globalConfig || {}, jQuery);