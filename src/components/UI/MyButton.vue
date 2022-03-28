<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  background: none;
  color: #01a7fd;
  border: 2px solid #01a7fd;
  border-radius: 100px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
}
</style>
