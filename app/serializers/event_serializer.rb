class EventSerializer < ActiveModel::Serializer
  attributes :id, :event_name, :band, :attendees, :attending_count, :venue
  belongs_to :band, serializer: BandSerializer
  belongs_to :venue, serializer: VenueSerializer
  has_many :attendees, serializer: AttendeeSerializer



  def attending_count
    object.attendees.count
  end
end