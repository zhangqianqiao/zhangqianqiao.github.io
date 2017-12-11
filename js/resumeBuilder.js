var skills = ['javascript', 'Machine Learing', 'Deep Learing', 'Python'];
var bio = {
  "name": "Qianqiao Zhang",
  "role": "web developer",
  "contacts": {
    "mobile": "15256090622",
    "email": "zhangqianqiao@outlook.com",
    "github": "zhangqianqiao",
    "wechat": "zqqbridge",
    "location": "Shanghai"
  },
  "welcomeMessage": "welcome",
  "skills": skills,
  "biopic": "images/fry.jpg"
};

bio.display = function() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName, formattedRole);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts, #footerContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts, #footerContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts, #footerContacts").append(formattedGithub);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts, #footerContacts").append(formattedLocation);

  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedPic, HTMLskillsStart);
  var skillAppend = function(item) {
    var formattedSkill = HTMLskills.replace("%data%", item);
    $("#skills-h3").append(formattedSkill)
  }
  bio.skills.forEach(skillAppend)
};

bio.display()

var work = {
  "jobs": [
    {
      "employer": "Shanghai Multimedia Industry Association",
      "title": "Project manager",
      "icon": "iamges/location.png",
      "location": "Shanghai",
      "dates": "2014.11/2017.12",
      "description": "So my parents, who were on a waiting list, got a call in the middle of the night asking: We have an unexpected baby boy; do you want him? They said: Of course. My biological mother later found out that my mother had never graduated from college and that my father had never graduated from high school. She refused to sign the final adoption papers. She only relented a few months later when my parents promised that I would someday go to college."
    },
    {
      "employer": "Anhui Jia Yuan Electronic Commerce Limited",
      "title": "Futures trader",
      "icon": "iamges/location.png",
      "location": "Hefei",
      "dates": "2011.09/2013.12",
      "description": "So my parents, who were on a waiting list, got a call in the middle of the night asking: We have an unexpected baby boy; do you want him?They said: Of course.My biological mother later found out that my mother had never graduated from college and that my father had never graduated from high school. She refused to sign the final adoption papers. She only relented a few months later when my parents promised that I would someday go to college."
    }
  ]
};

work.display = function() {
  work.jobs.forEach(function(element){
    $("#workExperience").append(HTMLworkStart);
    var workEmployer = HTMLworkEmployer.replace("%data%", element.employer);
    var workTitle = HTMLworkTitle.replace("%data%", element.title);
    var formattedJob = workEmployer + workTitle;
    var workDates = HTMLworkDates.replace("%data%", element.dates);
    var workLocation = HTMLworkLocation.replace("%data%", element.location);
    var workDescription = HTMLworkDescription.replace("%data%", element.description);
    $(".work-entry:last").append(formattedJob, workDates, workLocation, workDescription);
  })
};
work.display()

var projects = {
  "project": [
    {
      "title": "Titanic survival exploration",
      "dates": "2017/11",
      "description": "Create a decision function and predict passenger survivor results based on passenger characteristics of the 1912 Titanic, such as gender and age. Start with a simple algorithm and then gradually increase the complexity of the algorithm until you can at least accurately predict the return of 80% of the passengers in the data provided.",
      "images": "images/titanic.jpg"
    }
 ]
};

projects.display = function() {
  projects.project.forEach(function(element) {
    $("#projects").append(HTMLprojectStart);
    var projectTile = HTMLprojectTitle.replace("%data%", element.title);
    var projectDates = HTMLprojectDates.replace("%data%", element.dates);
    var projectDescription = HTMLprojectDescription.replace("%data%", element.description);
    var projectPic = HTMLprojectImage.replace("%data%", element.images);
    $(".project-entry:last").append(projectTile, projectDates, projectDescription, projectPic);
  })
};
projects.display()

var education = {
  "schools": [
    {
      "name": "Anhui Agricultural University",
      "icon": "iamges/location.png",
      "location": "HeFei",
      "degree": "Bachelor degree",
      "majors": ["Animal Medicine"],
      "dates": "2007.09/2011.07",
      "url": "www.ahau.edu.cn"
    }
  ],
  "onlineCourses": [
    {
      "name": "Udacity",
      "icon": "iamges/location.png",
      "location": "Shanghai",
      "degree": "Professional training",
      "school": "Front-end-development, Machine Learing, Deeping Learing",
      "dates": "2017.06/2017.12",
      "url": "www.udacity.com"
    },
    {
      "name": "Sanjieke",
      "icon": "iamges/location.png",
      "location": "Beijing",
      "degree": "Professional training",
      "school": "Brand Strategy Management， Internet operation",
      "dates": "2016.06/2017.06",
      "url": "www.udacity.com"
    }
  ]
};
education.display = function() {
  $("#education").append(HTMLschoolStart);
  var schoolAppend = function(element) {
    var schoolName = HTMLschoolName.replace("%data%", element.name);
    var schoolDegree = HTMLschoolDegree.replace("%data%", element.degree);
    var formattedSchool = schoolName + schoolDegree
    var schoolDates = HTMLschoolDates.replace("%data%", element.dates);
    var schoolLocation = HTMLschoolLocation.replace("%data%", element.location);
    $(".education-entry:last").append(formattedSchool, schoolDates, schoolLocation);
    element.majors.forEach(function(item) {
      var schoolMajor = HTMLschoolMajor.replace("%data%", item);
      $(".education-entry:last").append(schoolMajor);
    })
  };
  education.schools.forEach(schoolAppend)

  $("#education").append(HTMLonlineClasses);
  var onlineAppend = function(element) {
    $("#education").append(HTMLschoolStart);
    var onlineTitle = HTMLonlineTitle.replace("%data%", element.school);
    var onlineSchool = HTMLonlineSchool.replace("%data%", element.name);
    var formattedOnlineSchool = onlineTitle + onlineSchool
    $(".education-entry:last").append(formattedOnlineSchool);
    var onlineDates = HTMLonlineDates.replace("%data%", element.dates);
    $(".education-entry:last").append(onlineDates);
    var onlineURL =  HTMLonlineURL.replace("%data%", element.url);
    $(".education-entry:last").append(onlineURL)
  };
  education.onlineCourses.forEach(onlineAppend)
};
education.display()

$("#mapDiv").append(googleMap);
function initMap() {
  var uluru = {lat: 31.41, lng: 121.48};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });

  var locations = [
      ["where I am now!", [31.41, 121.48]],
      ["Where I used to work!", [39.54, 116.23]],
      ["where I was studying!", [31.86, 117.27]]
    ];

  function createMapMarker(placeData) {
    var location = {
      lat: placeData[1][0],
      lng: placeData[1][1]
    };
    var marker = new google.maps.Marker({
      map: map,
      position: location
    });
    var infoWindow = new google.maps.InfoWindow({
      content: placeData[0]
    });
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map,marker);
    });
  }
  locations.forEach(createMapMarker);
}
