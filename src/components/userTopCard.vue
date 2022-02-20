<template>
  <div class="col-3">
    <router-link :to="{ name: 'user', params: {id: user.id}}">
      <img :src="user.image | emptyImage" width="140px" height="140px" />
    </router-link>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary"
      >追蹤人數：{{ user.followerCount }}</span
    >
    <p class="mt-3">
      <button
        type="button"
        class="btn btn-danger"
        v-if="user.isFollowed"
        @click.stop.prevent="unfollowUser(user.id)"
      >
        取消追蹤
      </button>
      <button
        type="button"
        class="btn btn-primary"
        v-else
        @click.stop.prevent="followUser(user.id)"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  props: {
    initialUserTop: {
      type: Object,
      require: true,
    },
  },
  mixins: [emptyImageFilter],
  data() {
    return {
      user: this.initialUserTop,
    };
  },
  methods: {
    async followUser(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        const addFollower = this.user.followerCount + 1;
        this.user = {
          ...this.user,
          isFollowed: true,
          followerCount: addFollower,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },
    async unfollowUser(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        const minusFollower = this.user.followerCount - 1;
        this.user = {
          ...this.user,
          isFollowed: false,
          followerCount: minusFollower,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
    },
  },
};
</script>