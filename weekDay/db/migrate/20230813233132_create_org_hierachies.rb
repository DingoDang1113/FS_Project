class CreateOrgHierachies < ActiveRecord::Migration[7.0]
  def change
    create_table :org_hierachies do |t|
      t.string :position_code, null: false, index:{unique:true}
      t.string :position_description, null: false
      t.string :mgr_position_code, null: false 
      t.string :org_level_one_id, null:false, index:true
      t.string :org_level_two_id, null:false, index:true
      t.string :org_level_three_id, null:false, index:true 
      t.string :org_level_one_description, null:false
      t.string :org_level_two_description, null:false
      t.string :org_level_three_description, null:false

      t.timestamps
    end
  end
end
