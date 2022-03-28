<template>
  <div v-if="posts.length > 0">
    <child-item
      class="post"
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post"
      v-on:remove="$emit('remove', post)"
    />
  </div>
  <h2 style="color: red" v-else>Список детей пуст</h2>
</template>

<script>
import ChildItem from "./ChildItem.vue";

export default {
  components: {
    ChildItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.user-list-move {
  transition: transform 0.4s ease;
}
</style>
