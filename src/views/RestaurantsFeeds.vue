<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import NewestRestaurants from "../components/NewestRestaurants";
import NewestComments from "../components/NewestComments";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Jamey Russel",
      tel: "838.760.4249 x954",
      address: "721 Bartoletti Haven",
      opening_hours: "08:00",
      description: "Cum et neque ad ipsam enim odio fugiat.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=81.5512085306672",
      viewCounts: 0,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
    },
    {
      id: 2,
      name: "Caterina Morar",
      tel: "1-430-538-7417 x3469",
      address: "16892 Hand Expressway",
      opening_hours: "08:00",
      description:
        "Beatae voluptas ipsum. Et impedit dicta quasi inventore voluptate ut. Vero corrupti suscipit architecto alias non.\n \rEnim perferendis quos nulla. Rem temporibus illum minima neque harum quia. In quia temporibus culpa id. Vel magnam iste hic recusandae. Quas est nihil ratione.\n \rEum deserunt minus rerum placeat magni. Enim fuga et sint eos qui. Ut sunt rerum. Aliquam et minus vel aliquid quidem nemo unde vel aliquid.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.45351268439313",
      viewCounts: 0,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
    },
    {
      id: 3,
      name: "Brant Ortiz",
      tel: "943.422.0398 x78342",
      address: "360 Dashawn Dam",
      opening_hours: "08:00",
      description:
        "Ut molestias sed mollitia est similique dolorem ex animi corrupti.\nEt vel autem qui ducimus dolor quis laborum.\nAut ducimus molestias aut nostrum ab alias necessitatibus temporibus.\nNon suscipit omnis in ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=23.712621447803393",
      viewCounts: 0,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
    },
    {
      id: 4,
      name: "Jacey Roob",
      tel: "(118) 919-3081 x3930",
      address: "77435 Isom Plains",
      opening_hours: "08:00",
      description:
        "Ab incidunt est. Impedit consequuntur nisi perferendis fuga quidem. Consequatur magnam rerum ut in dolorem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=23.148296446125794",
      viewCounts: 0,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
    },
    {
      id: 5,
      name: "Elinor Romaguera",
      tel: "(761) 758-1383",
      address: "8450 Jakubowski Falls",
      opening_hours: "08:00",
      description: "itaque",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=10.162113020802144",
      viewCounts: 0,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
    },
    {
      id: 6,
      name: "Veronica Haley",
      tel: "(439) 746-9236 x1486",
      address: "73576 Goodwin Trail",
      opening_hours: "08:00",
      description: "numquam neque et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.75774205701012",
      viewCounts: 0,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
    },
    {
      id: 7,
      name: "Karen Effertz",
      tel: "551.040.9117 x899",
      address: "195 Felton Bypass",
      opening_hours: "08:00",
      description:
        "Fugit aliquam aut voluptatem autem non harum ipsa recusandae numquam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.2603079577599",
      viewCounts: 0,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
    },
    {
      id: 8,
      name: "Ora Kuphal DDS",
      tel: "(558) 690-4353",
      address: "7295 Ward Plaza",
      opening_hours: "08:00",
      description: "atque omnis quod",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=88.15179711153489",
      viewCounts: 0,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
    },
    {
      id: 9,
      name: "Tanner McGlynn",
      tel: "(443) 971-1240",
      address: "30103 Citlalli Brooks",
      opening_hours: "08:00",
      description:
        "Qui ut ipsum consequuntur quae voluptatem est odit ea. Velit inventore sit velit voluptas vel error. Rerum qui quidem totam debitis et. Dicta quas expedita labore voluptates. Et sit voluptas mollitia at laborum quasi recusandae accusantium harum. Necessitatibus beatae distinctio odit odio placeat iure.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.935678644763634",
      viewCounts: 0,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
    },
    {
      id: 10,
      name: "Carmelo Rowe",
      tel: "076.903.5925 x11039",
      address: "561 Barrows Street",
      opening_hours: "08:00",
      description: "Omnis qui delectus nisi ducimus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.539741966254463",
      viewCounts: 0,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
    },
  ],
  comments: [
    {
      id: 6,
      text: "Natus ipsa et fuga.",
      UserId: 1,
      RestaurantId: 6,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$kHBy5vpGjBIHKkc0EHSgiu6GDzSK8FSGY03HBA8u5AEQEmFCr6m8a",
        isAdmin: true,
        image: null,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
      Restaurant: {
        id: 6,
        name: "Veronica Haley",
        tel: "(439) 746-9236 x1486",
        address: "73576 Goodwin Trail",
        opening_hours: "08:00",
        description: "numquam neque et",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=35.75774205701012",
        viewCounts: 0,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 29,
      text: "Id sunt dolores qui minima.",
      UserId: 1,
      RestaurantId: 29,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$kHBy5vpGjBIHKkc0EHSgiu6GDzSK8FSGY03HBA8u5AEQEmFCr6m8a",
        isAdmin: true,
        image: null,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
      Restaurant: {
        id: 29,
        name: "Mattie Pacocha",
        tel: "343-665-8134",
        address: "7499 Lawson Course",
        opening_hours: "08:00",
        description:
          "Ut est quos blanditiis. Saepe facilis commodi odit ratione illum vitae quisquam consequatur.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=84.97784093896772",
        viewCounts: 0,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 51,
      text: "Minus in accusamus eum perspiciatis voluptatem facere ut.",
      UserId: 1,
      RestaurantId: 1,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$kHBy5vpGjBIHKkc0EHSgiu6GDzSK8FSGY03HBA8u5AEQEmFCr6m8a",
        isAdmin: true,
        image: null,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
      Restaurant: {
        id: 1,
        name: "Jamey Russel",
        tel: "838.760.4249 x954",
        address: "721 Bartoletti Haven",
        opening_hours: "08:00",
        description: "Cum et neque ad ipsam enim odio fugiat.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=81.5512085306672",
        viewCounts: 0,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 72,
      text: "Quae sed deleniti et.",
      UserId: 1,
      RestaurantId: 22,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$kHBy5vpGjBIHKkc0EHSgiu6GDzSK8FSGY03HBA8u5AEQEmFCr6m8a",
        isAdmin: true,
        image: null,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
      Restaurant: {
        id: 22,
        name: "Dakota Hamill",
        tel: "625.538.8023 x45886",
        address: "11712 Raynor Hollow",
        opening_hours: "08:00",
        description: "odio et nobis",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=89.84392670198966",
        viewCounts: 0,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 98,
      text: "Id soluta est illo.",
      UserId: 1,
      RestaurantId: 48,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$kHBy5vpGjBIHKkc0EHSgiu6GDzSK8FSGY03HBA8u5AEQEmFCr6m8a",
        isAdmin: true,
        image: null,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
      Restaurant: {
        id: 48,
        name: "Dereck Ledner",
        tel: "(439) 453-0972 x53612",
        address: "665 Clark Hills",
        opening_hours: "08:00",
        description: "et",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=90.43103995641188",
        viewCounts: 0,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 116,
      text: "Tempora accusamus optio.",
      UserId: 1,
      RestaurantId: 16,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$kHBy5vpGjBIHKkc0EHSgiu6GDzSK8FSGY03HBA8u5AEQEmFCr6m8a",
        isAdmin: true,
        image: null,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
      Restaurant: {
        id: 16,
        name: "Raheem Moen",
        tel: "1-770-144-5691",
        address: "50272 Okuneva Fords",
        opening_hours: "08:00",
        description:
          "At maiores asperiores ut mollitia voluptatibus. Quam facilis ut et quia voluptates voluptatem sed nihil. Veritatis autem consequatur optio accusamus ut iste.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=41.53491225825681",
        viewCounts: 0,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 134,
      text: "Culpa facilis nam a vitae officia amet nulla alias qui.",
      UserId: 1,
      RestaurantId: 34,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$kHBy5vpGjBIHKkc0EHSgiu6GDzSK8FSGY03HBA8u5AEQEmFCr6m8a",
        isAdmin: true,
        image: null,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
      Restaurant: {
        id: 34,
        name: "Raymundo Lueilwitz",
        tel: "846-049-5018 x158",
        address: "7286 Mozell Shores",
        opening_hours: "08:00",
        description:
          "Aut labore est fuga aut aliquid ducimus. Vero quod magni sed aut aliquam sunt.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=88.61560223782018",
        viewCounts: 0,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 148,
      text: "Minus perspiciatis eveniet eum illum et architecto.",
      UserId: 1,
      RestaurantId: 48,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$kHBy5vpGjBIHKkc0EHSgiu6GDzSK8FSGY03HBA8u5AEQEmFCr6m8a",
        isAdmin: true,
        image: null,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
      Restaurant: {
        id: 48,
        name: "Dereck Ledner",
        tel: "(439) 453-0972 x53612",
        address: "665 Clark Hills",
        opening_hours: "08:00",
        description: "et",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=90.43103995641188",
        viewCounts: 0,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 14,
      text: "Omnis sit molestiae tempora assumenda adipisci.",
      UserId: 2,
      RestaurantId: 14,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$rkzaj69m3JdCNIFVzfOIGuRPWh6VAbgQAWy/Rf7hlkfrUUAT1p9My",
        isAdmin: false,
        image: null,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
      Restaurant: {
        id: 14,
        name: "Aurelio Raynor",
        tel: "457-272-4642",
        address: "3932 Murazik Courts",
        opening_hours: "08:00",
        description: "voluptas",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=45.138206275171974",
        viewCounts: 0,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 43,
      text: "Quis libero ut ad eos quia tenetur blanditiis magni.",
      UserId: 2,
      RestaurantId: 43,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$rkzaj69m3JdCNIFVzfOIGuRPWh6VAbgQAWy/Rf7hlkfrUUAT1p9My",
        isAdmin: false,
        image: null,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
      Restaurant: {
        id: 43,
        name: "Dr. Mohammad Dietrich",
        tel: "442-447-5001",
        address: "0077 Eichmann Station",
        opening_hours: "08:00",
        description:
          "Enim aut alias possimus est sint et. Nobis et facere nam. Nostrum dolor sint suscipit dolorem sit similique voluptatem voluptas. Rerum quia velit nihil velit voluptates blanditiis pariatur.\n \rCommodi et et. Sint quidem quisquam voluptate aspernatur aliquid consectetur exercitationem explicabo non. Ut minus repellendus. Vero qui officia quae. Quo quia dolore et est voluptas commodi. Distinctio nisi eligendi fuga molestiae eveniet dolorum aut earum.\n \rMagnam neque sint. Ex ea facilis voluptates autem quasi. Repellat similique eum maxime. Non cum veritatis omnis quis et quia voluptatem et facere. Magnam ratione maiores dignissimos voluptates aut nam. Iste expedita aspernatur ad sed beatae.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=40.89083916644765",
        viewCounts: 0,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        CategoryId: 1,
      },
    },
  ],
};

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants;
      this.comments = dummyData.comments.filter(comment => comment.Restaurant && comment.text);
    },
  },
};
</script>