# == Schema Information
#
# Table name: companies
#
#  id           :bigint           not null, primary key
#  company_code :string           not null
#  company_name :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Company < ApplicationRecord
    validates :company_code, presence:true, uniqueness: true
    validates :company_name, presence:true

    has_many :users


end
