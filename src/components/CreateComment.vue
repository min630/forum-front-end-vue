<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea class="form-control" rows="3" name="text" v-model="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
        :disabled="isProcessing"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import commentsAPI from "../apis/comments";
import { Toast } from "../utils/helpers";

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      text: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.text) {
        Toast.fire({
          icon: "warning",
          title: "請輸入評價內容",
        });
      }
      this.isProcessing = true;

      try {
        const { data } = await commentsAPI.createComment({
          restaurantId: this.restaurantId,
          text: this.text,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 伺服器新增 Comment 成功後...
        this.$emit("after-create-comment", {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text,
        });
        this.text = "";
        this.isProcessing = false
        
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: "error",
          title: "無法送出評價，請稍後再試",
        });
      }
    },
  },
};
</script>