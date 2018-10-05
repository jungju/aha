<template lang="pug">
    .app-wrap
      .contents
        iframe#aha-editor.test(src="/editor", v-on:load="onLoadIframe", name="myIframe")
        ul.clearfix
      el-button(type="primary", v-on:click="sendEditor") SEND!!
</template>

<script>
  export default {
    data() {
      return {
        editorRefrash: {},
      };
    },
    created: function() {
      
    },
    methods: {
      sendEditor() {
        this.editorRefrash("rr가나다");
      },
      findIframeByName(name) {
        return _.find(window.frames, frame => frame.name === name);
      },
      onLoadIframe(event) {
        this.editorRefrash = event.currentTarget.contentWindow.test
      },
    }
  }
</script>

<style lang="scss" scoped>
  #aha-editor {
    width: 100%;
    height: 500px;
  }
</style>
