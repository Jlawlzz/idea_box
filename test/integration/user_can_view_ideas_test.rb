class UserCanViewIdeasTest < MiniTest::Unit::TestCase

  def test 'User can view ideas' do
    Capybara.current_driver = :selenium
    visit "/"
    fill_in ""
    assert has_no_link?("Hide")
  end

end
