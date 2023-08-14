# == Schema Information
#
# Table name: levels
#
#  id                :integer          not null, primary key
#  level_code        :string           not null
#  level_description :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Level < ApplicationRecord
end
