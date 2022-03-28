<template>
  <div class="post">
    <div @click.stop>
      <my-input
        placeholder="Имя"
        style="width: 250px; margin-top: 0px"
        v-model="post.childName"
        v-on:update:model-value="updateChildName"
      ></my-input>
      <my-input
        placeholder="Возраст"
        style="width: 250px; margin-left: 20px; margin-top: 0px"
        v-model="post.childAge"
        v-on:update:model-value="updateChildAge"
      ></my-input>
    </div>
    <div v-on:click="$emit('remove', post)" style="cursor: pointer">
      Удалить
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateChildName(value) {
      this.$store.commit("post/setChildName", {
        childName: value,
      });

    },
    updateChildAge(value) {
      this.$store.commit("post/setChildAge", {
        childAge: value,
      });
    },
  },
};
</script>

<style scoped>
.post {
  width: 600px;
  margin: 10px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #01a7fd;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}
</style>
