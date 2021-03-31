var songData = [
  {
    songName: "Y.M.C.A",
    year: "1984",
    songId: 1,
    Like: true,
    artist: "Village People",
    genre: "Pop",
    image:
      "https://www.chicagotribune.com/resizer/_71CczY9L-zD6iavqs3J5_nzEzU=/800x802/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/YHJ63MXXBZQI64WDTWBXKUFSAU.jpg",
    lengths: "4:02",
    musicLink:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab3f7.appspot.com/o/Village-People-YMCA.mp3?alt=media&token=1c29104b-dec4-4a8b-b61b-17d2b5565f2e",
  },
  {
    songName: "Beat It",
    year: "1994",
    songId: 2,
    Like: false,
    artist: "Micheal Jackson",
    genre: "Pop",
    image: "https://miro.medium.com/max/625/0*U2KdecQg1CLUbMZc.jpg",
    lengths: "3:50",
    musicLink:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab3f7.appspot.com/o/Michael%20Jackson%20-%20Beat%20It.mp3?alt=media&token=a44323a3-ae34-4922-a898-a955d8892968",
  },
  {
    songName: "Fire Flies",
    year: "2008",
    Like: false,
    songId: 3,
    artist: "Owl City",
    genre: "Alternate pop",
    image: "https://i1.sndcdn.com/artworks-000337878714-fty7ok-t500x500.jpg",
    lengths: "4:29",
    musicLink:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab3f7.appspot.com/o/Owl%20City%20-%20Fireflies.mp3?alt=media&token=83431a35-291e-4e75-ab3a-1eac80244f02",
  },
  {
    songName: "Window in the Sky",
    year: "2006",
    Like: false,
    songId: 4,
    artist: "U 2",
    genre: "Rock",
    image:
      "https://i.discogs.com/R-6765259-1433426102-4497.jpeg?bucket=discogs-images&fit=contain&format=auto&height=522&quality=90&width=600&signature=JKdNandrITLY2rA9GV%2BmFXosiybYIUmJ5lKyI5o0ckU%3D",
    lengths: "3:40",
  },
  {
    songName: "Beautiful Day",
    year: "1999",
    Like: false,
    songId: 5,
    artist: "U 2",
    genre: "Rock",
    image: "https://www.u2songs.com/images/disco/_full/X8021-01.jpg",
    lengths: "3:48",
    musicLink:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab3f7.appspot.com/o/U2-Beautiful-Day.mp3?alt=media&token=ad00158c-be5f-41a7-a5b0-1cdc21e30ff4",
  },
  {
    songName: "Woods",
    songId: 6,
    year: "2017",
    Like: true,
    artist: "Hollow Coves",
    genre: "Indie",
    image: "https://m.media-amazon.com/images/I/81fOMoZz51L._SS500_.jpg",
    lengths: "4:29",
    musicLink:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab3f7.appspot.com/o/Hollow-Coves-The-Woods.mp3?alt=media&token=a6f5e143-af22-4580-9110-d671f90018aa",
  },
  {
    songName: "Big in Japan",
    songId: 7,
    year: "1982",
    Like: true,
    artist: "Alphaville",
    genre: "Synth-pop",
    image: "https://i1.sndcdn.com/artworks-000090989821-witjeg-t500x500.jpg",
    lengths: "4:05",
    musicLink:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab3f7.appspot.com/o/Alphaville%20-%20Big%20In%20Japan.mp3?alt=media&token=7640e8d7-a922-424a-b0cd-e9f9ae8b21b2",
  },
  {
    songName: "Fix You",
    songId: 8,
    year: 2012,
    Like: false,
    artist: "Coldplay",
    genre: "pop",
    image:
      "https://www.thespark.org.uk/wp-content/uploads/2017/02/Fix-You-Coldplay.jpg",
    lengths: "3:20",
    musicLink:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab3f7.appspot.com/o/Coldplay-Fix-You.mp3?alt=media&token=11fa38f0-fa91-497a-9b13-4d0c2525a4ed",
  },
  {
    songName: "I Took a Pill",
    songId: 9,
    year: 2018,
    Like: false,
    artist: "Mike Posner",
    genre: "pop",
    lengths: "2:80",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/ec/Mike_Posner_-_I_Took_a_Pill_in_Ibiza.png",
    musicLink:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab3f7.appspot.com/o/Mike%20Posner%20-%20I%20Took%20A%20Pill%20In%20Ibiza%20(Seeb%20Remix)%20(Explicit).mp3?alt=media&token=bbf87efa-f7ee-4d00-ab75-171ec2995714",
  },
  {
    songName: "Everglow",
    songId: 10,
    year: 2017,
    Like: false,
    artist: "Coldplay",
    lengths: "3.20",
    genre: "Hip Hop",
    image: "https://imagescdn.junodownload.com/full/CS3266498-02A-BIG.jpg",
    musicLink:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab3f7.appspot.com/o/Coldplay-Everglow.mp3?alt=media&token=a0543e15-5ce4-4550-bf9d-917be0b5f0dd",
  },
  {
    songName: "Loose Yourself",
    songId: 11,
    year: 2004,
    lengths: "3:45",
    Like: true,
    artist: "EMINEM",
    musicLink:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab3f7.appspot.com/o/Eminem%20-%20Lose%20Yourself.mp3?alt=media&token=4016253a-89fd-41f1-83ef-f08cedd8c859",
    genre: "Rap",
    image:
      "https://freakytrigger.s3.amazonaws.com/wordpress/wp-content/uploads/2019/09/24171247/C3BF041F-A0DE-4A4A-B71E-E2549219A012.jpeg",
  },
  {
    songName: "Ho Hey",
    songId: 17,
    year: 2008,
    Like: true,
    lengths: "3:10",
    artist: "The Lumineers",
    genre: "pop",
    musicLink:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab3f7.appspot.com/o/The%20Lumineers%20-%20Ho%20Hey%20%F0%9F%8E%B5.mp3?alt=media&token=b1ee34fd-3366-44ff-b433-bffb8b91dc21",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjJlN2JjMjktMzEwOC00NWI3LThlYTAtOWJlZjY2YzBlOTYxXkEyXkFqcGdeQXVyMjA4OTI5NDQ@._V1_UY268_CR9,0,182,268_AL_.jpg",
  },
  {
    songName: "Let it Be",
    songId: 13,
    year: 1976,
    Like: true,
    artist: "Beetles",
    genre: "Classic pop",
    lengths: "3:56",
    musicLink:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab3f7.appspot.com/o/Let%20It%20Be%20(Remastered%202009).mp3?alt=media&token=32b19de0-eaec-4ea6-9cf8-592ba91c9bc6",
    image:
      "https://dy1njwx6v16vt.cloudfront.net/wp-content/uploads/sites/44/2019/05/The-Beatles-Let-It-Be-768x768.jpg",
  },
  {
    songName: "Aligator Sky",
    songId: 14,
    year: 2005,
    Like: true,
    artist: "Owl City",
    lengths: "4:02",
    genre: "Classic pop",
    musicLink:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab3f7.appspot.com/o/Owl%20City%20-%20Alligator%20Sky%20.mp3?alt=media&token=797cb3f8-596d-4977-84d6-3a805fe0b435",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/22/Owl_City_-_Alligator_Sky.png",
  },
  {
    songName: "Daylight",
    songId: 15,
    year: 2014,
    Like: true,
    artist: "Maroon 5",
    lengths: "3:23",
    musicLink:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab3f7.appspot.com/o/Daylight%20-%20Maroon%205.mp3?alt=media&token=c80eda91-00f1-434f-a224-e3d66c879973",
    genre: "rock",
    image:
      "https://t2.genius.com/unsafe/275x0/https%3A%2F%2Fimages.genius.com%2F100703bc0299945265a6991c37928a52.300x300x1.png",
  },
  {
    songName: "Airplanes",
    songId: 16,
    year: 2007,
    Like: false,
    artist: "B.O.B",
    lengths: "3:19",
    genre: "rap",
    image:
      "https://www.dictionary.com/e/wp-content/uploads/2018/05/Airplanes.jpg",
    musicLink:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ab3f7.appspot.com/o/B.o.B%20-%20Airplanes%20Part.%202%20(Ft.%20Eminem%2C%20Hayley%20Williams)%20%5BCDQ%5D%20W%20.mp3?alt=media&token=ee90f9c0-b1bb-4c3a-9ba5-b350af8cadc6",
  },
];

export default songData;
