# == Schema Information
#
# Table name: user_effective_dates
#
#  id             :integer          not null, primary key
#  user_id        :integer          not null
#  field_name     :string           not null
#  old_value      :text
#  new_value      :text
#  effective_date :date             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class UserEffectiveDate < ApplicationRecord
end
