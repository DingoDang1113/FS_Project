# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  first_name      :string           not null
#  middle_name     :string           not null
#  last_name       :string           not null
#  employee_status :string           not null
#  employee_id     :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  job_code        :string           not null
#  level_code      :string           not null
#  company_code    :string           not null
#  position_id     :string           not null
#  manager_id      :integer          not null
#
class User < ApplicationRecord
end
