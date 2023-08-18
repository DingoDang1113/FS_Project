# == Schema Information
#
# Table name: levels
#
#  id                :bigint           not null, primary key
#  level_code        :string           not null
#  level_description :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Level < ApplicationRecord
    validates :level_code, presence:true, uniqueness: true
    validates :level_description, presence:true

    # has_many :users ,dependent: :destroy


end
