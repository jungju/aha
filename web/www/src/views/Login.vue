<template lang="pug">
    .content-page.login-page
        .con_allwrp
            .con_subwrp
                .con_comwrp
                    p.log_logo.pc_only
                        img(src='./image/zv_logo_roof.png')
                    .con_com.con_left
                        .content-wrap
                            form.form-login(v-on:keydown='loginEnter')
                                input.inputbox(type='text', placeholder='아이디', v-model='loginForm.username')
                                input.inputbox(type='password', placeholder='비밀번호', v-model='loginForm.password')
                                .butwrp
                                    button#login-btn(form='form-contact', value='로그인', style='margin:10px;', v-loading='loading', v-on:click='login', v-bind:disabled='loading')
                                        p 로그인
                                span.error-msg(v-show="hasError") 아이디나 비밀번호가 틀렸습니다.
</template>

<script>
    import {
        UserAuthController_Login,
        UserController_Me
    } from '~/makezip'
    
    export default {
        data() {
            return {
                loginForm: {
                    username: "",
                    password: "",
                },
                loading: false,
                hasError: false,
            };
        },
        methods: {
            login() {
                this.loading = true;
                UserAuthController_Login({
                    body: {
                        Username: this.loginForm.username,
                        Password: this.loginForm.password
                    }
                }).then((response) => {
                    this.$Func.setToken(response.data.Token);
                    location.href = "/";
                }).catch((error) => {
                    this.loading = false;
                    this.hasError = true;
                });
            },
            loginEnter(e) {
                if (e.keyCode == 13 || e.which == 13) {
                    this.login();
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .content-page {
        width: 100%;
        max-width: 500px;
        height: calc(100vh - 125px);
        padding-top: 60px;
        margin: 0 auto;
        display: table;
        position: relative;
    }
    
    .btn {
        display: inline-block;
        padding: 0;
        font-weight: 400;
        color: #6b6b72;
        background-color: #f0f0f2;
        border: 1px solid rgba(63, 63, 66, 0.13);
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
    }
    
    .log_logo img {
        width: 95px;
        height: 24px;
    }
    
    .login-page .inputbox {
        width: calc(100% - 20px) !important;
        margin: 0 10px 20px 10px;
    }
    
    .login-page .error-msg {
        width: 50%;
        padding-left: 10px;
        color: #f24a16;
        font-size: 14px;
        font-weight: 100;
    }
    
    .con_comwrp {
        width: 100%;
        padding: 30px;
        border: 1px solid #dedede;
        border-radius: 10px;
        box-sizing: border-box;
        background: #f5f6f7;
    }
    
    .con_right {
        width: 42.5%;
        vertical-align: top;
    }
    
    .log_title {
        font-size: 48px;
        font-weight: 100;
        letter-spacing: -3px;
        margin: 0 0 40px 20px;
    }
    
    .log_logo {
        width: 95px;
        height: 32px;
        margin: 0 auto 40px auto;
    }
    
    .form-login .butwrp button {
        width: calc(100% - 20px);
        height: 44px;
        line-height: 5px;
        border: none;
        background-color: #f24a16;
        border-radius: 5px;
    }
    
    .form-login .butwrp button:hover {
        -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.4);
        -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.4);
        box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.4);
    }
    
    .form-login .butwrp button:active {
        box-shadow: inset 0px 0px 7px 0px rgba(0, 0, 0, 0.4);
    }
    
    .form-login .butwrp button p {
        font-size: 18px !important;
        font-weight: 400;
        color: #fff;
    }
    
    #olim-id {
        margin-top: 10px;
    }
    
    .login-page .inputbox {
        width: 100%;
        height: 43px;
        padding: 10px;
        background-color: #fff;
        border: 1px solid #DEDEDE;
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 200;
    }
    
    .con_sright {
        padding-left: 20px;
    }
    
    .olim_logo {
        width: 91px;
        height: auto;
        position: absolute;
        right: 10px;
        bottom: 30px;
    }
    
    .con_allwrp {
        display: table-cell;
        vertical-align: middle;
    }
    
    #login-btn:disabled {
        cursor: default;
        background-color: #aaa;
    }
    
    #login-btn:disabled:hover {
        box-shadow: none;
    }
</style>
