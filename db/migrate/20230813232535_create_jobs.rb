class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :job_code, null:false, index:{unique: true}
      t.string :job_code_description, null: false
      t.string :job_function_code, null: false
      t.string :job_function_description, null: false 

      t.timestamps
    end
  end
end
