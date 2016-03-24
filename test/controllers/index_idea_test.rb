require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase

  test '#index' do

    get :index, format: :json

    answer = JSON.parse(response.body)
    assert_response :success
    assert_equal Idea.count, 3
    assert_equal answer.first['attr']['title'], 'idea_1'
    assert_equal answer.last['attr']['title'], 'idea_3'

  end

end
