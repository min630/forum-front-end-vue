<template>
  <div class="container py-5">
    <!-- 分頁標籤-->
    <NavTabs />
    <!-- 餐廳分類頁籤 -->
    <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant"/>
    </div>

    <!-- 分頁 RestaurantPagination -->
    <RestaurantPagination 
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantsNavPills from "../components/RestaurantsNavPills";
import RestaurantPagination from "../components/RestaurantsPagination"

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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Caterina Morar",
      tel: "1-430-538-7417 x3469",
      address: "16892 Hand Expressway",
      opening_hours: "08:00",
      description: "Beatae voluptas ipsum. Et impedit dicta quasi inve",
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Brant Ortiz",
      tel: "943.422.0398 x78342",
      address: "360 Dashawn Dam",
      opening_hours: "08:00",
      description: "Ut molestias sed mollitia est similique dolorem ex",
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Jacey Roob",
      tel: "(118) 919-3081 x3930",
      address: "77435 Isom Plains",
      opening_hours: "08:00",
      description: "Ab incidunt est. Impedit consequuntur nisi perfere",
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
      isFavorited: false,
      isLiked: false,
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
      isFavorited: false,
      isLiked: false,
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Karen Effertz",
      tel: "551.040.9117 x899",
      address: "195 Felton Bypass",
      opening_hours: "08:00",
      description: "Fugit aliquam aut voluptatem autem non harum ipsa ",
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
      isFavorited: false,
      isLiked: false,
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
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Tanner McGlynn",
      tel: "(443) 971-1240",
      address: "30103 Citlalli Brooks",
      opening_hours: "08:00",
      description: "Qui ut ipsum consequuntur quae voluptatem est odit",
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
      isFavorited: false,
      isLiked: false,
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
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2
};

export default {
  name: "Restaurants",
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantPagination
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  created(){
    this.fetchRestaurants()
  },
    methods: {
    fetchRestaurants () {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }

  }
};
</script>