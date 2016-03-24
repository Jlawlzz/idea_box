$(document).ready(function(){
  $('#searchIdeaField').keyup(function(){
    filterIdeas()
  })

  $('#searchIdeaField').keyup(function(){
    filterIdeas()
  })

  $('#searchIdeaField').onkeyup = function(key){
     if(key.keyCode == 13 || key.keyCode == 46){
       filterIdeas()
     }
   }
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
