<template>
  <div class="uploader-drop">
    <slot></slot>
  </div>
</template>

<script>
    const COMPONENT_NAME = 'uploader-drop'
    export default {
        name: COMPONENT_NAME
    }
</script>

<style scoped>
  .uploader-drop {
    position: relative;
    padding: 10px;
    overflow: hidden;
    border: 1px dashed #ccc;
    background-color: #f5f5f5;
  }
</style>
