class Ticket < ApplicationRecord
  belongs_to :attendee, foreign_key: "user_id"
  belongs_to :event

  validates :user_id, uniqueness: { scope: :event_id, message: 'already attending this event'}
  validate :date_must_be_in_the_future



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

  def event_description
    self.event.description
  end 

  def user_email
    self.attendee.email
  end 

  private

  def date_must_be_in_the_future
    errors.add(:event_date, "has already passed!") unless event_date.future?
  end 
end
