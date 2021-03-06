class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false

      t.timestamps
    end
    add_index :restaurants, :name, unique: true
    #Ex:- add_index("admin_users", "username")
  end
end
