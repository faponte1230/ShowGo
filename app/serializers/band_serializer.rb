class BandSerializer < ActiveModel::Serializer
  attributes :id, :band_name, :genre, :band_img_url
  has_many :events, serializer: EventSerializer
  
end
