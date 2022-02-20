<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in comments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-right"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
          :disabled="isProcessing"
        >
          Delete
        </button>
        <h3>
          <router-link :to="{ name: 'user', params: { id: comment.User.id } }">
            {{ comment.User.name }}
          </router-link>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";
import commentsAPI from "../apis/comments";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "RestaurantComments",
  props: {
    comments: {
      type: Array,
      require: true,
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  data() {
    return {
      isProcessing: false,
    };
  },
  mixins: [fromNowFilter],
  methods: {
    async handleDeleteButtonClick(commentId) {
      this.isProcessing = true;
      try {
        const { data } = await commentsAPI.deleteComment({ commentId });
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
        this.$emit("after-delete-comment", commentId);
        // Toast.fire({
        //   icon: 'success',
        //   title: '已經刪除評論'
        // })
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法刪除評價，請稍後再試",
        });
      }
    },
  },
};
</script>