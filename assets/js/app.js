const discount = [
  {
    name: "About The Discount",
    childs: [
      {
        name: "The Founder's Message",
        link: "https://google.com",
      },
      {
        name: "The Tales",
        link: "https://google.com",
      },
    ],
  },
  {
    name: "Hari Raya Eid",
    childs: [
      {
        name: "When & How",
        link: "https://google.com",
      },
      {
        name: "Gifts & Takeaways",
        link: "https://google.com",
      },
      {
        name: "Hijab Giveaway",
        link: "https://google.com",
      },
    ],
  },
  {
    name: "New Year",
    childs: [
      {
        name: "What You Get",
        link: "https://google.com",
      },
      {
        name: "Leftovers?",
        link: "https://google.com",
      },
      {
        name: "Black Friday",
        link: "https://google.com",
      },
      {
        name: "Coupon Discounts",
        link: "https://google.com",
      },
    ],
  },
  {
    name: "Hari Qurban",
    childs: [
      {
        name: "Free Gifts",
        link: "https://google.com",
      },
      {
        name: "Up to 30% Discount!",
        link: "https://google.com",
      },
    ],
  },
  {
    name: "Hijriyah",
    childs: [
      {
        name: "Celebration Giveaway",
        link: "https://google.com",
      },
      {
        name: "Hijri Gifts",
        link: "https://google.com",
      },
      {
        name: "Open Questions",
        link: "https://google.com",
      },
    ],
  },
  {
    name: "Hajj Discount",
    childs: [
      {
        name: "Ihram Outfit Giveaway",
        link: "https://google.com",
      },
    ],
  },
];

const voucher = [
  {
    name: "SKopun",
    childs: [
      {
        name: "How to Get?",
        link: "https://google.com",
      },
      {
        name: "All What You Need To Know",
        link: "https://google.com",
      },
    ],
  },
  {
    name: "Batikupon",
    childs: [
      {
        name: "How to Get?",
        link: "https://google.com",
      },
      {
        name: "Q & A",
        link: "https://google.com",
      },
    ],
  },
  {
    name: "The Legend",
    childs: [
      {
        name: "Our Legendary Voucher",
        link: "https://google.com",
      },
      {
        name: "Ask Us",
        link: "https://google.com",
      },
      {
        name: "Hived!",
        link: "https://google.com",
      },
    ],
  },
  {
    name: "CoffeePon",
    childs: [
      {
        name: "Sneak into Our Coffeepon Bootcamp",
        link: "https://google.com",
      },
      {
        name: "Hiped!",
        link: "https://google.com",
      },
      {
        name: "Plant your CofeePon Now!",
        link: "https://google.com",
      },
    ],
  },
];

const trending = [
  {
    name: "Batik Indonesia",
    childs: [
      {
        name: "This Week",
        link: "https://google.com",
      },
      {
        name: "Last Week",
        link: "https://google.com",
      },
      {
        name: "This Month",
        link: "https://google.com",
      },
    ],
  },
  {
    name: "Our Hijab Collections",
    childs: [
      {
        name: "Bella Square",
        link: "https://google.com",
      },
      {
        name: "Hijans",
        link: "https://google.com",
      },
      {
        name: "Rabbani",
        link: "https://google.com",
      },
      {
        name: "Zoya",
        link: "https://google.com",
      },
      {
        name: "Elzatta",
        link: "https://google.com",
      },
      {
        name: "Others",
        link: "https://google.com",
      },
    ],
  },
  {
    name: "Our T-shirts",
    childs: [
      {
        name: "Bandung Collections",
        link: "https://google.com",
      },
      {
        name: "One Third Sleeves",
        link: "https://google.com",
      },
      {
        name: "Bilabong",
        link: "https://google.com",
      },
    ],
  },
  {
    name: "Dian Pelangi Collection",
    childs: [
      {
        name: "Our Relationship",
        link: "https://google.com",
      },
      {
        name: "What is it all about?",
        link: "https://google.com",
      },
      {
        name: "Spill it out!",
        link: "https://google.com",
      },
    ],
  },
];

const events = [
  {
    name: "Nusantaraku",
    childs: [
      {
        name: "The Wonderland",
        link: "https://google.com",
      },
      {
        name: "Sumut Collections",
        link: "https://google.com",
      },
    ],
  },
  {
    name: "Ketupat Raya",
    childs: [
      {
        name: "What is it?",
        link: "https://google.com",
      },
      {
        name: "Ketupat Designs",
        link: "https://google.com",
      },
      {
        name: "Rabbani",
        link: "https://google.com",
      },
      {
        name: "Zoya",
        link: "https://google.com",
      },
    ],
  },
];

const gebyar = [
  {
    name: "Beduk Party",
    childs: [
      {
        name: "What to Order?",
        link: "https://google.com",
      },
      {
        name: "Don' Miss It!",
        link: "https://google.com",
      },
      {
        name: "You Rock on Hari Raya!",
        link: "https://google.com",
      },
    ],
  },
  {
    name: "Merah Putih",
    childs: [
      {
        name: "Batik Showcase",
        link: "https://google.com",
      },
      {
        name: "Display of The Beaches",
        link: "https://google.com",
      },
    ],
  },
];

const app = Vue.createApp({
  data() {
    return {
      menu: trending,
    };
  },
  methods: {
    clickMenu(val) {
      switch (val) {
        case "discount":
          this.menu = [...discount];
          break;
        case "voucher":
          this.menu = [...voucher];
          break;
        case "trending":
          this.menu = [...trending];
          break;
        case "events":
          this.menu = [...events];
          break;
        case "gebyar":
          this.menu = [...gebyar];
          break;
      }
    },
  },
});

app.mount("#menu");

const app2 = Vue.createApp({
  data() {
    return {
      schedule: [
        {
          date: "19",
          month: "Sep 2021",
          events: "Virtual Batik Fashion Show in Progress @2pm via Zoom",
        },
        {
          date: "24",
          month: "Sep 2021",
          events: "Homecoming with Maher Zain @7pm via Zoom",
        },
        {
          date: "10",
          month: "Oct 2021",
          events: "Coronavirus Breakdown with dr. El Kahitna @7pm via Zoom",
        },
      ],
    };
  },
});

app2.mount("#brochure");
