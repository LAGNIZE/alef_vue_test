<template>
  <div class="navbar">
    <div class="nav__logo" v-on:click="$router.push('/')">
      <img src="@/assets/logo.png" alt="logo" />
    </div>
    <div class="navbar__btns">
      <div class="nav__links" v-on:click="$router.push('/')">Форма</div>
      <div
        class="nav__links"
        style="margin-left: 25px"
        v-on:click="$router.push('/preview')"
      >
        Превью
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: { MyButton },
};
</script>

<style scoped>
.navbar {
  color: white;
  height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  position: relative;
}

.nav__logo {
  cursor: pointer;
}

.navbar__btns {
  display: flex;
  position: absolute;
  left: 48%;
}

.nav__links {
  color: rgba(17, 17, 17, 0.48);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
}
</style>
