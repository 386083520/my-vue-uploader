<template>
  <uploader class="uploader-example"  :options="options" :file-status-text="statusText">
  </uploader>
</template>

<script>
    export default {
        name: "",
        data() {
          return {
            options: {
              target: '/upload/uploadFile', // '//jsonplaceholder.typicode.com/posts/',
              testChunks: false
            },
            statusText: {
              success: '成功了',
              error: '出错了',
              uploading: '上传中',
              paused: '暂停中',
              waiting: '等待中'
            }
          }
        }
    }
</script>

<style scoped>
  .uploader-example {
    width: 880px;
    padding: 15px;
    margin: 40px auto 0;
    font-size: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
  }
</style>
