$(document).ready(function(){
  fetchIdeas()
})

function fetchIdeas(){
  $.ajax({
        url: "/api/v1/ideas",
        type: "get",
        success: function(response){
          listIdeas(response)
        }
      })
}

var listIdeas = function(ideas){
  $('.ideas-index').empty()
  $('.ideas-index').append(
    ideas.reverse().map(function(idea){
      return buildIdea(idea)
    })
  )
  filterIdeas()
}

var buildIdea = function(idea){
  return '<div class="idea-total" id="' + idea.attr.id + '">' + titleHtml(idea) +
         '</br>' + bodyHtml(idea) + buttonHtml() + sentimentHtml(idea) + '</div>'
}

var titleHtml = function(idea){
  return '<div class="idea panel panel-default col-md-9"> <h2 class="title-idea">' +
         idea.attr.title + '</h2>'
}

var bodyHtml = function(idea){
  return '<p class="body-idea">' + idea.attr.body + '</p>' + '</br>' + '</br>'
}

var sentimentHtml = function(idea){
  return '<div class="idea-quality panel panel-default">' + '<h3> legit-level: </h3>' +
         '<h3 class="quality-idea">' + idea.quality + '</h3>' +
         '<button type="button" class="btn btn-default downvote" aria-label="Left Align">' +
         '<span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></button>' +
         '<button type="button" class="btn btn-default upvote" aria-label="Left Align">' +
         '<span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span></button>' +
         '</div>'
}

var buttonHtml = function(){
  return '<button type="button" class="btn btn-delete-idea btn-danger">' +
         'Delete Idea' + '</button>' +
         '<button type="button" class="btn btn-warning-idea btn-warning">' +
          'Edit Idea' + '</button>' + '</div>'
}
