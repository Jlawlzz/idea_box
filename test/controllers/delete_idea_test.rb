require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase

  test '#delete' do

    delete :destroy, format: :json, id: Idea.first.id

    assert_response :success
    assert_equal Idea.count, 2
    assert_equal Idea.first.title, 'idea_2'
    assert_equal Idea.last.title, 'idea_1'

  end


end
