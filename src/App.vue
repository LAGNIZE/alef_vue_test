<template>
  <navbar></navbar>
  <div class="app" id="app">
    <router-view></router-view>
  </div>
</template>


<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
@font-face {
  font-family: 'Montserrat';
  src: url(./fonts/Montserrat-Regular.ttf);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
