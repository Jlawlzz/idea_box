class CreateIdeas < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.string :title
      t.string :body
      t.references :standing, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
