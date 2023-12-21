# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'starting to seed'

#USER
# u1 = User.create(username: "Fernando", password: "123", is_admin: true, password_confirmation: "123")
# u2 = User.create(username: "Josh", password: "123", is_admin: false, password_confirmation: "123")
# u3 = User.create(username: "Justin", password: "123", is_admin: false, password_confirmation: "123")

#Venue 
ven1 = Venue.create(venue_name: "Barcade", location: '25 JFK BLVD', venue_img_url: "https://parknewhaven.com/wp-content/uploads/2016/10/deal-barcade.jpg")
ven2 = Venue.create(venue_name: "Bowlero", location: '45 Manhattan Ave', venue_img_url: "https://addisontexas.net/sites/default/files/imageattachments/busdir/8361/bowlero.png")
ven3 = Venue.create(venue_name: "Dave'n'Busters", location: '100 Meadow Rd', venue_img_url: "https://live.staticflickr.com/2904/14110169303_98984fc612_b.jpg")
ven4 = Venue.create(venue_name: "Lucky 13 Saloon", location: '644 Sackett St', venue_img_url: "https://lajolla.com/wp-content/uploads/2019/01/hob.jpg")
ven5 = Venue.create(venue_name: "Freddy Fazbear's Pizza", location: '8301 Sunset BLVD', venue_img_url: "https://i.pinimg.com/736x/24/fc/4a/24fc4a258dbb2eb4b8e840db2c9597b2.jpg")
ven6 = Venue.create(venue_name: "Dinos", location: '13 River Rd', venue_img_url: "https://media.timeout.com/images/105864531/750/562/image.jpg")

#Band
band1 = Band.create(band_name: "Crystal Castles", genre: 'Electronic', band_img_url: 'https://ih1.redbubble.net/image.1941217001.0750/flat,750x,075,f-pad,750x1000,f8f8f8.jpg')
band2 = Band.create(band_name: "Shakey Graves", genre: 'Folk', band_img_url: 'https://www.austinchronicle.com/binary/6df9/ShakeyGraves_65_.jpg')
band3 = Band.create(band_name: "Neon Funeral", genre: 'Dark Wave', band_img_url: 'https://post-punk.com/wp-content/uploads/2021/07/IMG_6879.jpg')
band4 = Band.create(band_name: "Rush", genre: 'Progressive', band_img_url: 'https://www.stoneykins.com/Patterns/product_images/x/137/Rush_Logo_tn__80461_std.png')
band5 = Band.create(band_name: "A7X", genre: 'Metal', band_img_url: 'https://i.pinimg.com/736x/69/5d/74/695d748e0b4ea29a41b1335a8a2084e3.jpg')
band6 = Band.create(band_name: "Sonic Youth", genre: 'Electronic', band_img_url: 'https://sun13dotcom.files.wordpress.com/2020/07/sonic-youth-goo.jpg')
band7 = Band.create(band_name: "Gorillaz", genre: 'Electronic', band_img_url: 'https://i.ds.at/gckAFw/rs:fill:750:0/plain/2023/02/23/EFAF030E-4D10-4481-B5FD-35363862B1BB.jpg')
band8 = Band.create(band_name: "Green Day", genre: 'Rock', band_img_url: 'https://starsandscars.com/wp-content/uploads/2019/10/Green-Day.jpg')

#Event
e1 = Event.create(event_name: 'Metal Night', venue_id: 1, band_id: 5)
e2 = Event.create(event_name: 'Folk Night', venue_id: 2, band_id: 2)
e3 = Event.create(event_name: 'Goth Night', venue_id: 3, band_id: 3)
e4 = Event.create(event_name: 'Electric Zoo', venue_id: 4, band_id: 6)
e5 = Event.create(event_name: 'Coachella', venue_id:5, band_id: 7)
e6 = Event.create(event_name: 'Life in Color', venue_id: 6, band_id: 1)

#Attendees
attendee1 = Attendee.create(user_id: 1, event_id: 3)
attendee2 = Attendee.create(user_id: 2, event_id: 2)
attendee3 = Attendee.create(user_id: 3, event_id: 1)

#FavoriteBands
fav1 = FavoriteBand.create(user_id: 1 , band_id: 3)
fav2 = FavoriteBand.create(user_id: 2, band_id: 2)
fav3 = FavoriteBand.create(user_id: 3, band_id: 1)


puts 'done!'