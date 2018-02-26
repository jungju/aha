<template lang="pug">
    .app-wrap
      .contents
          ul.clearfix
              li(v-for='(item, index) in products')
                  .status-wrap(v-if="item.Content")
                      p.title {{ item.Name }}
                      template(v-if="item.Subscript")
                        button.bar-right.downloading(v-if="item.localStatus == 'downloading'") 받는중
                        button.bar-right.downloading(v-else-if="item.localStatus == 'installing'") 설치중
                        button.bar-right.ready-download(v-else-if="item.localStatus == 'readyDownload'") 대기중
                        button.bar-right.status-button.update(v-else-if="item.localStatus == 'executable' && item.ContentUpdate" v-on:click="updateLocalContent(item)") 업데이트
                        button.bar-right.status-button.show-content(v-else-if="item.localStatus == 'executable'" v-on:click="executeLocalContent(item)") 투어시작
                        button.bar-right.status-button.download(v-else v-on:click="startDownloadLocalContent(item)") 다운로드
                        el-progress(:percentage="item.barProgress" v-if="item.localStatus == 'downloading'")
                      template(v-else)
                        button.bar-right.status-button.subscript(type="button" v-on:click="subscriptMessage(item)") 구독하기
                  .status-wrap.ready(v-else)
                      p.title {{ item.Name }}
                      p.bar-right.ready-status Coming soon...

</template>

