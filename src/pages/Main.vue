<template>
  <div class="wrapper">
    <user-form
      v-on:create="createPost"
      v-bind:posts="posts"
      v-bind:limit="limit"
      v-bind:name="getUserName"
      v-bind:age="getUserAge"
    />
    <child-list v-on:remove="removePost" v-bind:posts="posts" />
    <my-button
      style="background: #01a7fd; color: white; margin-top: 30px"
      v-on:click="$router.push('/preview')"
      >Сохранить</my-button
    >
  </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import ChildList from "@/components/ChildList.vue";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    UserForm,
    ChildList,
  },
  methods: {
    ...mapMutations({
      setUserName: "post/setUserName",
      removePost: "post/removePost",
    }),
    createPost(post) {
      this.posts.push(post);
    },
  },
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
.wrapper {
  width: 600px;
  margin: 0 auto;
}
</style>
