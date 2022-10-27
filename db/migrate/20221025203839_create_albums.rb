class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :artist
      t.string :title
      t.string :year
      t.string :cover

      t.timestamps
    end
  end
end
