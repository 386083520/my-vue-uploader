<template>
  <div class="uploader">
    <slot :files="files" :file-list="fileList" :started="started">
      <uploader-drop>
        <p>拖动文件到该位置或者：</p>
        <uploader-btn>选择文件</uploader-btn>
        <uploader-btn>选择文件夹</uploader-btn>
      </uploader-drop>
      <uploader-list></uploader-list>
    </slot>
  </div>
</template>

<script>
    import Uploader from 'simple-uploader.js'
    import { kebabCase } from '../common/utils'

    import UploaderBtn from './btn.vue'
    import UploaderDrop from './drop.vue'
    import UploaderUnsupport from './unsupport.vue'
    import UploaderList from './list.vue'
    import UploaderFiles from './files.vue'
    import UploaderFile from './file.vue'

    const COMPONENT_NAME = 'uploader'
    const FILE_ADDED_EVENT = 'fileAdded'
    const FILES_ADDED_EVENT = 'filesAdded'
    const UPLOAD_START_EVENT = 'uploadStart'
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
        this.options.initialPaused = !this.autoStart
        const uploader = new Uploader(this.options)
        this.uploader = uploader
        this.uploader.fileStatusText = this.fileStatusText
        uploader.on('catchAll', this.allEvent)
        uploader.on(FILE_ADDED_EVENT, this.fileAdded)
        uploader.on(FILES_ADDED_EVENT, this.filesAdded)
        uploader.on('fileRemoved', this.fileRemoved)
        uploader.on('filesSubmitted', this.filesSubmitted)
      },
      props: {
        options: {
          type: Object,
          default () {
            return {}
          }
        },
        autoStart: {
          type: Boolean,
          default: true
        },
        fileStatusText: {
          type: [Object, Function],
          default () {
            return {
              success: 'success',
              error: 'error',
              uploading: 'uploading',
              paused: 'paused',
              waiting: 'waiting'
            }
          }
        }
      },
      data() {
        return {
          started: false,
          files: [],
          fileList: []
        }
      },
      methods: {
        uploadStart () {
          this.started = true
        },
        fileAdded (file) {
          console.log('gsdfileAdded', file)
          this.$emit(kebabCase(FILE_ADDED_EVENT), file)
          if (file.ignored) {
            return false
          }
        },
        filesAdded (files, fileList) {
          console.log('gsdfilesAdded', files, fileList)
          this.$emit(kebabCase(FILES_ADDED_EVENT), files, fileList)
          if (files.ignored || fileList.ignored) {
            return false
          }
        },
        fileRemoved (file) {
          console.log('gsdfileRemoved', file)
          this.files = this.uploader.files
          this.fileList = this.uploader.fileList
        },
        filesSubmitted (files, fileList) {
          console.log('gsdfilesSubmitted', files, fileList)
          this.files = this.uploader.files
          this.fileList = this.uploader.fileList
          if (this.autoStart) {
            this.uploader.upload()
          }
        },
        allEvent (...args) {
          console.log('gsdallEvent', ...args)
          const name = args[0]
          const EVENTSMAP = {
            [FILE_ADDED_EVENT]: true,
            [FILES_ADDED_EVENT]: true,
            [UPLOAD_START_EVENT]: 'uploadStart'
          }
          const handler = EVENTSMAP[name]
          if (handler) {
            if (handler === true) {
              return
            }
            this[handler].apply(this, args.slice(1))
          }
          args[0] = kebabCase(name)
          this.$emit.apply(this, args)
        }
      },
      destroyed() {
        const uploader = this.uploader
        uploader.off('catchAll', this.allEvent)
        uploader.off(FILE_ADDED_EVENT, this.fileAdded)
        uploader.off(FILES_ADDED_EVENT, this.filesAdded)
        uploader.off('fileRemoved', this.fileRemoved)
        uploader.off('filesSubmitted', this.filesSubmitted)
        this.uploader = null
      }
    }
</script>

<style scoped>
  .uploader {
    position: relative;
  }
</style>
