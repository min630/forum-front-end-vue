<template>
  <div id="restaurant-forum">
    <Navbar />
    <main role="main" class="mt-5 bg-white">
      <router-view />
    </main>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar, //原本是Navbar: Navbar，因為名字一樣可以縮寫
  },
};
</script>
<style scoped>
  main {
    margin-top: 65px !important;
  }
</style>
