class CreateStandings < ActiveRecord::Migration
  def change
    create_table :standings do |t|
      t.string :quality

      t.timestamps null: false
    end
  end
end