<script>
  import {
    commonMixin
  } from '../mixins/commonMixin'
  import {
    daemonMixin
  } from '../mixins/daemonMixin'
  import {
    ProductController_Get_All,
    SubscriptController_Post,
    ProductController_Event
  } from '~/makezip'

  import {
    ProductController_Create,
    ProductController_GetAllApp,
    ProductController_RunApp,
    ProductController_Delete,
    SystemController_GetInfo
  } from '~/daemon'

  export default {
    mixins: [commonMixin, daemonMixin],
    data() {
      return {
        showUnhealthyMessage: false,
        products: [],
        mapLocalProducts: {},
      };
    },
    created: function() {
      this.getProducts();

      setInterval(() => {
        this.getProducts();
      }, 60 * 1000);
      setInterval(() => {
        this.syncZipviewDaemon();
      }, 2 * 1000);
    },
    methods: {
      syncZipviewDaemon() {
        if (this.daemonHealth) {
          this.showUnhealthyMessage = false
          this.getLocalProduct();
        } else if(!this.showUnhealthyMessage) {
          this.showUnhealthyMessage = true
          this.failMessageOnlyOK('예기치 않게 집뷰가 중단되었습니다. 집뷰를 다시 실행해주세요.');
        }
      },
      getProducts() {
        this.$Func.requestMakezipAPI(ProductController_Get_All, {}, (response) => {
          this.products = response.data;
          this.syncZipviewDaemon();
        }, (error) => {
          console.log(error)
        })
      },
      getLocalProduct() {
        this.$Func.requestDaemonAPI(ProductController_GetAllApp, {}, (response) => {
          this.mapLocalProducts = {};
          for (let localProduct of response.data) {
            this.mapLocalProducts[localProduct.ID] = localProduct;
          }
          this.renderProducts();
        }, (error) => {
          this.mapLocalProducts = {};
          this.renderProducts();
        })
      },
      renderProducts() {
        for (let i = 0; i < this.products.length; i++) {
          const productID = this.products[i].ID;
          if (this.mapLocalProducts[productID]) {
            if (this.products[i].ContentID != this.mapLocalProducts[productID].ContentID) {
              this.products[i].ContentUpdate = true;
            } else {
              this.products[i].ContentUpdate = null;
            }
            const localProduct = this.mapLocalProducts[productID];
            if (this.products[i].localStatus != localProduct.Status) {
              this.products[i].localStatus = localProduct.Status;
            }
            if (localProduct.DownloadingContent) {
              if (localProduct.DownloadingContent.Progress > 0) {
                this.products[i].barProgress = Math.floor(localProduct.DownloadingContent.Progress * 100);
              }
            }
          } else {
            if (this.products[i].localStatus) {
              this.products[i].localStatus = null;
              this.products[i].barProgress = null;
              this.products[i].ContentUpdate = null;
            }
          }
          this.$set(this.products, i, this.products[i]);
        }
      },
      subscriptMessage(product) {
        this.showConfirm(product.Title + '를 구독하시겠습니까?', '확인', '취소', 'warning', () => {
          this.subscriptPost(product.ID, this.user.ID);
        })
      },
      subscriptPost: function(productID, userID) {
        this.$Func.requestMakezipAPI(SubscriptController_Post, {
          body: {
            ProductID: productID,
            UserID: userID
          }
        }, (response) => {
          this.getProducts();
          this.showMessage('success', '구독 성공');
        }, (error) => {
          if (error.response.status == 403) {
            this.showMessage('error', '구독 할 수 있는 상품이 초과 되었습니다.');
          } else {
            this.showMessage('error', '구독 실패');
          }
        })
      },
      startDownloadLocalContent(product) {
        this.$Func.requestDaemonAPI(ProductController_Create, {
          $queryParameters: {
            ID: product.ID,
            ContentID: product.ContentID,
            Version: product.Content.Version,
            ExecuteFilename: product.Content.Filename,
            URL: product.Content.URL
          }
        }, (respones) => {
          this.getLocalProduct()
          this.postEvent("download", product.ID, product.ContentID)
        }, (error) => {})
      },
      executeLocalContent(product) {
        this.$Func.requestDaemonAPI(ProductController_RunApp, {
            id: product.ID
          },
          (response) => {
            this.postEvent("execute", product.ID, product.ContentID)
          });
      },
      updateLocalContent(product) {
        this.$Func.requestDaemonAPI(ProductController_Delete, {
            id: product.ID
          },
          (response) => {
            this.startDownloadLocalContent(product);
            this.postEvent("update", product.ID, product.ContentID)
          });
      },
      postEvent(eventName, productID, contentID) {
        this.$Func.requestDaemonAPI(SystemController_GetInfo, {},(response) => {
          this.$Func.requestMakezipAPI(ProductController_Event, {
            id: productID,
            body: {
              Name: eventName,
              ProductID: productID,
              ContentID: contentID,
              Point: "daemon",
              PointVersion: response.data.Envs.Version,
              PointOS: response.data.DeviceInfo.OS,
              PointCPUModel: response.data.DeviceInfo.CPUModel,
              PointMemoryGB: response.data.DeviceInfo.MemoryGB+"",
              PointGraphicCard: response.data.DeviceInfo.GraphicCard,
            }
          })
        }, (error) => {
          this.$Func.requestMakezipAPI(ProductController_Event, {
            id: productID,
            body: {
              id: productID,
              ProductID: productID,
              ContentID: contentID,
            }
          })
        });
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import "../style/variable";
  @import "../style/base";
  // .app-wrap {
  //   padding-bottom: 110px;
  // }
  .el-steps {
    margin: 42px auto;
    .el-step__head.is-wait,
    .el-step__title.is-wait,
    .el-step__description.is-wait {
      color: #4f5156;
    }
  }

  .el-step__description.is-wait {
    color: #4f5156 !important;
  }

  .contents {
    position: relative;
    width: 100%;
    min-width: 800px;
    margin: 0 auto;
    .info {
      margin-bottom: 7px;
      .el-icon-info {
        margin: 0 5px 0 16px;
      }
      span {
        margin-left: 5px;
        color: $main-color;
      }
    }
    li {
      float: left;
      width: 49%;
      margin: 1%;
      margin-bottom: 5px;
      height: 105px;
      &:nth-child(2n) {
        margin-right: 0
      }
      &:nth-child(2n-1) {
        margin-left: 0
      }
    }
    .status-wrap {
      @include transition();
      position: relative;
      box-sizing: border-box;
      display: inline-block;
      width: 100%;
      padding: 18px 25px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, .07), 0 1px 1px 0 rgba(0, 0, 0, .15);
      &:hover {
        border: 1px solid rgba($main-color, .5);
        box-shadow: 1px 1px 3px 0 rgba($main-color, .1), 2px 2px 3px 0 rgba($main-color, .2);
      }
      &.ready {
        opacity: 0.5;
        &:hover {
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, .07), 0 1px 1px 0 rgba(0, 0, 0, .15);
        }
      }
    }
  }

  .bar-right-360 {
    position: absolute;
    top: 29px;
    right: 124px !important;
    width: 50px !important;
    height: 30px;
    text-align: center;
    font-size: 14px;
    font-weight: 100;
    box-sizing: border-box;
  }

  .bar-right {
    position: absolute;
    top: 29px;
    right: 24px;
    width: 90px;
    height: 30px;
    text-align: center;
    font-size: 14px;
    font-weight: 100;
    box-sizing: border-box;
  }

  .status-button {
    @include transition();
    border-radius: 5px;
    &:hover {
      box-shadow: 0px 0px 5px 0 rgba(0, 0, 0, .5);
    }
    &:active {
      box-shadow: inset 0px 0px 5px 0 rgba(0, 0, 0, .5);
    }
    &.subscript {
      background: #606266;
      color: #fff;
    }
    &.download,
    &.update {
      padding: 6px 12px;
      border: 1px solid $main-color;
      color: $main-color;
      font-weight: 200;
    }
    &.update {
      background: #fef0f0;
    }
  }

  .ready-status {
    color: rgba(0, 0, 0, 0.5);
    width: 98px;
    line-height: 30px;
    font-size: 13px;
    margin: 0;
    padding-right: 0;
  }

  .downloading,
  .ready-download {
    line-height: 30px;
    border: none;
    background: #eee;
    border-radius: 5px;
    cursor: default;
  }

  .show-content {
    background: $main-color;
    color: #fff;
  }

  .el-progress {
    opacity: .7;
  }
</style>
