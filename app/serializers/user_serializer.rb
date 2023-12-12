class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :favorite_bands
  has_many :attendees
end
