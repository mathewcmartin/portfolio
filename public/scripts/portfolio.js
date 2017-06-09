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

function requestJSON(url, callback) {
  $.ajax({
    url: url,
    complete: function(xhr) {
      callback.call(null, xhr.responseJSON);
    }
  });
}

$(function(){
  $('#ghsubmitbtn').on('click', function(e){
    e.preventDefault();
    $('#ghapidata').html('<div id="loader"><img src="css/loader.gif" alt="loading..."></div>');

    var username = $('#ghusername').val();
    var requri   = 'https://api.github.com/users/'+username;
    var repouri  = 'https://api.github.com/users/'+username+'/repos';

    requestJSON(requri, function(json) {

      if(json.message == "Not Found" || username == '') {
        $('#ghapidata').html("<h2>No User Info Found</h2>");
      }

      else {
        var fullname   = json.name;
        var username   = json.login;
        var aviurl     = json.avatar_url;
        var profileurl = json.html_url;
        var location   = json.location;
        var followersnum = json.followers;
        var followingnum = json.following;
        var reposnum     = json.public_repos;

        if(fullname == undefined) { fullname = username; }

        var outhtml = '<h2>'+fullname+' <span class="smallname">(@<a href="'+profileurl+'" target="_blank">'+username+'</a>)</span></h2>';
        outhtml = outhtml + '<div class="ghcontent"><div class="avi"><a href="'+profileurl+'" target="_blank"><img src="'+aviurl+'" width="80" height="80" alt="'+username+'"></a></div>';
        outhtml = outhtml + '<p>Followers: '+followersnum+' - Following: '+followingnum+'<br>Repos: '+reposnum+'</p></div>';
        outhtml = outhtml + '<div class="repolist clearfix">';

        var repositories;
        $.getJSON(repouri, function(json){
          repositories = json;
          outputPageContent();
        });

        function outputPageContent() {
          if(repositories.length == 0) { outhtml = outhtml + '<p>No repos!</p></div>'; }
          else {
            outhtml = outhtml + '<p><strong>Repos List:</strong></p> <ul>';
            $.each(repositories, function(index) {
              outhtml = outhtml + '<li><a href="'+repositories[index].html_url+'" target="_blank">'+repositories[index].name + '</a></li>';
            });
            outhtml = outhtml + '</ul></div>';
          }
          $('#ghapidata').html(outhtml);
        } // end outputPageContent()
      } // end else statement
    }); // end requestJSON Ajax call
  }); // end click event handler
  
