<template>
  <div class="uploader-list">
    <slot></slot>
  </div>
</template>

<script>
    const COMPONENT_NAME = 'uploader-list'
    export default {
        name: COMPONENT_NAME
    }
</script>

<style scoped>
  .uploader-list {
    position: relative;
  }
  .uploader-list > ul {
    list-style: none;
    margin: 0;
    padding: 0
  }
</style>
