require 'test_helper'

class Api::V1::IdeaStandingsControllerTest < ActionController::TestCase

  test '#update-standing-pos' do

    patch :update, format: :json, id: Idea.last.id, sentiment: 'pos'

    assert_response :success
    assert_equal Idea.count, 3
    assert_equal Idea.last.standing.quality, 'aight'

    patch :update, format: :json, id: Idea.last.id, sentiment: 'pos'

    assert_response :success
    assert_equal Idea.last.standing.quality, 'radical'

    patch :update, format: :json, id: Idea.last.id, sentiment: 'pos'

    assert_response :success
    assert_equal Idea.last.standing.quality, 'radical'
  end

  test '#update-standing-neg' do

    patch :update, format: :json, id: Idea.first.id, sentiment: 'neg'

    assert_response :success
    assert_equal Idea.count, 3
    assert_equal Idea.first.standing.quality, 'aight'

    patch :update, format: :json, id: Idea.first.id, sentiment: 'neg'

    assert_response :success
    assert_equal Idea.first.standing.quality, 'peasant'

    patch :update, format: :json, id: Idea.last.id, sentiment: 'neg'

    assert_response :success
    assert_equal Idea.first.standing.quality, 'peasant'
  end

end
