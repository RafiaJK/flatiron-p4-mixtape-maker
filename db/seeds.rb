# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# Examples:
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Album.create(artist: "Taylor Swift", album: "Midnights", year: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5")
Album.create(artist: "Harry Styles", album: "Harry's House", year: "2022", cover: "https://upload.wikimedia.org/wikipedia/en/d/d5/Harry_Styles_-_Harry%27s_House.png")
Album.create(artist: "Beyonce", album: "RENAISSANCE", year: "2022", cover: "https://upload.wikimedia.org/wikipedia/en/a/ad/Beyonc%C3%A9_-_Renaissance.png")
Album.create(artist: "Lizzo", album: "About Damn Time", year: "2022", cover: "https://upload.wikimedia.org/wikipedia/en/d/da/Lizzo_-_About_Damn_Time.png")
Album.create(artist: "Duckwrth", album: "Chrome Bull", year: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2739cc170038514988c0cf7c959")
Album.create(artist: "Arctic Monkeys", album: "The Car", year: "2022", cover: "https://media.pitchfork.com/photos/63061cdbc3194266963384da/master/pass/Arctic-Monkeys-The-Car.jpg")
Album.create(artist: "Red Hot Chili Peppers", album: "Return Of The Dream Canteen", year: "2022", cover: "https://media.pitchfork.com/photos/62dd3b7e4e5e79e85598914b/master/pass/Red-Hot-Chili-Peppers-Return-of-the-Dream-Canteen.jpg")

User.create(username: "Rafia", password_digest: "rafia_password")
User.create(username: "Cho",  password_digest: "cho_password")
User.create(username: "Bella",  password_digest: "bella_password")
User.create(username: "Leona",  password_digest: "leona_password")

Review.create(user_id: 1, album_id: 2, rating: "10/10: Harry can do no wrong")
Review.create(user_id: 1, album_id: 5, rating: "7/10: Smooth")
Review.create(user_id: 2, album_id: 3, rating: "8/10: Queen Bee does it again")
Review.create(user_id: 3, album_id: 1, rating: "10/10: IT'S TAYLOR")
Review.create(user_id: 4, album_id: 6, rating: "8/10: #Tumblrgirlfall")


