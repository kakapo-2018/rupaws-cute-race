exports.seed = function (knex, Promise) {
  return knex('animals').del()
    .then(function () {
      return knex('animals').insert([
        {
          id: 1,
          type: "panda",
          imgSrc: "http://images4.fanpop.com/image/photos/22100000/Cute-Pandas-pandas-22122892-400-280.jpg",
          votes: 5
        },

        {
          id: 2,
          type: "dog",
          imgSrc: "https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg",
          votes: 45
        },

        {
          id: 3,
          type: "cat",
          imgSrc: "https://i.pinimg.com/originals/81/6d/a5/816da533638aee63cfbd315ea24cccbd.jpg",
          votes: 11
        },

        {
          id: 4,
          type: "sloth",
          imgSrc: "https://i.imgur.com/zKph6Ua.jpg",
          votes: 23
        },

        {
          id: 5,
          type: "aye aye",
          imgSrc: "https://i.ytimg.com/vi/VSgxQaEj_m4/hqdefault.jpg",
          votes: 6
        },
        {
          id: 6,
          type: "human",
          imgSrc: "https://underneathestarz.files.wordpress.com/2015/01/ch.jpg?w=640",
          votes: 55
        },
        {
          id: 7,
          type: "human",
          imgSrc: "https://celebritypets.net/wp-content/uploads/2017/01/David-Beckham.jpg",
          votes: 2
        },
        {
          id: 8,
          type: "human",
          imgSrc: "https://media1.popsugar-assets.com/files/thumbor/zFcp-2naGA1GFScVY7PVHfhpI0Y/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/07/13/034/n/1922398/b3679fe95b493a6b4d4304.44442953_/i/Kim-Kardashian.jpg",
          votes: 56
        },
        {
          id: 9,
          type: "human",
          imgSrc: "https://pmctvline2.files.wordpress.com/2017/02/benedict-cumberbatch-melrose-showtime-miniseries.jpg?w=620",
          votes: 109
        },
        {
          id: 10,
          type: "human",
          imgSrc: "https://hips.hearstapps.com/rbk.h-cdn.co/assets/16/15/1460508650-gallery-1460384978-redbook-zooey-deschanel-02.jpg",
          votes: 23
        },
        {
          id: 11,
          type: "aye aye",
          imgSrc: "https://hips.hearstapps.com/rbk.h-cdn.co/assets/16/15/1460508650-gallery-1460384978-redbook-zooey-deschanel-02.jpg",
          votes: 20
        },
        {
          id: 12,
          type: "aye aye",
          imgSrc: "https://hips.hearstapps.com/rbk.h-cdn.co/assets/16/15/1460508650-gallery-1460384978-redbook-zooey-deschanel-02.jpg",
          votes: 2
        },
        {
          id: 13,
          type: "aye aye",
          imgSrc: "https://hips.hearstapps.com/rbk.h-cdn.co/assets/16/15/1460508650-gallery-1460384978-redbook-zooey-deschanel-02.jpg",
          votes: 235
        }
      ])
    })
}


