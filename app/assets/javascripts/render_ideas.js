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
  return titleHtml(idea) + sentimentHtml(idea) + '</br>' + bodyHtml(idea) + buttonHtml()
}

var titleHtml = function(idea){
  return '<div class="idea panel panel-default" id="'
  + idea.attr.id + '"> <h2 class="title-idea">' + idea.attr.title
}

var bodyHtml = function(idea){
  return '<p class="body-idea">' + idea.attr.body + '</p>' + '</br>' + '</br>'
}

var sentimentHtml = function(idea){
  return '</h2>' + '<div class="idea-quality panel panel-default">' + '<h4> legit-level: </h4>' +
         '<h4>' + idea.quality + '</h4>' +
         '<button type="button" class="btn btn-default downvote" aria-label="Left Align">' +
         '<span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></button>' +
         '<button type="button" class="btn btn-default upvote" aria-label="Left Align">' +
         '<span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span></button>' +
         '</div>'
}

var buttonHtml = function(){
  return '<button type="button" class="btn btn-delete-idea btn-danger">' +
         'Delete Idea' + '</button>' + '</div>'
}
