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
          @click.stop.prevent="deleteFavorite"
        >
          移除最愛
        </button>
        <button
          type="button"
          class="btn btn-primary"
          v-else
          @click.stop.prevent="addFavorite"
        >
          加到最愛
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addFavorite() {
      this.restaurant = {
        ...this.restaurant,
        isFavorited: true,
      };
    },
    deleteFavorite() {
      this.restaurant = {
        ...this.restaurant,
        isFavorited: false,
      };
    },
  },
};
</script>