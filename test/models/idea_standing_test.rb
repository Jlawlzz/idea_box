require 'test_helper'

class IdeaStandingTest < ActiveSupport::TestCase
  test "the standing can be upvoted" do
    Idea.last.update_standing('pos')
    
    assert_equal Idea.last.standing.quality, 'aight'
  end

  test "the standing can be downvoted" do
    Idea.first.update_standing('neg')

    assert_equal Idea.first.standing.quality, 'aight'
  end

  test "radical standing cant be upvoted" do
    Idea.first.update_standing('pos')

    assert_equal Idea.first.standing.quality, 'radical'
  end

  test "peasant standing cant be downvoted" do
    Idea.last.update_standing('neg')

    assert_equal Idea.last.standing.quality, 'peasant'
  end
end
