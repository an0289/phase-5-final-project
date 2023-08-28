class AttendeeSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :type
  
  has_many :tickets 
end
