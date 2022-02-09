<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>


<script>
const dummyData = {
  profile: {
    id: 2,
    name: "user1",
    email: "user1@example.com",
    password: "$2a$10$rkzaj69m3JdCNIFVzfOIGuRPWh6VAbgQAWy/Rf7hlkfrUUAT1p9My",
    isAdmin: false,
    image: "https://loremflickr.com/320/240/food,dessert,restaurant/?random=2",
    createdAt: "2022-01-25T08:32:54.000Z",
    updatedAt: "2022-01-25T08:32:54.000Z",
    Comments: [
      {
        id: 2,
        text: "Tempora id et necessitatibus sit perferendis.",
        UserId: 2,
        RestaurantId: 2,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 3,
        text: "Sequi aut debitis nihil quasi similique quae dolores.",
        UserId: 2,
        RestaurantId: 3,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 7,
        text: "Laborum et molestiae.",
        UserId: 2,
        RestaurantId: 7,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 11,
        text: "Facilis quasi nemo molestias et.",
        UserId: 2,
        RestaurantId: 11,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 12,
        text: "Ipsam amet sapiente delectus.",
        UserId: 2,
        RestaurantId: 12,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 13,
        text: "Optio et atque qui dolor ut excepturi provident vero.",
        UserId: 2,
        RestaurantId: 13,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 14,
        text: "Omnis sit molestiae tempora assumenda adipisci.",
        UserId: 2,
        RestaurantId: 14,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
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
        id: 17,
        text: "Soluta saepe similique rerum.",
        UserId: 2,
        RestaurantId: 17,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 18,
        text: "Dolor occaecati est labore atque aliquid commodi.",
        UserId: 2,
        RestaurantId: 18,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 20,
        text: "Enim quos hic beatae eum ipsam veniam.",
        UserId: 2,
        RestaurantId: 20,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 21,
        text: "Ipsum optio quia soluta ad temporibus.",
        UserId: 2,
        RestaurantId: 21,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 35,
        text: "Possimus eveniet soluta.",
        UserId: 2,
        RestaurantId: 35,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 36,
        text: "Nihil dolores minima dolores voluptas non.",
        UserId: 2,
        RestaurantId: 36,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 38,
        text: "Ad iusto sequi officiis id omnis voluptatem perferendis impedit provident.",
        UserId: 2,
        RestaurantId: 38,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 43,
        text: "Quis libero ut ad eos quia tenetur blanditiis magni.",
        UserId: 2,
        RestaurantId: 43,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
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
      {
        id: 44,
        text: "Eligendi amet atque itaque maiores.",
        UserId: 2,
        RestaurantId: 44,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 47,
        text: "Saepe veritatis rerum.",
        UserId: 2,
        RestaurantId: 47,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 48,
        text: "Molestias culpa in dicta delectus.",
        UserId: 2,
        RestaurantId: 48,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
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
        id: 49,
        text: "Eaque ducimus et.",
        UserId: 2,
        RestaurantId: 49,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 52,
        text: "Laboriosam quidem possimus vitae culpa dolorem aspernatur dolorum repudiandae.",
        UserId: 2,
        RestaurantId: 2,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 55,
        text: "Excepturi vel et temporibus nulla.",
        UserId: 2,
        RestaurantId: 5,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 63,
        text: "Eum et pariatur culpa.",
        UserId: 2,
        RestaurantId: 13,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 69,
        text: "Earum qui dolores id cupiditate hic.",
        UserId: 2,
        RestaurantId: 19,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 71,
        text: "Perspiciatis nulla fugiat explicabo.",
        UserId: 2,
        RestaurantId: 21,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 74,
        text: "Aspernatur soluta aut doloribus id velit ab error.",
        UserId: 2,
        RestaurantId: 24,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 75,
        text: "Odit sapiente excepturi eos id praesentium aspernatur iusto sed.",
        UserId: 2,
        RestaurantId: 25,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 78,
        text: "Tempora non non qui rem omnis.",
        UserId: 2,
        RestaurantId: 28,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 84,
        text: "Quo alias et.",
        UserId: 2,
        RestaurantId: 34,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
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
        id: 85,
        text: "Voluptas hic nam sit.",
        UserId: 2,
        RestaurantId: 35,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 86,
        text: "Ut quo repellendus quis voluptatem eaque aliquid est.",
        UserId: 2,
        RestaurantId: 36,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 87,
        text: "Est maiores veritatis.",
        UserId: 2,
        RestaurantId: 37,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 97,
        text: "Dolorem labore non alias.",
        UserId: 2,
        RestaurantId: 47,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 103,
        text: "Dolor voluptas officiis dolorem natus.",
        UserId: 2,
        RestaurantId: 3,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 105,
        text: "Qui ullam ad ducimus impedit voluptatem libero quos.",
        UserId: 2,
        RestaurantId: 5,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 106,
        text: "Soluta et officia et qui.",
        UserId: 2,
        RestaurantId: 6,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
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
        id: 110,
        text: "Consectetur rem placeat ea et deserunt consequuntur ipsam animi aut.",
        UserId: 2,
        RestaurantId: 10,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 111,
        text: "Est omnis placeat iusto numquam vel veritatis ullam.",
        UserId: 2,
        RestaurantId: 11,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 113,
        text: "Quos soluta vel.",
        UserId: 2,
        RestaurantId: 13,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 119,
        text: "At non quis.",
        UserId: 2,
        RestaurantId: 19,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 121,
        text: "Accusantium itaque sit libero cum.",
        UserId: 2,
        RestaurantId: 21,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 126,
        text: "Esse consequuntur velit ad error totam quam iste.",
        UserId: 2,
        RestaurantId: 26,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 128,
        text: "Dolor explicabo enim quasi officiis fugiat nulla quasi.",
        UserId: 2,
        RestaurantId: 28,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 132,
        text: "Est quia nobis voluptas officiis enim nisi vel velit.",
        UserId: 2,
        RestaurantId: 32,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 135,
        text: "Est rerum accusamus rerum velit consequatur aut assumenda.",
        UserId: 2,
        RestaurantId: 35,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 141,
        text: "Placeat voluptatem est laudantium doloremque molestias doloribus dolores.",
        UserId: 2,
        RestaurantId: 41,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 143,
        text: "Nobis nihil cupiditate commodi.",
        UserId: 2,
        RestaurantId: 43,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
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
      {
        id: 146,
        text: "Reprehenderit natus aut magnam et et non excepturi laudantium repellendus.",
        UserId: 2,
        RestaurantId: 46,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 150,
        text: "Sit occaecati praesentium laudantium et sed ex.",
        UserId: 2,
        RestaurantId: 50,
        createdAt: "2022-01-25T08:32:54.000Z",
        updatedAt: "2022-01-25T08:32:54.000Z",
        Restaurant: {
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
        },
      },
    ],
    FavoritedRestaurants: [],
    Followers: [],
    Followings: [],
  },
  isFollowed: false,
};

export default {
  data() {
    return {
      user: {
        name: "",
        image: "",
      },
    };
  },
  created() {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  methods: {
    fetchUser(userId) {
      console.log("userId", userId);
      const { name, image } = dummyData.profile;
      this.user = {
        ...this.user,
        name,
        image,
      };
    },
    handleFileChange(e) {
      const {files} = e.target
      if(!files.length) {
        //未選擇就清空，或是改成為選擇就return
        this.user.image = "" 
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.user.image = imageURL
      }
    },
    handleSubmit(e) {
      const formData = new FormData(e.target)
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    }
  },
};
</script>