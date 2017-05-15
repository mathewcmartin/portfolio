'use strict';

$('nav li').on('click', function() {
  var $menuIcons = $(this).data('main-nav') //gives us 'delegation' or 'attributes'
  $('.icon-menu').hide()
  //we want $('#delegation')
  $('#' + $menuIcons).fadeIn(10000)
})

//$(el).toggleClass(className);
// To toggle classes

//Add templating jQuery code
// var projects = [];
//
// function Project (projectData) {
//   this.name = projectData.name;
//   this.type = projectData.type;
//   this.organization = projectData.organization;
//   this.reference = projectData.reference;
//
// }
//
// Project.prototype.toHtml = function() {
//   var template = $('#project-template');
//   var templateQueue = Handlebars.compile(template);
//   this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
//   this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
//   return templatePlacement(this);
// };
//
// projectDataSet.sort(function(a,b) {
//   return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
// });
//
// projectDataSet.forEach(function(articleObject) {
//   projects.push(new Project(articleObject));
// });
//
// projects.forEach(function(project){
//   $('#projects').append(project.toHtml());
// });
