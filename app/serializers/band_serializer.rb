class BandSerializer < ActiveModel::Serializer
  attributes :id, :band_name, :genre, :band_img_url, :favorite_bands
  has_many :events, serializer: EventSerializer
  has_many :favorite_bands
  has_many  :users, through: :favorite_bands
end
