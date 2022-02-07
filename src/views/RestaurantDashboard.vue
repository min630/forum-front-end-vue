<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.Comments.length }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
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
    Comments: [
      {
        id: 1,
        text: "Nemo occaecati exercitationem molestias.",
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
      },
      {
        id: 101,
        text: "Aut porro et consequatur pariatur.",
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
      },
    ],
  },
};
export default {
  data() {
    return {
      restaurant: dummyData.restaurant
    }
  }
};
</script>