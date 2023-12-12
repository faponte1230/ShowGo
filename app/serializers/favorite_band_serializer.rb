class FavoriteBandSerializer < ActiveModel::Serializer
  attributes :id, :favBand_name, :fav_band_id
  belongs_to :user
  belongs_to :band, serializer: BandSerializer

  def favBand_name
    object.band&.band_name || 'None'
  end

  def fav_band_id
    object.band&.id || 'None'
  end


end