<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }">
        <img class="card-img" :src="restaurant.image" />
      </router-link>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ restaurant.name }}</h5>
        <span class="badge badge-secondary"
          >收藏數：{{ restaurant.FavoriteCount }}</span
        >
        <p class="card-text">
          {{ restaurant.description }}
        </p>
        <router-link
          :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          class="btn btn-primary mr-2"
          >Show</router-link
        >

        <button
          type="button"
          class="btn btn-danger mr-2"
          v-if="restaurant.isFavorited"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
        >
          移除最愛
        </button>
        <button
          type="button"
          class="btn btn-primary"
          v-else
          @click.stop.prevent="addFavorite(restaurant.id)"
        >
          加到最愛
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
    };
  },
  methods: {
    async addFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite({ restaurantId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
          FavoriteCount: this.restaurant.FavoriteCount + 1,
        };
        console.log(this.restaurant);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將餐廳加入最愛，請稍後再試",
        });
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
          FavoriteCount: this.restaurant.FavoriteCount - 1,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將餐廳移除最愛，請稍後再試",
        });
      }
    },
  },
};
</script>