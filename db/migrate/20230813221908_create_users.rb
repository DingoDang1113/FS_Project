class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :middle_name, null: false
      t.string :last_name, null: false
      t.string :employee_status, null: false 
      t.string :employee_id, null: false, index: {unique: true}
      t.date :start_date, null: false 
      t.date :termination_date
      


      t.timestamps
    end
  end
end
