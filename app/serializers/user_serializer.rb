class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :is_admin
  has_many :favorite_bands
  has_many :attendees
  has_many :events, through: :attendees, serializer: EventSerializer
end
