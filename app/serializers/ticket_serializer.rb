class TicketSerializer < ActiveModel::Serializer
  attributes :id, :event_id
  has_one :user
  has_one :event
end
