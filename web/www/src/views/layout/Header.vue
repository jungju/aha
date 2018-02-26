<template lang="pug">
    .container
      router-link.zipview-logo(to="/")
          img(src="../image/zv_logo_roof.png" )
      ul.sub-menus
          li.menu.menu-logout(v-show="isLoggedIn()" v-on:click="logout")
              router-link(to="")
                  span 로그아웃
</template>

<script>
    import {
      UserController_Me
    } from '~/makezip'

    export default {
        data() {
      		return {
      				user: {},
              userLoggedin: false,
              userLogout: false,
              activeIndex: '',
      		};
      	},
        created: function() {
          // if(!location.href.includes('login')) this.getMe();
          // if(!this.userLoggedin) this.gitple()
      	},
        methods: {
            handleSelect(key, keyPath) {
              console.log(key, keyPath);
            },
            logout() {
                this.userLogout = true;
                this.gitple()
                this.$Func.logout();
            },
            isLoggedIn: function() {
                return this.$Func.getToken() != null;
            },
            getMe() {
        			this.$Func.requestMakezipAPI(UserController_Me,{},(response) => {
        				this.user = response.data;
        				if(!this.user.IsConfirmed) {
        					location.href = "https://zipview.kr/login-notice.html"
        				} else {
                  this.userLoggedin = true
                  this.gitple()
                }
              },(error) => {
        				location.href = '.';
              })
        		},
            gitple() {
              window.GitpleConfig = { appCode: '30e4CxLfzC90uvZJi9nkR3CuEBHcCQe2' };
              !function(){function e(){function e(){var e=t.contentDocument,a=e.createElement("script");a.type="text/javascript",a.async=!0,a.src=window[n]&&window[n].url?window[n].url+"/inapp-web/gitple-loader.js":"https://app.gitple.io/inapp-web/gitple-loader.js",a.charset="UTF-8",e.head&&e.head.appendChild(a)}var t=document.getElementById(a);t||((t=document.createElement("iframe")).id=a,t.style.display="none",t.style.width="0",t.style.height="0",t.addEventListener?t.addEventListener("load",e,!1):t.attachEvent?t.attachEvent("onload",e):t.onload=e,document.body.appendChild(t))}var t=window,n="GitpleConfig",a="gitple-loader-frame";if(!window.Gitple){document;var i=function(){i.ex&&i.ex(arguments)};i.q=[],i.ex=function(e){i.processApi?i.processApi.apply(void 0,e):i.q&&i.q.push(e)},window.Gitple=i,t.attachEvent?t.attachEvent("onload",e):t.addEventListener("load",e,!1)}}();
              if (!this.userLoggedin) { // 로그인 전
                Gitple('boot');
              } else {                  // 로그인 후
                Gitple('update', {
                  id: 'myzipview' + this.user.ID, // [필수] 상담고객 식별 ID
                    name: this.user.Name,
                    email: this.user.Email,
                    phone: this.user.Mobile,
                    meta: {            // [선택]
                      'Company': 'Zipview'
                    }
                  });
              }
              if (this.userLogout) {  // 로그아웃
                Gitple('shutdown');
              }
            }
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
