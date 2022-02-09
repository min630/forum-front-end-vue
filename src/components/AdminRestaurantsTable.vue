<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link :to="{name: 'admin-restaurant', params: {id: restaurant.id}}" class="btn btn-link">
  Show
</router-link>

          <router-link :to="{name: 'admin-restaurant-edit', params: {id: restaurant.id}}" class="btn btn-link">Edit</router-link>

          <button type="button" class="btn btn-link" @click.stop.prevent="deleteRestaurant(restaurant.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
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
      viewCounts: 1,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-02-06T10:29:45.000Z",
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
    {
      id: 11,
      name: "Garfield Hayes",
      tel: "(934) 021-6461 x958",
      address: "925 Veronica Coves",
      opening_hours: "08:00",
      description:
        "Qui voluptas temporibus quod quod. Fugit numquam fuga rerum vel. Nisi blanditiis est aut quae facilis quia rerum aut. Quo quas quidem dolor nulla quis eaque unde atque. Illum facere impedit. Sint et qui corporis autem asperiores sint.\n \rMaxime ut sit ex nisi consequatur sit. Et iure eum eos mollitia sit officiis natus et modi. Neque eius voluptate perferendis.\n \rAlias facere ut sed voluptatem. Dolorem laudantium consequuntur doloribus et. Ut assumenda sint eaque quis laudantium quaerat. Error eum suscipit est provident. Qui dolores vel rerum maxime dolorum neque voluptatem asperiores. Facilis quidem ut dignissimos aut at aspernatur deserunt sapiente.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.53226009987668",
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
      id: 12,
      name: "Ashton Pouros",
      tel: "610-660-6757",
      address: "809 Durgan Mountains",
      opening_hours: "08:00",
      description:
        "Sed aut fuga ut molestiae veritatis maxime velit vero ut. Amet sed enim ut blanditiis corrupti ab natus sit ad. Sapiente voluptatem sint impedit repellat et hic quo fuga aspernatur. Impedit qui sit iste ex. Rem quia totam corporis delectus omnis voluptatem qui rerum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.83627474920897",
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
      id: 13,
      name: "Garrett Hintz",
      tel: "202.953.0125",
      address: "20073 Lang Estate",
      opening_hours: "08:00",
      description:
        "Magnam quo eos. Aut consequatur repellat sequi possimus magni consectetur et dolores. Ratione et eum et exercitationem minus eum. Eveniet eius tempora nesciunt fugit architecto voluptas repudiandae. Perspiciatis ut veritatis aperiam tempora numquam. Qui doloribus hic aliquid repudiandae.\n \rUt natus sint qui facilis quis ut dolor ab molestiae. Alias sunt at tempora non. Architecto ea dolor et voluptas est tenetur enim ipsa. Nemo possimus quidem. Quis autem illum ut sed facere ex voluptate.\n \rNon accusamus est perspiciatis dolores ad. Dicta veniam et. Facilis amet facere quis consequatur fuga explicabo et libero. Sapiente excepturi voluptatum consectetur quas nulla.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.62772731112999",
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
    },
    {
      id: 15,
      name: "Lenore Kovacek",
      tel: "(139) 532-2730",
      address: "38103 Rau Islands",
      opening_hours: "08:00",
      description:
        "Quasi ut voluptate dolore quia adipisci commodi. Ipsa pariatur id et consequatur et vitae aut delectus unde. Ducimus mollitia dolores iure corrupti nobis assumenda.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.597198013336026",
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
    },
    {
      id: 17,
      name: "Deonte Halvorson DDS",
      tel: "200.466.7224 x97259",
      address: "7339 Wiegand Flats",
      opening_hours: "08:00",
      description:
        "Voluptatum quos voluptas cum qui eum doloremque eum. Dicta et ratione enim odit. Dolorem omnis delectus natus qui architecto velit ullam. Deserunt veniam cumque labore autem at.\n \rBlanditiis rerum vel et commodi quos architecto. Voluptas alias expedita cum corrupti. Id hic aliquid consectetur blanditiis iure. Autem sit praesentium. Nostrum tempore libero voluptate.\n \rDistinctio nesciunt mollitia laboriosam at maxime qui dolores assumenda quo. Ratione et expedita quia autem et quia. Et vel sed velit rem dolore repellendus cumque. Aut vitae soluta earum alias illum dolorum qui qui omnis. Veniam modi et perferendis et ipsum ut et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.995441362439273",
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
      id: 18,
      name: "Mr. Chanel Ankunding",
      tel: "1-344-414-5338 x090",
      address: "121 Jabari Meadow",
      opening_hours: "08:00",
      description: "a dolorum accusantium",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.95551848561496",
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
      id: 19,
      name: "Katelin Stracke",
      tel: "(403) 320-4787 x806",
      address: "9618 Gleichner Lock",
      opening_hours: "08:00",
      description:
        "Laborum vel rerum nesciunt veniam.\nMolestias aut minus voluptatem.\nDeserunt sed tempore sed sit recusandae earum.\nDolore quidem consequuntur impedit suscipit molestias autem.\nNon ipsa eos sunt harum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=90.37400671641977",
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
      id: 20,
      name: "Hassan Farrell",
      tel: "139.598.5013",
      address: "2595 Asha Lights",
      opening_hours: "08:00",
      description: "Dignissimos iure odio quis sunt.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.504018599108361",
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
      id: 21,
      name: "Jodie Tromp",
      tel: "086-327-0219",
      address: "332 Freddy Spurs",
      opening_hours: "08:00",
      description:
        "Earum et perferendis quibusdam possimus.\nVitae et doloremque ut.\nExpedita dolores sit deserunt commodi illo.\nQuia autem quo a velit doloremque optio et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.18423127453886",
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
    },
    {
      id: 23,
      name: "Grayson Rogahn",
      tel: "(836) 540-3666 x74597",
      address: "8429 Myrtis Spurs",
      opening_hours: "08:00",
      description: "Dolorem ad ut ea aut quo.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.529679764930506",
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
      id: 24,
      name: "Sandrine Adams",
      tel: "216-706-3616",
      address: "15911 Emard Corners",
      opening_hours: "08:00",
      description: "Et expedita vel quae aut animi voluptas minima.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.56879548795953",
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
      id: 25,
      name: "Zack Toy",
      tel: "581.566.7785 x7730",
      address: "1605 Bergnaum Ridge",
      opening_hours: "08:00",
      description: "et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.8243072461417",
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
      id: 26,
      name: "Edwardo Price",
      tel: "747.597.1739 x999",
      address: "321 Will Pines",
      opening_hours: "08:00",
      description:
        "Blanditiis architecto quibusdam. Dolore qui dolorem facilis repellendus. Id dolores nam ut commodi deserunt. Facere eum porro dolorum sit quo accusamus.\n \rRepudiandae accusamus harum. Expedita ab voluptas neque in suscipit adipisci molestiae quos laborum. Quia in itaque aut voluptas omnis. Repudiandae laborum laudantium ratione et adipisci dicta. Pariatur in qui. Maxime omnis saepe voluptate sed voluptates corporis et.\n \rDolores deserunt consequatur itaque magni vitae eos error dolor iusto. Natus sit assumenda reiciendis accusamus maxime qui. Nihil nobis autem molestiae quis quidem. Quaerat temporibus tempore eaque aut pariatur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.89499568697579",
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
      id: 27,
      name: "Delmer Von",
      tel: "1-238-355-2055 x3580",
      address: "529 Mertz Wall",
      opening_hours: "08:00",
      description:
        "Voluptas nostrum itaque quo non magnam aliquid vel. Ut aspernatur ea et reprehenderit dolor voluptatem deleniti ut eum. Ex optio corrupti repellat vitae delectus distinctio. Id voluptatem atque magni aut voluptatem perferendis quia fuga.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.66986886999828",
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
      id: 28,
      name: "Judson Nienow PhD",
      tel: "1-945-056-7976",
      address: "0659 Hahn Lane",
      opening_hours: "08:00",
      description: "beatae",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.396181807165306",
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
    },
    {
      id: 30,
      name: "Gussie Bailey",
      tel: "1-895-144-7141",
      address: "1238 Jacobson Drive",
      opening_hours: "08:00",
      description:
        "Dolorum temporibus eligendi nam. Doloribus nemo deserunt delectus id accusantium maxime et. Asperiores commodi id soluta et suscipit. Quam commodi incidunt exercitationem aut autem et.\n \rSit adipisci cumque doloribus deserunt saepe. Ut qui sint qui fugit laborum quia repellat. Aut temporibus et quas explicabo aspernatur repellendus ut.\n \rVoluptatem ut quam ab. Quidem ducimus molestias dolores quia dolores quis fugit omnis totam. Ea necessitatibus cum dolorem odio temporibus consectetur sunt odit voluptas. Qui numquam commodi vero. Velit qui iusto voluptate quod culpa.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=94.33944704244144",
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
      id: 31,
      name: "Samantha Muller",
      tel: "1-452-078-8885",
      address: "1659 Ankunding Curve",
      opening_hours: "08:00",
      description:
        "Ipsum consequatur repellat illo placeat nulla molestiae.\nAsperiores numquam dignissimos sapiente cumque et cumque sint rerum ratione.\nIncidunt quia officiis provident quasi ea inventore.\nBeatae voluptatibus sequi facilis quo dolores rerum.\nPerferendis nobis sit magni deserunt iusto et autem cupiditate.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=18.466671752942187",
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
      id: 32,
      name: "Eden Metz",
      tel: "(073) 026-2050 x73217",
      address: "4976 Adonis Terrace",
      opening_hours: "08:00",
      description: "autem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.73023033968404",
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
      id: 33,
      name: "Georgiana Watsica",
      tel: "447.857.0088 x594",
      address: "9674 Jamil Springs",
      opening_hours: "08:00",
      description:
        "Consectetur sit non sunt in aut. Ut voluptas error inventore totam voluptatum. Esse et quod.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=27.669372395832823",
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
    },
    {
      id: 35,
      name: "Mrs. Avis Murazik",
      tel: "(838) 305-8060 x6185",
      address: "5047 Miller Branch",
      opening_hours: "08:00",
      description: "vero consequatur facere",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.79313705526706",
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
      id: 36,
      name: "Colby Olson",
      tel: "929.598.4942 x8559",
      address: "4951 Little Motorway",
      opening_hours: "08:00",
      description: "consequatur libero ipsam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.80686837970913",
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
      id: 37,
      name: "Deonte Huels",
      tel: "986.247.3542",
      address: "264 Dare Crescent",
      opening_hours: "08:00",
      description: "qui",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.944936289772045",
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
      id: 38,
      name: "Annie Smith",
      tel: "216.525.5141 x647",
      address: "93210 Cassin Camp",
      opening_hours: "08:00",
      description: "et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.6365368052748",
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
      id: 39,
      name: "Kaylah Collier",
      tel: "675-935-8205",
      address: "248 Cortez Cliffs",
      opening_hours: "08:00",
      description:
        "Sint sequi tempora dignissimos. Non aut voluptatem velit rerum facere quaerat autem. Quae voluptas qui consequatur voluptate qui cupiditate adipisci cum. Aut pariatur nam similique delectus eum consequuntur mollitia et sit. Quod quidem corrupti nihil incidunt maxime sint commodi.\n \rRepellendus commodi distinctio eum. Et repellendus ipsa quia illum eligendi repellat sed voluptatum inventore. Eos praesentium ipsum delectus officiis et provident aut cum. Voluptas qui quia.\n \rQuis veritatis ut quam odio. Velit nemo non enim accusamus odit magni debitis quia. Blanditiis labore dolorum adipisci quod maxime illum ducimus ratione molestiae. Quia magnam atque. Beatae aliquam esse suscipit laudantium molestias voluptate dolorem. Iure similique qui maxime.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=74.88280883724411",
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
      id: 40,
      name: "Maribel Gaylord",
      tel: "1-968-698-7158 x4865",
      address: "7380 Twila Rest",
      opening_hours: "08:00",
      description: "Hic velit blanditiis suscipit est unde.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=83.14293722985578",
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
      id: 41,
      name: "Helga Ryan",
      tel: "1-229-226-1076",
      address: "8143 Cassin Roads",
      opening_hours: "08:00",
      description: "Reprehenderit ut est ut eius et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.59309116627591",
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
      id: 42,
      name: "Alberto Gislason",
      tel: "841-361-3990 x469",
      address: "878 Gutkowski Viaduct",
      opening_hours: "08:00",
      description: "et cupiditate sunt",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.39951339929468",
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
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
    },
    {
      id: 44,
      name: "Lionel Bartoletti",
      tel: "1-061-893-1613 x41480",
      address: "199 Shayna Vista",
      opening_hours: "08:00",
      description:
        "Voluptatem laborum repellat iste adipisci officia rerum et. Facilis cumque possimus molestiae incidunt architecto alias. Esse dolorem odio corporis minima. Mollitia eum voluptatem odio qui molestiae eos rem ut voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=45.768739124372445",
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
      id: 45,
      name: "Brandon Harvey",
      tel: "(294) 513-0338 x654",
      address: "565 Aliya Route",
      opening_hours: "08:00",
      description:
        "Dignissimos aut qui ut. Eos cum nemo facere voluptate animi dolor quos. Quia cupiditate nulla fugit deleniti ipsam soluta amet. Pariatur sint et reprehenderit dignissimos voluptas voluptatem soluta quia. Et ut et cum molestiae eum et. Sit dicta omnis sint quod.\n \rDolores est recusandae voluptas blanditiis et nostrum magnam. Dolorem nihil facere corrupti ut eveniet laboriosam. Qui in veniam incidunt.\n \rEt consequatur officia maiores amet autem et placeat molestias doloribus. Repudiandae dignissimos et quae deleniti quas odit ipsa aut. Voluptas enim molestiae qui quasi id nam. Eum ea recusandae consequuntur aperiam voluptas consequatur dolor qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=87.2055734291499",
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
      id: 46,
      name: "Ebony Rice MD",
      tel: "971.229.9413",
      address: "9904 Isadore Walks",
      opening_hours: "08:00",
      description:
        "Laudantium perferendis sed odit sapiente nisi magnam est eligendi aut. Enim praesentium libero asperiores minus. Porro quis aut nostrum aut voluptas doloremque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=60.22752247313081",
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
      id: 47,
      name: "Mrs. Paris Rippin",
      tel: "(475) 111-8132",
      address: "85317 Morar Plains",
      opening_hours: "08:00",
      description:
        "Est saepe architecto sint dolores. Ut non et. Beatae aperiam provident a neque dolores. In voluptatem cumque est et ipsa. Aspernatur veniam aliquam ratione. Inventore recusandae nostrum.\n \rSint aut eum ut consequatur id. Qui ea optio natus aspernatur error sit a id architecto. Ut accusantium tenetur perspiciatis hic veniam. Voluptatem dolores voluptas explicabo aperiam error. Ullam sed est ut voluptatem qui et est ut. Ut amet recusandae qui in nihil dolores.\n \rAccusantium culpa aut molestiae. Sit et commodi est aut. Similique nam a sed expedita vel in reiciendis. Dicta expedita blanditiis aspernatur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.42150773830758",
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
      },
    },
    {
      id: 49,
      name: "Brenda Hartmann DDS",
      tel: "(183) 182-6327 x040",
      address: "205 Trent Neck",
      opening_hours: "08:00",
      description: "ab et explicabo",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=81.3306574188189",
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
      id: 50,
      name: "Lorenza Schaden",
      tel: "(766) 218-0644",
      address: "93603 Daugherty Passage",
      opening_hours: "08:00",
      description:
        "Sunt quibusdam nemo. Perspiciatis itaque dolorem. Esse aspernatur blanditiis dolore qui aut. Illum occaecati facilis nihil facilis distinctio voluptas enim ea. Et maiores quod iusto ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.73936591015638",
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
};

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant (restaurantId) {
      this.restaurants = this.restaurants.filter(
        restaurant => restaurant.id !== restaurantId
      )
    }
  },
};
</script>