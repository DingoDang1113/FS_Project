class ChangeMgrIdTypeUser < ActiveRecord::Migration[7.0]
  def change
    change_column :users, :manager_id, :string
  end
end
