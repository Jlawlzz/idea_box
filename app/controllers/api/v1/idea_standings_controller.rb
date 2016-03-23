class Api::V1::IdeaStandingsController < Api::ApiController

  respond_to :json

  def update
    idea = Idea.find(params[:id])
    idea.update_standing(params[:sentiment])

    respond_with :api, :v1, idea
  end

end
