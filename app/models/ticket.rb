class Ticket < ApplicationRecord
  belongs_to :attendee, foreign_key: "user_id"
  belongs_to :event

  validates :user_id, uniqueness: { scope: :event_id, message: 'already attending this event'}

  def event_title
    self.event.title
  end 

  def event_image
    self.event.image_url
  end 

  def event_date
    self.event.date
  end 

  def event_location
    self.event.location
  end

  def event_seats
    self.event.available_seats
  end 
  def event_organizer
    self.event.organizer_name
  end 
end
