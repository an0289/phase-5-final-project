class TicketSerializer < ActiveModel::Serializer
  attributes :id, :event_title, :event_image, :event_date, :event_location
  belongs_to :user
  belongs_to :event
 

end
