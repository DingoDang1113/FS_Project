# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

#convert snake_case to camelCase for all Jbuilder Keys 
#backend to frontend
Jbuilder.key_format camelize: :lower
Jbuilder.deep_format_keys true
