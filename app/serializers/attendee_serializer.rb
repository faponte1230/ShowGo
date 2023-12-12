class AttendeeSerializer < ActiveModel::Serializer
  attributes :id, :attending_band_name, :e_name, :attending_count, :attending_venue
  belongs_to :user
  belongs_to :event, serializer: EventSerializer
  has_one :band, through: :event, serializer: BandSerializer

  def attending_band_name
    object.event.band.band_name
  end

  def e_name
    object.event.event_name
  end
  def attending_count
    object.event.users.count
  end
  def attending_venue
    object.event.venue
  end
  
end