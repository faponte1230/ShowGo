class EventSerializer < ActiveModel::Serializer
  attributes :id, :event_name, :hosting_venue, :hosting_venue_id,:band
  belongs_to :band, serializer: BandSerializer
  belongs_to :venue, serializer: VenueSerializer
  has_many :attendees, serializer: AttendeeSerializer

  def hosting_venue
    object.venue&.venue_name || 'None'
  end

  def hosting_venue_id
    object.venue&.id || 'None'
  end
end