class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :image_url
      t.string :title
      t.text :description
      t.string :location
      t.datetime :date
      t.integer :available_seats
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
