class EventSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :title, :description, :location, :date, :available_seats, :organizer_name, :seats

  belongs_to :organizer
  has_many :tickets
  has_many :attendees 

  
end
