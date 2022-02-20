<template>
  <div class="py-5">
    <div class="container">
      <UserProfileCard
        :initial-user="user"
        :initial-is-followed="isFollowed"
        :is-current-user="currentUser.id === user.id"
      />
      <div class="row">
        <div class="col-md-4">
          <UserFollowingsCard :followings="followings" />
          <UserFollowersCard :followers="followers" />
        </div>
        <div class="col-md-8">
          <UserCommentsCard :comments="comments" />
          <UserFavoritedRestaurantsCard
            :favorited-restaurants="favoritedRestaurants"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard";
import UserFollowingsCard from "../components/UserFollowingsCard";
import UserFollowersCard from "../components/UserFollowersCard";
import UserCommentsCard from "../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "user",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      user: {
        id: 0,
        image: "",
        name: "",
        email: "",
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
        followingsLength: 0,
        followersLength: 0,
      },
      isFollowed: false,
      comments: [],
      favoritedRestaurants: [],
      followings: [],
      followers: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params;
    this.fetchUser(userId);
    next();
  },
  methods: {
    async fetchUser(userId) {
      try {
        console.log(userId)
        const { data } = await usersAPI.get({ userId });
        console.log(data)
        const { profile, isFollowed } = data;
        const {
          id,
          image,
          email,
          name,
          Comments,
          FavoritedRestaurants,
          Followings,
          Followers,
        } = profile;
        this.user = {
          ...this.user,
          id,
          image,
          email,
          name,
          commentsLength: Comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length,
          followingsLength: Followings.length,
          followersLength: Followers.length,
        };
        this.isFollowed = isFollowed;
        this.comments = Comments.filter(comment => comment.Restaurant)
        this.favoritedRestaurants = FavoritedRestaurants;
        this.followings = Followings;
        this.followers = Followers;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
  },
  
};
</script>
