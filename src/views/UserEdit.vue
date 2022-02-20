<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">Submit</button>
    </form>
  </div>
</template>


<script>
import { mapState } from "vuex";
import usersAPI from "../apis/users"
import { Toast } from "../utils/helpers"

export default {
  data() {
    return {
      user: {
        id: -1,
        name: "",
        image: "",
      },
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id } = this.$route.params;
    this.setUser(id);
  },
  watch: {
    currentUser(newUser) {
      console.log(newUser.id)
      const { id } = this.$route.params;
      this.setUser(id);     
    },
  },
  methods: {
    setUser(userId) {
      const { id, name, image } = this.currentUser;
      if(+id !== +userId) {
        this.$router.push('not-found')
        return
      }
      this.user = {
        ...this.user,
        id,
        name,
        image,
      };
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (!files.length) {
        //未選擇就清空，或是改成為選擇就return
        this.user.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    async handleSubmit(e) {
      try {
        if(!this.user.name) {
          Toast.fire({
            icon: 'warning',
            title: '尚未填寫使用者名稱'
          })
          return
        }
        this.isProcessing = true
        const formData = new FormData(e.target);
        const { data } = await usersAPI.update({ 
          userId: this.user.id,
          formData
        })
        if(data.status === 'error') {
          throw new Error(data.message)
        }
        this.$router.push({ name: 'user', params: { id: this.user.id } })
        
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新資料，請稍後再試'
        })
      }
      
      
    },
  },
};
</script>