<template>
  <label class="uploader-btn">
    <slot></slot>
  </label>
</template>

<script>
    const COMPONENT_NAME = 'uploader-btn'
    export default {
        name: COMPONENT_NAME
    }
</script>

<style scoped>
  .uploader-btn {
    display: inline-block;
    position: relative;
    padding: 4px 8px;
    font-size: 100%;
    line-height: 1.4;
    color: #666;
    border: 1px solid #666;
    cursor: pointer;
    border-radius: 2px;
    background: none;
    outline: none;
  }
  .uploader-btn:hover {
    background-color: rgba(0, 0, 0, .08);
  }
</style>
