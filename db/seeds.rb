# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'starting to seed'

#USER
u1 = User.create(username: "Fernando", password: "123", is_admin: true, password_confirmation: "123")
u2 = User.create(username: "Josh", password: "123", is_admin: false, password_confirmation: "123")
u3 = User.create(username: "Justin", password: "123", is_admin: false, password_confirmation: "123")

#Venue 
ven1 = Venue.create(venue_name: "Barcade", location: '25 JFK BLVD', venue_img_url: "https://parknewhaven.com/wp-content/uploads/2016/10/deal-barcade.jpg")
ven2 = Venue.create(venue_name: "Bowlero", location: '45 Manhattan Ave', venue_img_url: "https://addisontexas.net/sites/default/files/imageattachments/busdir/8361/bowlero.png")
ven3 = Venue.create(venue_name: "Dave'n'Busters", location: '100 Meadow Rd', venue_img_url: "https://live.staticflickr.com/2904/14110169303_98984fc612_b.jpg")
ven4 = Venue.create(venue_name: "Lucky 13 Saloon", location: '644 Sackett St', venue_img_url: "https://live.staticflickr.com/2904/14110169303_98984fc612_b.jpg")
ven5 = Venue.create(venue_name: "Freddy Fazbear's Pizza", location: '8301 Sunset BLVD', venue_img_url: "https://live.staticflickr.com/2904/14110169303_98984fc612_b.jpg")
ven6 = Venue.create(venue_name: "Dinos", location: '13 River Rd', venue_img_url: "https://live.staticflickr.com/2904/14110169303_98984fc612_b.jpg")

#Band
band1 = Band.create(band_name: "Crystal Plains", genre: 'Metal', band_img_url: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg')
band2 = Band.create(band_name: "Shakey Graves", genre: 'Folk', band_img_url: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg')
band3 = Band.create(band_name: "Neon Funeral", genre: 'Dark Wave', band_img_url: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg')
band4 = Band.create(band_name: "Rush", genre: 'Progressive', band_img_url: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg')
band5 = Band.create(band_name: "A7X", genre: 'Metal', band_img_url: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg')
band6 = Band.create(band_name: "Sonic Youth", genre: 'Electronic', band_img_url: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg')

#Event
e1 = Event.create(event_name: 'Metal Night', venue_id: 1, band_id: 1)
e2 = Event.create(event_name: 'Folk Nigt', venue_id: 2, band_id: 2)
e3 = Event.create(event_name: 'Goth Night', venue_id: 3, band_id: 3)

#Attendees
attendee1 = Attendee.create(user_id: 1, event_id: 3)
attendee2 = Attendee.create(user_id: 2, event_id: 2)
attendee3 = Attendee.create(user_id: 3, event_id: 1)

#FavoriteBands
fav1 = FavoriteBand.create(user_id: 1 , band_id: 3)
fav2 = FavoriteBand.create(user_id: 2, band_id: 2)
fav3 = FavoriteBand.create(user_id: 3, band_id: 1)


puts 'done!'