/*
Four JSONs for each resume section
Sections include: bio, education, work, projects
*/

//bio
var bio = {
    name: "mIcHaEl FeRrIs",
    role: "Consultant",
    contacts: {
        mobile: "202-555-5555",
        email: "michael@example.com",
        github: "ferristocrat",
        twitter: "@ferristocrat",
        location: "Washington, DC"
    },
    welcomeMessage: "Thanks for visiting my website!",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
    bioPic: "http://ferristocrat.com/images/michaelferris.jpg"
};

//education
var education = {
    schools: [
        {
            name: "The University of Vermont",
            location: "Burlington, VT USA",
            degree: "Bachelor of the Arts",
            majors: ["Economics", " Political Science"],
            minor: "Mathematics",
            dates: "2009-2011",
        },
        {
            name: "The London School of Economics and Political Science",
            location: "London, UK",
            degree: "General Course",
            majors: ["Government and Economics"],
            dates: "2011-2012"
        }
    ],
    onlineCourses: [
        {
            title: "Front End Web Development",
            school: "Udacity",
            dates: "2015"
        },
        {
            title: "Full Stack Web Development",
            school: "Udacity",
            dates: "2015"
        }
    ]
};

//work
var work = {
    jobs: [
        {
            employer: "Deloitte Consulting",
            title: "Business Analyst",
            dates: "August 2013 - Present",
            description: "Placeholder for description of job postion"
        }    ]
};

//projects
var projects = {
    projects: [
        {
            title: "Sample Project 1",
            dates: "March 2015",
            description: "Sample description of project",
            images: [
                "http://ferristocrat.com/images/michaelferris.png",
                "http://ferristocrat.com/images/michaelferris.png",
                "http://ferristocrat.com/images/michaelferris.png"
            ]
        }
    ]

};

/*
Function that displays bio section
*/

bio.display = function () {

    //Function that properly formats name like so: First Last
    function inName(oldName) {
        var finalName = oldName;
        var names = oldName.split(" ");
        names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
        names[1] = names[1].slice(0, 1).toUpperCase() + names[1].slice(1).toLowerCase();
        finalName = names.join(" ");
        return finalName;
    }

    //defining the role, and appending to the header
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);

    //defining the name, and appending to the header
    var formattedName = HTMLheaderName.replace("%data%", inName(bio.name));

    $("#header").prepend(formattedName);

    //defining and appending contact information to the header and footer
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);

    //defining and appending picture and welcome message
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);

    //defining skills if they exist and appending to the header
    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }
};

/*
Function that displays work section
*/
work.display = function () {

    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);
        
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

/*
Function that displays project section
*/
projects.display = function () {

    for (project in projects.projects) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImages);
            }
        }   
    }
}

/*
Function that displays school section
*/
education.display = function () {

    for (school in education.schools) {

        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameandDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameandDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);

        if (education.schools[school].minor.length > 0) {
            var formattedMinor = HTMLschoolMinor.replace("%data%", education.schools[school].minor);
            $(".education-entry:last").append(formattedMinor);
        }
    }
}

/*
Adding map
*/

$("#mapDiv:last").append(googleMap);

//Function Calls
bio.display();
work.display();
projects.display();
education.display();