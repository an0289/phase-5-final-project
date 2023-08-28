class Event < ApplicationRecord
  belongs_to :organizer, foreign_key: "user_id"
  has_many :tickets
  has_many :attendees, through: :tickets   
end
