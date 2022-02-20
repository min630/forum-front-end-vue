<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          :src="user.image | emptyImage"
          height="300px"
          width="300px"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">
            {{ user.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ user.commentsLength }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.favoritedRestaurantsLength }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ user.followingsLength }}</strong> followings
              (追蹤者)
            </li>
            <li>
              <strong>{{ user.followersLength }}</strong> followers
              (追隨者)
            </li>
          </ul>
          <template v-if="isCurrentUser">
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
              @click.stop.prevent="unFollow(user.id)"
              type="button"
              class="btn btn-danger"
            >
              取消追蹤
            </button>
            <button
              v-else
              @click.stop.prevent="follow(user.id)"
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
import { emptyImageFilter } from "../utils/mixins";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  name: "UserProfileCard",
  mixins: [emptyImageFilter],
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
    isCurrentUser: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
      isFollowed: this.initialIsFollowed,
    };
  },
  watch: {
    initialUser(newValue) {
      this.user = {
        ...this.user,
        ...newValue
      }
    },
    initialIsFollowed(newValue) {
      this.isFollowed = newValue;
    },
  },
  methods: {
    async follow(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });
 
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.isFollowed = true;
        this.user.followersLength += 1
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },
    async unFollow(userId) {
      try {
        const {data} = await usersAPI.deleteFollowing({userId})

         if (data.status === "error") {
          throw new Error(data.message);
        }
        this.isFollowed = false;
        this.user.followersLength -= 1
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }
      
    },
  },
};
</script>