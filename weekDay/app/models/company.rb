# == Schema Information
#
# Table name: companies
#
#  id           :integer          not null, primary key
#  company_id   :string           not null
#  company_name :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Company < ApplicationRecord
end
