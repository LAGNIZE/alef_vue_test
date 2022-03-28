<template>
  <input v-bind:value="modelValue" v-on:input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: "my-input",
  props: {
      modelValue: [String, Number]
  },
  methods: {
      updateInput(event) {
          this.$emit("update:modelValue", event.target.value)
      }
  }
};
</script>

<style scoped>
.input {
  width: 600px;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
