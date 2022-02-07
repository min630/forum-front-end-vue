<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail";
import RestaurantComments from "../components/RestaurantComments";
import CreateComment from "./../components/CreateComment";
// import { duration } from 'moment';

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
    updatedAt: "2022-02-06T10:29:45.357Z",
    CategoryId: 5,
    Category: {
      id: 5,
      name: "素食料理",
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
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
  isFavorited: false,
  isLiked: false,
};
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser,
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params; //取出params的id屬性，改名為restaurantId
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      };

      this.restaurantComments = dummyData.restaurant.Comments;
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      // console.log('payload', payload)
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(),
      });
    },
  },
};
</script>