'use strict';

var projects = [];

function Project (projectData) {
  this.name = projectData.name;
  this.type = projectData.type;
  this.organization = projectData.organization;
  this.body = projectData.body;
  this.reference = projectData.reference;
}

$('nav li').on('click', function() {
  var $menuIcons = $(this).data('main-nav');
  $('.icon-menu').hide();
  $('#' + $menuIcons).fadeIn(10000);
})

$('icon-menu').toggleClass('icon-menu');
// Add templating jQuery code

Project.prototype.toHtml = function() {
  var template = $('#project-template').html();
  var templateQueue = Handlebars.compile(template);

  return templateQueue(this);
};


projectData.forEach(function(portfolioObject) {
  projects.push(new Project(portfolioObject));
});

projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});
