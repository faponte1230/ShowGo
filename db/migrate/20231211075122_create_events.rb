class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :event_name
      t.integer :venue_id
      t.integer :band_id

      t.timestamps
    end
  end
end
