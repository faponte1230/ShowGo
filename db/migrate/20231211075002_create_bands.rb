class CreateBands < ActiveRecord::Migration[6.1]
  def change
    create_table :bands do |t|
      t.string :band_name
      t.string :genre
      t.string :band_img_url

      t.timestamps
    end
  end
end
