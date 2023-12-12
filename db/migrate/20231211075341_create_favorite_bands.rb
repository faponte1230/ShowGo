class CreateFavoriteBands < ActiveRecord::Migration[6.1]
  def change
    create_table :favorite_bands do |t|
      t.integer :user_id
      t.integer :band_id

      t.timestamps
    end
  end
end
