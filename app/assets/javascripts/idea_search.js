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
  return (matchTitle(search, idea) || matchBody(search, idea) || matchQuality(search, idea))
}

var matchTitle = function(search, idea) {
  return $(idea).children('.title-idea').text().substr(0, search.length) == search
}

var matchBody = function(search, idea) {
  return $(idea).children('.body-idea').text().substr(0, search.length) == search
}

var matchQuality = function(search, idea) {
  return $(idea).children('.idea-quality').children('.quality-idea').text().substr(0, search.length) == search
}
