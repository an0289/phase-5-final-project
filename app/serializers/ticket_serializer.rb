class TicketSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :event_title, :event_image, :event_date, :event_location, :event_seats, :event_organizer, :user_email
  belongs_to :attendee
  belongs_to :event
 
  
end
