class CreateUserEffectiveDates < ActiveRecord::Migration[7.0]
  def change
    create_table :user_effective_dates do |t|
      t.references :user, null: false, foreign_key:true
      t.string :field_name, null: false
      t.text :old_value 
      t.text :new_value 
      t.date :effective_date, null:false 

      t.timestamps
    end
  end
end
