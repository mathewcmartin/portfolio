'use strict';


function Project (name, type, orgnaization, body, reference) {
  this.name = name;
  this.type = type;
  this.organization = organization;
  this.body = body;
  this.reference = reference;

  Project.prototype.toHtml = function() {
    var template = Handlebars.compile($('#project-template').text());

    // this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    // this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
// var busMall = new Project('Bus Mall', 'Website', 'Code Fellows', '<p><strong>Bus Mall</strong> is a hypothetical website created to demonstrate my HTML, CSS and JavaScript coding skills.', '<p>https://mathewcmartin.github.io/BusMall/</p>');
// var cookieStand = new Project('Cookie Stand', 'Website', 'Code Fellows', '<p><strong>Cookie Stand</strong> is a hypothetical website created to demonstrate my HTML, CSS and JavaScript coding skills.', '<p>https://mathewcmartin.github.io/cookie-stand/</p>');
// var aboutMe = new project('About Me', 'Website', 'Code Fellows', '<p><strong>Bus Mall</strong> is a hypothetical website created to demonstrate my HTML, CSS and JavaScript coding skills.');
// }
//

  //
  // {
  //   name:        'Bus Mall',
  //   type:        'Website',
  //   organization:  'Code Fellows',
  //   body:        '<p><strong>Bus Mall</strong> is a hypothetical website created to demonstrate my HTML, CSS and JavaScript coding skills.',
  //   reference:   '<p>https://mathewcmartin.github.io/BusMall/</p>'
  // },
  // {
  //   name:        'Cookie Stand',
  //   type:        'Website',
  //   organization:  'Code Fellows',
  //   body:        '<p><strong>Bus Mall</strong> is a hypothetical website created to demonstrate my HTML, CSS and JavaScript coding skills.',
  //   reference:  '<p>https://mathewcmartin.github.io/cookie-stand/</p>'
  // },
  // {
  //   name:        'About Me',
  //   type:        'Website',
  //   organization:  'Code Fellows',
  //   body:        '<p><strong>Bus Mall</strong> is a hypothetical website created to demonstrate my HTML, CSS and JavaScript coding skills.',
  //   reference:   '<p>https://mathewcmartin.github.io/about_me/</p>'
  // },
  // {
  //   name:         'Northshore Cloud',
  //   type:         'Website',
  //   organization:   'Kenmore Heritage Society',
  //   body:         '<p><strong>Northshore Cloud</strong> is an active website I created with WordPress and administer for the Kenmore Heritage Society, a non-profit 501c3.'
  //  reference:    '<p>http://northshorecloud.org/</p>'
  // },
  // ];
