<template>
  <div class="uploader">
    <uploader-drop>
      <p>拖动文件到该位置或者：</p>
      <uploader-btn>选择文件</uploader-btn>
      <uploader-btn>选择文件夹</uploader-btn>
    </uploader-drop>
    <uploader-list>list</uploader-list>
  </div>
</template>

<script>
    import Uploader from 'simple-uploader.js'

    import UploaderBtn from './btn.vue'
    import UploaderDrop from './drop.vue'
    import UploaderUnsupport from './unsupport.vue'
    import UploaderList from './list.vue'
    import UploaderFiles from './files.vue'
    import UploaderFile from './file.vue'

    const COMPONENT_NAME = 'uploader'
    export default {
      name: COMPONENT_NAME,
      provide () {
        return {
          uploader: this
        }
      },
      components: {
        UploaderBtn,
        UploaderDrop,
        UploaderUnsupport,
        UploaderList,
        UploaderFiles,
        UploaderFile
      },
      created () {
        const uploader = new Uploader(this.options)
        this.uploader = uploader
      }
    }
</script>

<style scoped>
  .uploader {
    position: relative;
  }
</style>
