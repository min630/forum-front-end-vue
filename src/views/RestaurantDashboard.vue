<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import restaurantAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers' 

export default {
  name: 'RestaurantDashboaard',
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        commentsLength: 0,
        categoryName: '',
        viewCounts: 0
      }
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },

  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = to.params
    this.fetchRestaurant(restaurantId)
    next()
  },
  
  methods: {
    async fetchRestaurant(restaurantId) {
      try{
        const { data } = await restaurantAPI.getRestaurant({restaurantId})
        const { id, name, Category, Comments, viewCounts } = data.restaurant
        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryName: Category ? Category.name : '未分類',
          commentsLength: Comments.length,
          viewCounts
        }
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
      
    }
  }
};
</script>