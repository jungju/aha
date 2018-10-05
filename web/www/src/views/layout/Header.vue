<template lang="pug">
    .container
      router-link.aha-logo(to="/")
        p AHA
      ul.sub-menus
</template>

<script>
    export default {
        data() {
      		return {
      				
      		};
      	},
        created: function() {
      	},
        methods: {
        }
    }
</script>

<style lang="scss">
.el-menu {
  float: right;
  background: none;
}
.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal>.el-menu-item.is-active, .el-menu--horizontal>.el-submenu.is-active .el-submenu__title,
.el-submenu.is-active .el-submenu__title {
  border-bottom: none;
}
.el-icon-arrow-down:before {
  content: none;
}
.el-submenu__title {
  padding: 0 16px;
  .material-icons {
    font-size: 28px;
  }
}
.el-menu--horizontal .el-submenu .el-submenu__icon-arrow {
  position: absolute;
}
.el-menu--horizontal .el-submenu>.el-menu {
  top: 61px;
  left: 0px;
  padding: 0 5px;
}
.el-menu-item:last-child {
  padding: 0 16px;
}
.el-menu--horizontal>.el-menu-item.is-active, .el-menu--horizontal>.el-submenu.is-active .el-submenu__title,
.el-menu--horizontal .el-submenu .el-submenu__title,
.el-menu-item.is-active i,
.el-submenu__title i,
.el-menu-item i {
  // color: #656464;
}
.el-menu--horizontal .el-submenu .el-submenu__title:hover i,
.el-menu--horizontal .el-menu-item:hover i{
  color: #656464;
}
.el-menu--horizontal .el-submenu .el-submenu__title i,
.el-menu--horizontal .el-menu-item i {
  transition: border-color .3s,background-color .3s,color .3s;
}
</style>
