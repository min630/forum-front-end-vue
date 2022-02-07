<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div class="card mb-3" style="max-width: 540px; margin: auto" v-for="restaurant in topRestaurants" :key="restaurant.id">
      <RestaurantsTopCard :restaurant="restaurant"/>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import RestaurantsTopCard from "../components/RestaurantsTopCard"

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Lorenza Schaden",
      tel: "(766) 218-0644",
      address: "93603 Daugherty Passage",
      opening_hours: "08:00",
      description: "Sunt quibusdam nemo. Perspiciatis itaque dolorem. ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.73936591015638",
      viewCounts: 0,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
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
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
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
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Mrs. Paris Rippin",
      tel: "(475) 111-8132",
      address: "85317 Morar Plains",
      opening_hours: "08:00",
      description: "Est saepe architecto sint dolores. Ut non et. Beat",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.42150773830758",
      viewCounts: 0,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Ebony Rice MD",
      tel: "971.229.9413",
      address: "9904 Isadore Walks",
      opening_hours: "08:00",
      description: "Laudantium perferendis sed odit sapiente nisi magn",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=60.22752247313081",
      viewCounts: 0,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Brandon Harvey",
      tel: "(294) 513-0338 x654",
      address: "565 Aliya Route",
      opening_hours: "08:00",
      description: "Dignissimos aut qui ut. Eos cum nemo facere volupt",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=87.2055734291499",
      viewCounts: 0,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Lionel Bartoletti",
      tel: "1-061-893-1613 x41480",
      address: "199 Shayna Vista",
      opening_hours: "08:00",
      description: "Voluptatem laborum repellat iste adipisci officia ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=45.768739124372445",
      viewCounts: 0,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Dr. Mohammad Dietrich",
      tel: "442-447-5001",
      address: "0077 Eichmann Station",
      opening_hours: "08:00",
      description: "Enim aut alias possimus est sint et. Nobis et face",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.89083916644765",
      viewCounts: 0,
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
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
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
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
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  components: {
    NavTabs,
    RestaurantsTopCard
  },
  data() {
    return {
      topRestaurants: []
    }
  },
  created() {
    this.fetchTopRestaurants()
  },
  methods: {
    fetchTopRestaurants() {
      this.topRestaurants = dummyData.restaurants
    },
    
  }
};
</script>