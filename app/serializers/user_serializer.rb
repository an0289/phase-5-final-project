class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :image_url, :type
end
