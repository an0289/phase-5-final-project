class EventSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :title, :description, :location, :date, :available_seats
  has_one :user
end