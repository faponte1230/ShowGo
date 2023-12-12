class VenueSerializer < ActiveModel::Serializer
  attributes :id, :venue_name, :location, :venue_img_url
  has_many :events, serializer: EventSerializer
end