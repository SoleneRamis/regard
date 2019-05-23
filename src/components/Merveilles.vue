<template>
  <div class="merveilles">
    <div class="container">
      <div class="left">
        <img ref="hover1" class="mausoleeHalicarnasse" src="../../static/img/02_sept_merveilles/mausoleeHalicarnasse.png"/>
        <img ref="hover2" class="pyramidesKeops" src="../../static/img/02_sept_merveilles/pyramidesKeops.png"/>
        <img ref="hover3" class="phareAlexendrie" src="../../static/img/02_sept_merveilles/phareAlexendrie.png"/>
        <img ref="hover4" class="colosseRhodes" src="../../static/img/02_sept_merveilles/colosseRhodes.png"/>
      </div>
      <div class="right">
        <img ref="hover5" class="statueZeus" src="../../static/img/02_sept_merveilles/statueZeus.png"/>
        <img ref="hover6" class="templeArthemis" src="../../static/img/02_sept_merveilles/templeArthemis.png"/>
        <img ref="hover7" class="jardinsSuspendues" src="../../static/img/02_sept_merveilles/jardinsSuspendues.png"/>
        <span ref="hover8" class="desc">Comment découvrir les 7 merveilles <br> sous un nouvel angle? —</span>
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
      this.$refs.hover1.addEventListener('mouseover', () => {
        this.isVisible = true
      })
      this.$refs.hover1.addEventListener('mouseleave', () => {
        this.isVisible = false
      })
      this.$refs.hover2.addEventListener('mouseover', () => {
        this.isVisible = true
      })
      this.$refs.hover2.addEventListener('mouseleave', () => {
        this.isVisible = false
      })
      this.$refs.hover3.addEventListener('mouseover', () => {
        this.isVisible = true
      })
      this.$refs.hover3.addEventListener('mouseleave', () => {
        this.isVisible = false
      })
      this.$refs.hover4.addEventListener('mouseover', () => {
        this.isVisible = true
      })
      this.$refs.hover4.addEventListener('mouseleave', () => {
        this.isVisible = false
      })
      this.$refs.hover4.addEventListener('mouseover', () => {
        this.isVisible = true
      })
      this.$refs.hover4.addEventListener('mouseleave', () => {
        this.isVisible = false
      })
      this.$refs.hover5.addEventListener('mouseover', () => {
        this.isVisible = true
      })
      this.$refs.hover5.addEventListener('mouseleave', () => {
        this.isVisible = false
      })
      this.$refs.hover6.addEventListener('mouseover', () => {
        this.isVisible = true
      })
      this.$refs.hover6.addEventListener('mouseleave', () => {
        this.isVisible = false
      })
      this.$refs.hover7.addEventListener('mouseover', () => {
        this.isVisible = true
      })
      this.$refs.hover7.addEventListener('mouseleave', () => {
        this.isVisible = false
      })
      this.$refs.hover8.addEventListener('mouseover', () => {
        this.isVisible = true
      })
      this.$refs.hover8.addEventListener('mouseleave', () => {
        this.isVisible = false
      })
      this.$refs.titleHover.addEventListener('mouseover', () => {
        this.isVisible = true
      })
      this.$refs.titleHover.addEventListener('mouseleave', () => {
        this.isVisible = false
      })
    } else {
      this.$refs.hover1.addEventListener('click', this.handleclick)
      this.$refs.hover2.addEventListener('click', this.handleclick)
      this.$refs.hover3.addEventListener('click', this.handleclick)
      this.$refs.hover4.addEventListener('click', this.handleclick)
      this.$refs.hover4.addEventListener('click', this.handleclick)
      this.$refs.hover5.addEventListener('click', this.handleclick)
      this.$refs.hover6.addEventListener('click', this.handleclick)
      this.$refs.hover7.addEventListener('click', this.handleclick)
      this.$refs.hover8.addEventListener('click', this.handleclick)
      this.$refs.titleHover.addEventListener('click', this.handleclick)
    }
  },
  methods: {
    handleclick () {
      this.isVisible = true
      setTimeout(() => { this.isVisible = false }, 2000)
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
  margin-top: 14px;
  display: flex;
  justify-content: center;
  .container {
    width: 86%;
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
          height: 640px;
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
        width: 312px;
        font-family: "Prophet Regular";
        font-size: 15px;
        line-height: 21px;
        text-align: left;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          margin-top: 0;
          margin-right: 0;
          margin-left: 0;
        }
      }
    }
  }
  .title {
    width: 88%;
    position: absolute;
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
    @media (max-width: 2580px) {
      margin-top: -50px;
    }
    @media (max-width: 1200px) {
      margin-top: -18vh;
    }

  }
  .titleVisible {
    visibility: visible;
    @media (max-width: 890px) {
      position: fixed;
      top: 283px;
      font-size: 170px;
     }
     @media (max-width: 500px) {
      position: fixed;
      top: 412px;
      font-size: 120px;
     }
  }
}
</style>
