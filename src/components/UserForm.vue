<template>
  <div>
    <div class="form__data">
      Персональные данные
      <my-input
        placeholder="Имя"
        v-model="name"
        v-on:update:model-value="updateName"
      ></my-input>
      <my-input
        placeholder="Возраст"
        v-model="age"
        v-on:update:model-value="updateAge"
      ></my-input>
    </div>
    <form @submit.prevent>
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <h4
          style="
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
          "
        >
          Дети (макс. 5)
        </h4>
        <my-button
          v-if="this.posts.length <= this.limit"
          v-bind:posts="posts"
          class="btn"
          v-on:click="createPost"
          style="align-self: flex-end; margin-top: 15px"
          >+ Добавить ребёнка
        </my-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        childName: "",
        childAge: "",
      },
    };
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        childName: this.post.childName,
        childAge: this.post.childAge
      }
      this.$emit("create", newPost);
    },
    updateName(value) {
      this.$store.commit("post/setUserName", value);
    },
    updateAge(value) {
      this.$store.commit("post/setUserAge", value);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

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
</style>
