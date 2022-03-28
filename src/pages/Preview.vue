<template>
  <div>
    <div class="form__data" v-if="posts.length > 0">
      Персональные данные
      <div class="person">{{ getUserName }}, {{ getUserAge }} лет.</div>
    </div>
    <div class="form__data" style="margin-top: 60px" v-if="posts.length > 0">
      Дети
      <div class="childs" v-for="(child, idx) in posts" v-bind:key="idx">
        {{ child.childName }}, {{ child.childAge }} лет
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      limit: (state) => state.post.limit,
      name: (state) => state.post.userName,
      age: (state) => state.post.userAge,
    }),
    ...mapGetters({
      getPosts: "post/getPosts",
      getLimit: "post/getLimit",
      getUserName: "post/getUserName",
      getUserAge: "post/getUserAge",
      getChildName: "post/getChildName",
      getChildAge: "post/getChildAge",
    }),
  },
};
</script>

<style scoped>
.form__data {
  width: 600px;
  color: black;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
}

.person {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
}

.childs {
  width: 143px;
  height: 44px;
  background: #f1f1f1;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  color: #000000;
}
</style>
