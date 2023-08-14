# == Schema Information
#
# Table name: jobs
#
#  id                       :integer          not null, primary key
#  job_code                 :string           not null
#  job_code_description     :string           not null
#  job_function_code        :string           not null
#  job_function_description :string           not null
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#
class Job < ApplicationRecord
end
