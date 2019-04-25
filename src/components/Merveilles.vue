<template>
  <div class="merveilles">
    <div class="container" ref="titleContainer">
      <div class="left">
        <img class="mausoleeHalicarnasse" src="../assets/02_sept_merveilles/mausoleeHalicarnasse.png"/>
        <img class="pyramidesKeops" src="../assets/02_sept_merveilles/pyramidesKeops.png"/>
        <img class="phareAlexendrie" src="../assets/02_sept_merveilles/phareAlexendrie.png"/>
        <img class="colosseRhodes" src="../assets/02_sept_merveilles/colosseRhodes.png"/>
      </div>
      <div class="right">
        <img class="statueZeus" src="../assets/02_sept_merveilles/statueZeus.png"/>
        <img class="templeArthemis" src="../assets/02_sept_merveilles/templeArthemis.png"/>
        <img class="jardinsSuspendues" src="../assets/02_sept_merveilles/jardinsSuspendues.png"/>
        <span class="desc">Comment découvrir les 7 merveilles sous un nouvel angle? —</span>
      </div>
    </div>
    <span class="title" ref="titleHover" :class="{'titleVisible': isVisible}">les sept merveilles</span>
  </div>
</template>

<script>
export default {
  name: 'Merveilles',
  data () {
    return {
      isVisible: false,
      isMobile: false
    }
  },
  mounted () {
    if (window.innerWidth <= 800) {
      this.isMobile = true
    }
    // ---- EVENT FOR HOVER ANIMATION ----
    if (!this.isMobile) {
      this.$refs.titleContainer.addEventListener('mouseover', () => {
        this.isVisible = true
      })
      this.$refs.titleContainer.addEventListener('mouseleave', () => {
        this.isVisible = false
      })
      this.$refs.titleHover.addEventListener('mouseover', () => {
        this.isVisible = true
      })
      this.$refs.titleHover.addEventListener('mouseleave', () => {
        this.isVisible = false
      })
    } else {
      this.$refs.titleContainer.addEventListener('click', this.handleclick)
    }
  },
  methods: {
    handleclick () {
      this.isVisible = !this.isVisible
    }
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
.merveilles {
  width: 100%;
  position: absolute;
  top: 6.5vh;
  display: flex;
  justify-content: center;
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 890px) {
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
      @media (max-width: 890px) {
        width: 100%;
        height: auto;
        align-items: center;
      }
      .mausoleeHalicarnasse {
        width: 325px;
        height: 300px;
        margin-right: 105px;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          margin-right: 0;
        }
      }
      .pyramidesKeops {
        width: 325px;
        height: 175px;
        margin-right: 7px;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          margin-right: 0;
        }
      }
      .phareAlexendrie {
        width: 230px;
        height: 238px;
        margin-right: 200px;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          width: 324px;
          height: 390px;
          margin-right: 0;
        }
      }
      .colosseRhodes {
        width: 179px;
        height: 421px;
        margin-right: 7px;
        margin-top: -252px;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          width: 324px;
          height: 560px;
          margin-right: 0;
          margin-top: 0px;
        }
      }
    }
    .right {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      @media (max-width: 890px) {
        width: 100%;
        height: auto;
        align-items: center;
        flex-direction: column;
      }
      .statueZeus {
        width: 209px;
        height: 209px;
        margin-left: 7px;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          width: 323px;
          height: 368px;
          margin-right: 0;
          margin-bottom: 14px;
        }
      }
      .templeArthemis {
        width: 345px;
        height: 425px;
        margin-left: 7px;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          width: 322px;
          height: 404px;
          margin-bottom: 14px;
        }
      }
      .jardinsSuspendues {
        width: 262px;
        height: 262px;
        margin-left: 7px;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          width: 322px;
          height: 316px;
          margin-right: 0;
          margin-bottom: 14px;
        }
      }
      .desc {
        margin-left: 283px;
        margin-top: -276px;
        width: 272px;
        font-family: "Prophet Regular";
        font-size: 15px;
        line-height: normal;
        text-align: start;
        @media (max-width: 1045px) {
          width: 55%;
        }
        @media (max-width: 890px) {
          width: 31%;
          margin-top: 0;
          margin-right: 0;
          margin-bottom: 14px;
          margin-left: -39px;
        }
        @media (max-width: 440px) {
          width: 62%;
          margin-left: -56px;
        }
      }
    }
  }
  .title {
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: -228px;
    visibility: hidden;
    font-family: "Le Murmure";
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: $purple;
    font-size: 220px;
    line-height: normal;
    letter-spacing: 8px;
    z-index: 1;
    @media (max-width: 2580px) {
      margin-top: -50px;
    }
    @media (max-width: 1200px) {
      margin-top: -18vh;
    }
     @media (max-width: 890px) {
      align-self: flex-start;
      margin-top: 95px;
      font-size: 170px;
     }
     @media (max-width: 440px) {
      margin-top: 142px;
      font-size: 113px;
     }
  }
  .titleVisible {
    visibility: visible;
    @media (max-width: 440px) {
      position: fixed;
      top: 0;
    }
  }
}
</style>
