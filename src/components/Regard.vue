<template>
  <div class="regard">
    <div class="container">
      <div class="left">
        <img class="kit" src="../../static/img/kit.jpg"/>
      </div>
      <div class="right">
        <video class="video" preload controls src="https://res.cloudinary.com/dn32la6ny/video/upload/v1561474751/regard/presentation.mp4"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Regard',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "@/config.scss";
@font-face {
  font-family: "Le Murmure";
  src: url("../assets/fonts/le-murmure.woff") format("woff");
}

@font-face {
  font-family: "Prophet Regular";
  src: url("../assets/fonts/prophet_regular.woff") format("woff");
}
.regard {
  width: 100%;
  margin-top: 0;
  display: flex;
  justify-content: center;
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1090px) {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
     .left {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      @media (max-width: 1090px) {
        width: 100%;
        height: auto;
        align-items: center;
      }
      .kit {
        width: 700px;
        margin-right: 648px;
        margin-top: 110px;
        @media (max-width: 2560px) {
          margin-right: -345px;
        }
        @media (max-width: 1440px) {
          margin-right: -410px;
        }
        @media (max-width: 1090px) {
          width: 322px;
          margin-right: -16px;
          margin-top: 10px;
        }
      }
     }
    .right {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      @media (max-width: 1090px) {
        width: 100%;
        height: auto;
        align-items: center;
        flex-direction: column;
      }
      .video {
        width: 700px;
        margin-left: 648px;
        margin-top: 45px;
        @media (max-width: 2560px) {
          margin-left: -354px;
          margin-top: 685px;
        }
        @media (max-width: 1440px) {
          margin-left: -290px;
          margin-top: 675px;
        }
        @media (max-width: 1090px) {
          width: 325px;
          margin-left: 20px;
          margin-top: 24px;
        }
      }
    }
  }
}
</style>
