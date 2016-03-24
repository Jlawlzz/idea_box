require 'test_helper'

require "selenium-webdriver"

class UserCanEditIdeasTest < ActionDispatch::IntegrationTest

  def test_user_can_edit_ideas

    Capybara.current_driver = :selenium

    visit "/"

    first('.idea').click_button('edit')

    fill_in 'editIdeaBody', with: 'edited-body'

    first('.idea').click_button('update idea')

    assert page.has_content?('edited-body')

  end

end
