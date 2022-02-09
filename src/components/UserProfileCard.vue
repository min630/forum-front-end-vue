<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">
            {{ user.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ user.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ user.Followings.length }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ user.Followers.length }}</strong> followers (追隨者)
            </li>
          </ul>
          <template v-if="user.isCurrentUser">
            <router-link
              :to="{ name: 'user-edit', params: { id: user.id } }"
              class="btn btn-primary"
            >
              Edit
            </router-link>
          </template>
          <template v-else>
            <button
              v-if="isFollowed"
              @click.stop.prevent="unFollow"
              type="button"
              class="btn btn-danger"
            >
              取消追蹤
            </button>
            <button
              v-else
              @click.stop.prevent="follow"
              type="submit"
              class="btn btn-primary"
            >
              追蹤
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
      isFollowed: this.initialIsFollowed
    };
  },
  methods: {
    follow() {
      this.isFollowed = true;
    },
    unFollow() {
      this.isFollowed = false;
    },
  },
};
</script>