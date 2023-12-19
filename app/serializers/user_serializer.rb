class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :is_admin, :image_url

  has_many :favorite_bands
  has_many :events, through: :attendees, serializer: EventSerializer

  def image_url
    if object.avatar.attached?
      Rails.application.routes.url_helpers.rails_blob_url(object.avatar, only_path: false, host: 'localhost:3009', service: :local)
    end
  end
end
