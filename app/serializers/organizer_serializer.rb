class OrganizerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :type

  has_many :events 
end
