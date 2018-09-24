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
        },
        {
          id: 14,
          type: "human",
          imgSrc: "http://www.gstatic.com/tv/thumb/tvbanners/446158/p446158_b_v8_ag.jpg",
          votes: 235
        },
        {
          id: 15,
          type: "panda",
          imgSrc: "https://qph.fs.quoracdn.net/main-qimg-05f6829b26ebfeeabf90262554461fe3-c",
          votes: 235
        },
        {
          id: 16,
          type: "panda",
          imgSrc: "https://img.rezdy.com/PRODUCT_IMAGE/71955/giant_panda1_706x456_lg.jpg",
          votes: 235
        },
        {
          id: 17,
          type: "panda",
          imgSrc: "https://az616578.vo.msecnd.net/files/2016/05/13/635987777452272816-693802622_panda7.jpg",
          votes: 235
        },
        {
          id: 18,
          type: "panda",
          imgSrc: "https://c1.staticflickr.com/6/5539/9128322778_950ac71c79.jpg",
          votes: 235
        },
        {
          id: 19,
          type: "panda",
          imgSrc: "https://res.cloudinary.com/teepublic/image/private/s--IhT1YGWj--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1486569368/production/designs/1195431_1.jpg",
          votes: 235
        },
        {
          id: 20,
          type: "dog",
          imgSrc: "https://1.bp.blogspot.com/-mvQpqYY17jw/V6OhoJ1PS0I/AAAAAAAAEuc/IO45oD8MTgMLx7-MQmfJAzmuF7QLO8v8wCLcB/s1600/about-Brussels-Griffon.jpg",
          votes: 235
        },
        {
          id: 21,
          type: "dog",
          imgSrc: "http://dogsaholic.com/wp-content/uploads/2018/06/Pomsky-standing-810x595.jpg",
          votes: 235
        },
        {
          id: 22,
          type: "dog",
          imgSrc: "http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/shiba-inu_01_lg.jpg",
          votes: 235
        },
        {
          id: 23,
          type: "dog",
          imgSrc: "https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2017/10/goldie.jpg",
          votes: 235
        },
        {
          id: 24,
          type: "cat",
          imgSrc: "https://zodab.com/wp-content/uploads/2018/06/cute-kitten-that-has-fur-like-a-leopard.jpg",
          votes: 235
        },
        {
          id: 25,
          type: "cat",
          imgSrc: "https://cdn1-www.cattime.com/assets/uploads/gallery/american-curl-cats-and-kittens/american-curl-cats-and-kittens-5.jpg",
          votes: 235
        },
        {
          id: 26,
          type: "cat",
          imgSrc: "https://vetstreet.brightspotcdn.com/dims4/default/3acf9d1/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fe7%2F72%2F0e9bf32843e4a3fef50b9339cea5%2FAmerican-Shorthair-AP-1RPWID-645sm3614.jpg",
          votes: 235
        },
        {
          id: 27,
          type: "cat",
          imgSrc: "https://www.catster.com/wp-content/uploads/2018/01/Ragdoll-cat-on-blue-backdrop-.jpg",
          votes: 235
        },
        {
          id: 28,
          type: "aye aye",
          imgSrc: "https://i.pinimg.com/originals/79/90/12/799012be4e154034c42ffafb8c24ab74.jpg",
          votes: 235
        },
        {
          id: 29,
          type: "sloth",
          imgSrc: "https://www.catster.com/wp-content/uploads/2018/01/Ragdoll-cat-on-blue-backdrop-.jpg",
          votes: 235
        },
        {
          id: 30,
          type: "sloth",
          imgSrc: "https://i.ytimg.com/vi/aaqzPMOd_1g/maxresdefault.jpg",
          votes: 235
        }
      ])
    })
}


