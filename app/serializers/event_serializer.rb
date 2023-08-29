class EventSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :title, :description, :location, :date, :available_seats, :organizer_name
  belongs_to :organizer
end
