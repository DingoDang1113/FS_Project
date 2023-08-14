class CreateCaseRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :case_requests do |t|
      t.string :request_title, null: false 
      t.string :request_category, null: false 
      t.references :requester, null: false, foreign_key:{to_table: :users}
      t.text :request, null: false 
      t.boolean :request_status, null: false 
      # t.datetime :request_date, default: -> {'CURRENT_TIMESTAMP'}

      t.timestamps
    end
  end
end
