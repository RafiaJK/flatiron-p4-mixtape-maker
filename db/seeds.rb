# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# Examples:
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Song.create(song: "Anti-Hero", artist: "Taylor Swift", album: "Midnights")
Song.create(song: "As It Was", artist: "Harry Styles", album: "Harry's House")
Song.create(song: "CUFF IT", artist: "Beyonce", album: "RENAISSANCE")
Song.create(song: "About Damn Time", artist: "Lizzo", album: "About Damn Time")
Song.create(song: "Super Saiyan", artist: "Duckwrth", album: "Chrome Bull")
Song.create(song: "Sculptures Of Anything Goes ", artist: "Arctic Monkeys", album: "The Car")
Song.create(song: "Tippa My Tongue", artist: "Red Hot Chili Peppers", album: "Return Of The Dream Canteen")

User.create(username: "Rafia", avatar: "")
User.create(username: "Cho", avatar: "")
User.create(username: "Bella", avatar: "")
User.create(username: "Leona", avatar: "")

Mix.create(user_id: 1, song_id: 1, mix_name: "Emo Hour", cover_art: "")
Mix.create(user_id: 1, song_id: 2, mix_name: "Emo Hour", cover_art: "")
Mix.create(user_id: 1, song_id: 6, mix_name: "Emo Hour", cover_art: "")
