<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div class="card mb-3" style="max-width: 540px; margin: auto" v-for="restaurant in topRestaurants" :key="restaurant.id">
      <RestaurantsTopCard :initial-restaurant="restaurant"/>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import RestaurantsTopCard from "../components/RestaurantsTopCard"
import restaurantAPI from "../apis/restaurants"
import { Toast } from "../utils/helpers" 


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
    async fetchTopRestaurants() {
      try {
        const { data } = await restaurantAPI.getTopRestaurants()
        this.topRestaurants = data.restaurants

      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得人氣餐廳，請稍後再試'
        }) 
      }
      
    },
    
  }
};
</script>