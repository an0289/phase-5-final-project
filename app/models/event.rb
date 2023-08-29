class Event < ApplicationRecord
  belongs_to :organizer, foreign_key: "user_id"
  has_many :tickets
  has_many :attendees, through: :tickets   

  def organizer_name
    self.organizer.name
  end 

end
