$(document).ready(function(){
  $('#searchIdeaField').keydown(function(){
    filterIdeas()
  })
})

var filterIdeas = function(){
  $('.idea').hide()
  $('.idea').filter(function(){
   return matchIdea($('#searchIdeaField').val(), this)
  }).show()
}

var matchIdea = function(search, idea) {
  return $(idea).children('.title-idea').text().substr(0, search.length) == search
}
