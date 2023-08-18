class RemoveFkUser < ActiveRecord::Migration[7.0]
  def change
    remove_foreign_key :users, column: :manager_id 
  end
end
