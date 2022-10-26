class CreateMixes < ActiveRecord::Migration[7.0]
  def change
    create_table :mixes do |t|
      t.integer :user_id
      t.integer :song_id
      t.string :mix_name
      t.string :cover_art
      t.timestamps
    end
  end
end
