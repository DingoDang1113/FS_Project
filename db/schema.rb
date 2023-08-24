# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_08_24_174020) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "case_comments", force: :cascade do |t|
    t.bigint "case_id", null: false
    t.bigint "parent_comment_id"
    t.bigint "user_id"
    t.string "receiver_comment", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["case_id"], name: "index_case_comments_on_case_id"
    t.index ["parent_comment_id"], name: "index_case_comments_on_parent_comment_id"
    t.index ["user_id"], name: "index_case_comments_on_user_id"
  end

  create_table "case_requests", force: :cascade do |t|
    t.string "request_title", null: false
    t.string "request_category", null: false
    t.bigint "requester_id", null: false
    t.text "request", null: false
    t.boolean "request_status", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["requester_id"], name: "index_case_requests_on_requester_id"
  end

  create_table "companies", force: :cascade do |t|
    t.string "company_code", null: false
    t.string "company_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_code"], name: "index_companies_on_company_code", unique: true
  end

  create_table "jobs", force: :cascade do |t|
    t.string "job_code", null: false
    t.string "job_code_description", null: false
    t.string "job_function_code", null: false
    t.string "job_function_description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["job_code"], name: "index_jobs_on_job_code", unique: true
  end

  create_table "levels", force: :cascade do |t|
    t.string "level_code", null: false
    t.string "level_description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["level_code"], name: "index_levels_on_level_code", unique: true
  end

  create_table "org_hierarchies", force: :cascade do |t|
    t.string "position_code", null: false
    t.string "position_description", null: false
    t.string "mgr_position_code", null: false
    t.string "org_level_one_id", null: false
    t.string "org_level_two_id", null: false
    t.string "org_level_three_id", null: false
    t.string "org_level_one_description", null: false
    t.string "org_level_two_description", null: false
    t.string "org_level_three_description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["org_level_one_id"], name: "index_org_hierarchies_on_org_level_one_id"
    t.index ["org_level_three_id"], name: "index_org_hierarchies_on_org_level_three_id"
    t.index ["org_level_two_id"], name: "index_org_hierarchies_on_org_level_two_id"
    t.index ["position_code"], name: "index_org_hierarchies_on_position_code", unique: true
  end

  create_table "user_effective_dates", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "field_name", null: false
    t.text "old_value"
    t.text "new_value"
    t.date "effective_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_effective_dates_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "middle_name", null: false
    t.string "last_name", null: false
    t.string "employee_status", null: false
    t.string "employee_id", null: false
    t.date "start_date", null: false
    t.date "termination_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "job_code", null: false
    t.string "level_code", null: false
    t.string "company_code", null: false
    t.string "position_id", null: false
    t.string "manager_id"
    t.string "password_digest"
    t.string "session_token"
    t.index ["employee_id"], name: "index_users_on_employee_id", unique: true
    t.index ["manager_id"], name: "index_users_on_manager_id"
  end

  add_foreign_key "case_comments", "case_comments", column: "parent_comment_id"
  add_foreign_key "case_comments", "case_requests", column: "case_id"
  add_foreign_key "case_comments", "users"
  add_foreign_key "case_requests", "users", column: "requester_id"
  add_foreign_key "user_effective_dates", "users"
  add_foreign_key "users", "companies", column: "company_code", primary_key: "company_code"
  add_foreign_key "users", "jobs", column: "job_code", primary_key: "job_code"
  add_foreign_key "users", "levels", column: "level_code", primary_key: "level_code"
  add_foreign_key "users", "org_hierarchies", column: "position_id", primary_key: "position_code"
end
