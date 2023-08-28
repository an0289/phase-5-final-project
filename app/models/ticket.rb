class Ticket < ApplicationRecord
  belongs_to :user
  belongs_to :event

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
end
