$(document).ready(function(){
  $('.ideas-index').on('click', '.downvote', function(){
    updateSentiment($(this).closest('.idea')[0].id, 'neg')
  })

  $('.ideas-index').on('click', '.upvote', function(){
    updateSentiment($(this).closest('.idea')[0].id, 'pos')
  })
})

var updateSentiment = function(idea, sentiment){
  $.ajax({
    url: '/api/v1/idea_standings/' + idea,
    type: 'patch',
    data: { sentiment: sentiment },
    success: function(response){
      fetchIdeas()
    }
  })
}
