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
  $('.idea-total').hide()
  $('.idea-total').filter(function(){
   return matchIdea($('#searchIdeaField').val(), this)
  }).show()
}

var matchIdea = function(search, ideaTotal) {
  return (matchTitle(search, ideaTotal) || matchBody(search, ideaTotal) || matchQuality(search, ideaTotal))
}

var matchTitle = function(search, ideaTotal) {
  return $(ideaTotal).children('.idea').children('.title-idea').text().substr(0, search.length) == search
}

var matchBody = function(search, ideaTotal) {
  return $(ideaTotal).children('.idea').children('.body-idea').text().substr(0, search.length) == search
}

var matchQuality = function(search, ideaTotal) {
  return $(ideaTotal).children('.idea-quality').children('.quality-idea').text().substr(0, search.length) == search
}
