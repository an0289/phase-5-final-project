class TicketSerializer < ActiveModel::Serializer
  attribute :id
  has_one :user
  has_one :event
end
