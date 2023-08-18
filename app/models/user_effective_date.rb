# == Schema Information
#
# Table name: user_effective_dates
#
#  id             :bigint           not null, primary key
#  user_id        :bigint           not null
#  field_name     :string           not null
#  old_value      :text
#  new_value      :text
#  effective_date :date             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class UserEffectiveDate < ApplicationRecord
    validates :effective_date, :old_value, :new_value, presence:true
    validates :field_name, presence: true, inclusion: {in: User.field_names}
    
    # belongs_to :user, foreign_key: :user_id
end
