const moviePreviews = [{
        "name": 'A Life on Earth',
        "genre": ['Science', 'Nature', 'Documentry'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1603995113/a_life_on_earth_fe6k0f.jpg',
        "trailerURL": 'https://res.cloudinary.com/da0i9wy5t/video/upload/v1604244296/David_Attenborough__A_Life_on_Our_Planet_-_trailer_qfftk3_wzqr0y.mp4',
    },
    {
        "name": 'Matrix',
        "genre": ['Mind-Bending'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1603995114/matrix_rxo5xv.png',
        "trailerURL": 'https://res.cloudinary.com/da0i9wy5t/video/upload/v1604236193/The_Matrix_1999_Official_Trailer_1_-_Sci-Fi_Action_Movie_gjfqr4.mp4',
    },
    {
        "name": 'Our Planet',
        "genre": ['Science', 'Nature', 'Documentry'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1603995114/our_planet_wmrcjt.jpg',
        "trailerURL": 'https://res.cloudinary.com/da0i9wy5t/video/upload/v1604244162/Our_Planet___Official_Trailer_HD___Netflix_fo8g2c.mp4',
    },
    {
        "name": 'Peaky Blinders',
        "genre": ['Science', 'Nature', 'Documentry'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1603995114/peaky_blinders_x4rinb.jpg',
        "trailerURL": '',
    },
    {
        "name": 'The Ballad of Buster Scruggs',
        "genre": ['Science', 'Nature', 'Documentry'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1603995113/buster_scruggs_zzfbao.jpg',
        "trailerURL": '',
    },
    {
        "name": 'Money Heist',
        "genre": ['Science', 'Nature', 'Documentry'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1603995113/money_heist_r2fyhn.jpg',
        "trailerURL": '',
    },
    {
        "name": 'Explained',
        "genre": ['Science', 'Nature', 'Documentry'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1603995113/explained_crqy8r.jpg',
        "trailerURL": '',
    },
    {
        "name": 'Inside Bill\'s Brain',
        "genre": ['Science', 'Nature', 'Documentry'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1603995113/bill_gates_zukmvb.jpg',
        "trailerURL": '',
    },



    {
        "name": 'History 101',
        "genre": ['Science', 'Nature', 'Documentry'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591435/history_101_j6lbna.jpg',
        "trailerURL": '',
    },
    {
        "name": 'Lucifer',
        "genre": ['Science', 'Nature', 'Documentry'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591435/lucifer_yrp3z1.jpg',
        "trailerURL": '',
    },
    {
        "name": 'Night On Earth',
        "genre": ['Science', 'Nature', 'Documentry'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591435/night_on_earth_q5utfd.jpg',
        "trailerURL": '',
    },
    {
        "name": 'Don\'t F*** With Cats',
        "genre": ['Science', 'Nature', 'Documentry'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591435/dont_f_with_cats_bit5ia.jpg',
        "trailerURL": '',
    },
    {
        "name": 'Connected',
        "genre": ['Science', 'Nature', 'Documentry'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591435/connected_zxwn0b.jpg',
        "trailerURL": '',
    },
    {
        "name": 'Narcos',
        "genre": ['Science', 'Nature', 'Documentry'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591435/narcos_sskgtr.jpg',
        "trailerURL": '',
    },
    {
        "name": 'Tiger King',
        "genre": ['Science', 'Nature', 'Documentry'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591435/tiger_king_t9oy7x.jpg',
        "trailerURL": '',
    },
    {
        "name": 'The Witcher',
        "genre": ['Science', 'Nature', 'Documentry'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591436/the_witcher_d0yors.jpg',
        "trailerURL": '',
    },
    {
        "name": 'Queen\'s Gambit',
        "genre": ['Science', 'Nature', 'Documentry'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591436/queens_gambit_ktxjdh.jpg',
        "trailerURL": '',
    },
    {
        "name": 'Our Planet',
        "genre": ['Science', 'Nature', 'Documentry'],
        "imgURL": 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591436/our_planet_qyer5i.jpg',
        "trailerURL": '',
    },
]


// const movies = [{
//         "kind": "youtube#searchResult",
//         "etag": "QW5DGmpS5dAR_EiA5ECupmd1uHM",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "oM-Nw9XzqVM"
//         },
//         "snippet": {
//             "publishedAt": "2020-10-28T14:00:00Z",
//             "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
//             "title": "The White Tiger | Official Teaser Trailer | Netflix",
//             "description": "From acclaimed writer-director Ramin Bahrani comes the epic journey of a poor Indian driver (Adarsh Gourav) who uses his wit and cunning to break free from ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/oM-Nw9XzqVM/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/oM-Nw9XzqVM/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/oM-Nw9XzqVM/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "Netflix",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-10-28T14:00:00Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "etag": "3LGgQumI6W80tZFqvfNARbpaA-g",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "DXUUqr3AFKs"
//         },
//         "snippet": {
//             "publishedAt": "2020-10-27T12:00:01Z",
//             "channelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
//             "title": "THE MIDNIGHT SKY starring George Clooney | Official Trailer | Netflix",
//             "description": "Our humanity always endures. This post-apocalyptic tale follows Augustine (George Clooney), a lonely scientist in the Arctic, as he races to stop Sully (Felicity ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/DXUUqr3AFKs/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/DXUUqr3AFKs/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/DXUUqr3AFKs/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "Netflix",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-10-27T12:00:01Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "etag": "jueR0_gdUiAqanKLlG9mNHwPSFE",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "GkKenPum1ts"
//         },
//         "snippet": {
//             "publishedAt": "2020-10-27T20:26:18Z",
//             "channelId": "UCi8e0iOVk1fEOogdfu4YgfA",
//             "title": "Love, Weddings &amp; Other Disasters Trailer #1 (2020)",
//             "description": "Check out the official Love, Weddings & Other Disasters Trailer starring Diane Keaton! Let us know what you think in the comments below. ▻ Visit: ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/GkKenPum1ts/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/GkKenPum1ts/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/GkKenPum1ts/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "Movieclips Trailers",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-10-27T20:26:18Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "etag": "LME4_X2_vSYl_xCG4F_ak2j0KTY",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "WlxuSILjRl0"
//         },
//         "snippet": {
//             "publishedAt": "2020-10-27T17:00:16Z",
//             "channelId": "UCOpcACMWblDls9Z6GERVi1A",
//             "title": "Honest Trailers | The Mandalorian",
//             "description": "Wow! You love watching movies almost as much as we love protecting your stuff. When you want the real deal — like a good neighbor, State Farm is there.",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/WlxuSILjRl0/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/WlxuSILjRl0/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/WlxuSILjRl0/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "Screen Junkies",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-10-27T17:00:16Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "etag": "pcOiL8SlA8KA4cuCyXSuLkpBrQw",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "mX4mvN1v4lc"
//         },
//         "snippet": {
//             "publishedAt": "2020-10-28T06:47:32Z",
//             "channelId": "UCw82_BrKru_CjqIuTzf04Kw",
//             "title": "Bicchoo Ka Khel | Official Trailer | Starring Divyenndu, Anshul Chauhan | ALTBalaji",
//             "description": "Sunn liye ho na, yeh “Bachenge nahi, system inhe khud bachayega” Par yeh aise kaise hoga? Aur hoga toh bohot bada bawaal hoga! Taiyaar ho jaaiye ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/mX4mvN1v4lc/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/mX4mvN1v4lc/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/mX4mvN1v4lc/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "ALTBalaji",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-10-28T06:47:32Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "etag": "Aq-rSZ9RYSW3y6cfQlipTtgNWP8",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "rPcPBIflGnY"
//         },
//         "snippet": {
//             "publishedAt": "2020-10-27T23:00:11Z",
//             "channelId": "UCwUNbp_4Y2Ry-asyerw2jew",
//             "title": "GNTM 3 - trailer Δευτέρα 2.11.2020",
//             "description": "StarChannelTv #GNTMgr Greece's Next Top Model - 3ος Κύκλος, Δευτέρα - Τρίτη στις 21:00. Δες ολόκληρα επεισόδια: https://www.star.gr/tv/psychagogia Like us ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/rPcPBIflGnY/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/rPcPBIflGnY/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/rPcPBIflGnY/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "StarTvGreece",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-10-27T23:00:11Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "etag": "mY0__fzg0qMlVY0kHUHdlF3yu0U",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "TUHoPw6AT1o"
//         },
//         "snippet": {
//             "publishedAt": "2020-10-28T11:41:18Z",
//             "channelId": "UCOL10n-as9dXO2qtjjFUQbQ",
//             "title": "CATWEAZLE Trailer German Deutsch (2021)",
//             "description": "Offizieller \"Catweazle\" Trailer Deutsch German 2021 | Abonnieren ➤ http://abo.yt/kc | (OT: Catweazle) Movie Trailer | Kinostart: 11 Mär 2021 | Filminfos ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/TUHoPw6AT1o/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/TUHoPw6AT1o/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/TUHoPw6AT1o/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "KinoCheck",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-10-28T11:41:18Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "etag": "FX0lOQMLh5tH1ElSZQruMXmpKcA",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "vnJfIiKA7l0"
//         },
//         "snippet": {
//             "publishedAt": "2020-10-27T12:12:46Z",
//             "channelId": "UCT0hbLDa-unWsnZ6Rjzkfug",
//             "title": "THE MIDNIGHT SKY Trailer (2020)",
//             "description": "Trailer for The Midnight Sky starring George Clooney.",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/vnJfIiKA7l0/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/vnJfIiKA7l0/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/vnJfIiKA7l0/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "FilmSelect Trailer",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-10-27T12:12:46Z"
//         }
//     }
// ]


// function _makeId(length = 6) {
//     var txt = '';
//     var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     for (var i = 0; i < length; i++) {
//         txt += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return txt;
// }

// const moviePreviews = [{
//         name: 'A Life on Earth',
//         genre: ['Science', 'Nature', 'Documentry'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1603995113/a_life_on_earth_fe6k0f.jpg',
//         trailerURL: 'https://res.cloudinary.com/da0i9wy5t/video/upload/v1604244296/David_Attenborough__A_Life_on_Our_Planet_-_trailer_qfftk3_wzqr0y.mp4',
//         id: _makeId()
//     },
//     {
//         name: 'Matrix',
//         genre: ['Mind-Bending'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1603995114/matrix_rxo5xv.png',
//         trailerURL: 'https://res.cloudinary.com/da0i9wy5t/video/upload/v1604236193/The_Matrix_1999_Official_Trailer_1_-_Sci-Fi_Action_Movie_gjfqr4.mp4',
//         id: _makeId()
//     },
//     {
//         name: 'Our Planet',
//         genre: ['Science', 'Nature', 'Documentry'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1603995114/our_planet_wmrcjt.jpg',
//         trailerURL: 'https://res.cloudinary.com/da0i9wy5t/video/upload/v1604244162/Our_Planet___Official_Trailer_HD___Netflix_fo8g2c.mp4',
//         id: _makeId()
//     },
//     {
//         name: 'Peaky Blinders',
//         genre: ['Science', 'Nature', 'Documentry'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1603995114/peaky_blinders_x4rinb.jpg',
//         trailerURL: '',
//         id: _makeId()
//     },
//     {
//         name: 'The Ballad of Buster Scruggs',
//         genre: ['Science', 'Nature', 'Documentry'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1603995113/buster_scruggs_zzfbao.jpg',
//         trailerURL: '',
//         id: _makeId()
//     },
//     {
//         name: 'Money Heist',
//         genre: ['Science', 'Nature', 'Documentry'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1603995113/money_heist_r2fyhn.jpg',
//         trailerURL: '',
//         id: _makeId()
//     },
//     {
//         name: 'Explained',
//         genre: ['Science', 'Nature', 'Documentry'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1603995113/explained_crqy8r.jpg',
//         trailerURL: '',
//         id: _makeId()
//     },
//     {
//         name: 'Inside Bill\'s Brain',
//         genre: ['Science', 'Nature', 'Documentry'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1603995113/bill_gates_zukmvb.jpg',
//         trailerURL: '',
//         id: _makeId()
//     },



//     {
//         name: 'History 101',
//         genre: ['Science', 'Nature', 'Documentry'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591435/history_101_j6lbna.jpg',
//         trailerURL: '',
//         id: _makeId()
//     },
//     {
//         name: 'Lucifer',
//         genre: ['Science', 'Nature', 'Documentry'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591435/lucifer_yrp3z1.jpg',
//         trailerURL: '',
//         id: _makeId()
//     },
//     {
//         name: 'Night On Earth',
//         genre: ['Science', 'Nature', 'Documentry'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591435/night_on_earth_q5utfd.jpg',
//         trailerURL: '',
//         id: _makeId()
//     },
//     {
//         name: 'Don\'t F*** With Cats',
//         genre: ['Science', 'Nature', 'Documentry'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591435/dont_f_with_cats_bit5ia.jpg',
//         trailerURL: '',
//         id: _makeId()
//     },
//     {
//         name: 'Connected',
//         genre: ['Science', 'Nature', 'Documentry'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591435/connected_zxwn0b.jpg',
//         trailerURL: '',
//         id: _makeId()
//     },
//     {
//         name: 'Narcos',
//         genre: ['Science', 'Nature', 'Documentry'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591435/narcos_sskgtr.jpg',
//         trailerURL: '',
//         id: _makeId()
//     },
//     {
//         name: 'Tiger King',
//         genre: ['Science', 'Nature', 'Documentry'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591435/tiger_king_t9oy7x.jpg',
//         trailerURL: '',
//         id: _makeId()
//     },
//     {
//         name: 'The Witcher',
//         genre: ['Science', 'Nature', 'Documentry'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591436/the_witcher_d0yors.jpg',
//         trailerURL: '',
//         id: _makeId()
//     },
//     {
//         name: 'Queen\'s Gambit',
//         genre: ['Science', 'Nature', 'Documentry'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591436/queens_gambit_ktxjdh.jpg',
//         trailerURL: '',
//         id: _makeId()
//     },
//     {
//         name: 'Our Planet',
//         genre: ['Science', 'Nature', 'Documentry'],
//         imgURL: 'https://res.cloudinary.com/da0i9wy5t/image/upload/v1604591436/our_planet_qyer5i.jpg',
//         trailerURL: '',
//         id: _makeId()
//     },
// ]
