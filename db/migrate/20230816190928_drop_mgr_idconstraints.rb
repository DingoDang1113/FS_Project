class DropMgrIdconstraints < ActiveRecord::Migration[7.0]
  def change
    change_column_null :users, :manager_id, true
  end
end
