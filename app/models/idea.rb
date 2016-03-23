class Idea < ActiveRecord::Base

  belongs_to :standing

  def update_standing(sentiment)
    updated_standing = (sentiment == 'pos') ? promote : demote
    self.update_attribute(:standing_id, updated_standing) if updated_standing
  end

  def promote
    Standing.find(self.standing_id + 1).id if self.standing[:quality] != 'radical'
  end

  def demote
    Standing.find(self.standing_id - 1).id if self.standing[:quality] != 'peasant'
  end

end
