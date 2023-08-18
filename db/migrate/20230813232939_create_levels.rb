class CreateLevels < ActiveRecord::Migration[7.0]
  def change
    create_table :levels do |t|
      t.string :level_code, null: false, index:{unique:true}
      t.string :level_description, null: false
      
      t.timestamps
    end
  end
end
