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
    },
    getRequestHeader: function() {
      return {headers: {'X-USER-AUTH-TOKEN': this.getToken()}};
    },
  }
