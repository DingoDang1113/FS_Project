class CreateCaseComments < ActiveRecord::Migration[7.0]
  def change
    create_table :case_comments do |t|
      t.references :case, null: false, foreign_key: {to_table: :case_requests}
      t.references :parent_comment, foreign_key:{to_table: :case_comments}
      t.references :user, foreign_key:true 
      t.string :receiver_comment, null: false 
      # t.datetime :receiver_comment_date, default: -> {'CURRENT_TIMESTAMP'}

      t.timestamps
    end
  end
end
