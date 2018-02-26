import {UserAuthController_Logout} from '../makezip'

export default {
    getToken: function () {
      return localStorage.getItem('token');
    },
    setToken: function (token) {
      localStorage.setItem('token',token);
    },
    removeToken: function() {
      localStorage.removeItem('token');
    },
    logout: function() {
      const token = this.getToken();
      UserAuthController_Logout({
          $config: this.getRequestHeader()
      }).then((response) => {
        this.removeToken();
        location.href = '/';
      }).catch(() => {
        this.removeToken();
        location.href = '/';
      })
    },
    getRequestHeader: function() {
      return {headers: {'X-USER-AUTH-TOKEN': this.getToken()}};
    },
    requestDaemonAPI(funcAPI, param, cb, errcb) {
      console.log(funcAPI.name);
      param.$config = this.getRequestHeader();
      funcAPI(param).then(cb).catch(errcb);
    },
    requestMakezipAPI(funcAPI, param, cb, errcb) {
      console.log(funcAPI.name);
      param.$config = this.getRequestHeader();
      funcAPI(param).then(response =>{
        if(cb) {
          cb(response);
        }
      }).catch(error => {
        console.log("error:"+error);
        if(error.response) {
          if(error.response.status == 401) {
            this.logout();
            return;
          }
        }
        if(errcb) {
          errcb(error);
        }
      });
    },
  }
