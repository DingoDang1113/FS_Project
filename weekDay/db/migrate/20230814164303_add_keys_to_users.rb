class AddKeysToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :job_code, :string, null: false
    add_foreign_key :users, :jobs, column: :job_code, primary_key: "job_code"
    add_column :users, :level_code, :string, null: false
    add_foreign_key :users, :levels, column: :level_code, primary_key: "level_code"
    add_column :users, :company_code, :string, null: false
    add_foreign_key :users, :companies, column: :company_code, primary_key: "company_id"
    add_column :users, :position_id, :string, null: false
    add_foreign_key :users, :org_hierachies, column: :position_id, primary_key: "position_code"
    add_reference :users, :manager,  null: false, foreign_key: {to_table: :users}

  end
end
