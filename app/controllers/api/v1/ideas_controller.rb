class Api::V1::IdeasController < Api::ApiController

  respond_to :json

  def create
    idea = Idea.create(idea_params)
    idea.update_attribute(:standing_id, Standing.find_by(quality: 'peasant').id)
    ideas = Idea.all

    redirect_to api_v1_ideas_path
  end

  def index
    ideas = Idea.all.map { |idea| {attr: idea, quality: idea.standing.quality} }
                         .sort_by { |idea| idea[:attr][:created_at] }

    respond_with ideas
  end

  def update
    @idea = Idea.find(params[:id])
    @idea.update_attributes(idea_params)

    respond_with :api, :v1, @idea
  end

  def destroy
    idea = Idea.find(params[:id])
    idea.destroy

    respond_with idea
  end

  private

  def idea_params
    params.require(:idea).permit(:title,
                                 :body)
  end

end
