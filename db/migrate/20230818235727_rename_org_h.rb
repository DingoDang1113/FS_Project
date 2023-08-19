class RenameOrgH < ActiveRecord::Migration[7.0]
  def change
    rename_table :org_hierachies, :org_hierarchies
  end
end
