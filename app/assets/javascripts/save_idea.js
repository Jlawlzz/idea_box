$(document).ready(function(){

  $('#newIdeaButton').click(function(){
    createIdea({ title: $('#newIdeaTitle').val(),
                 body: $('#newIdeaBody').val()
               })
  })

    $('#newIdeaTitle').onkeydown = function(key){
       if(key.keyCode == 13){
         createIdea({ title: $('#newIdeaTitle').val(),
                      body: $('#newIdeaBody').val()
                    })
       }
     }

    $('#newIdeaBody').onkeydown = function(key){
       if(key.keyCode == 13){
         createIdea({ title: $('#newIdeaTitle').val(),
                      body: $('#newIdeaBody').val()
                    })
       }
     }
})

var createIdea = function(newIdea) {
  $.ajax({
    url: '/api/v1/ideas',
    type: 'post',
    data: { idea: newIdea },
    success: function(response){
      $('#newIdeaTitle').val('')
      $('#newIdeaBody').val('')
      fetchIdeas()
    }
  })
}
