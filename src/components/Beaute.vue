<template>
  <div class="beaute">
    <div class="container">
      <div class="left">
        <img ref="hover1" class="illu1" src="../../static/img/01_la_beaute/illu1.png"/>
        <img ref="hover2" class="illu2" src="../../static/img/01_la_beaute/illu2.png"/>
        <img ref="hover3" class="illu3" src="../../static/img/01_la_beaute/illu3.png"/>
        <div ref="hover4" class="text1">
          <p>« vous donnez à voir des choses que vous n’avez jamais vue »</p>
        </div>
      </div>
      <div class="right">
        <img ref="hover5" class="illu4" src="../../static/img/01_la_beaute/illu4.png"/>
        <div ref="hover6" class="text2">
          <p>« se mettre à la place de l’autre »</p>
        </div>
        <img ref="hover7" class="illu5" src="../../static/img/01_la_beaute/illu5.png"/>
        <img ref="hover8" class="illu6" src="../../static/img/01_la_beaute/illu6.png"/>
      </div>
    </div>
    <span class="title" ref="titleHover" :class="{'titleVisible': isVisible}">"la beauté ?"</span>
  </div>
</template>

<script>
export default {
  name: 'Beaute',
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
.beaute {
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
      .illu1 {
        width: 371px;
        height: 209px;
        margin-right: 7px;
        margin-bottom: 14px;
        margin-top: 55px;
        @media (max-width: 1090px) {
          margin-right: 7px;
          width: 321px;
          height: 187px;
        }
      }
      .illu2 {
        width: 209px;
        height: 209px;
        margin-right: 7px;
        margin-bottom: 14px;
        @media (max-width: 1090px) {
          margin-right: 5px;
          width: 323px;
          height: 309px;
        }
      }
      .illu3 {
        width: 204px;
        height: 228px;
        margin-right: 7px;
        margin-bottom: 14px;
        margin-top: 264px;
        @media (max-width: 1090px) {
          margin-right: 7px;
          margin-top: 0;
          width: 323px;
          height: 428px;
        }
      }
      .text1 {
        width: 579px;
        height: 67px;
        border: 1.5px solid $purple;
        box-sizing: border-box;
        margin-left: 7px;
        margin-top: -220px;
        margin-right: 27px;
        font-family: "Prophet Regular";
        color: $purple;
        font-size: 19px;
        line-height: 27px;
        text-align: left;
        padding: 0px 15px;
        @media (max-width: 1090px) {
          margin-top: 0;
          margin-right: 4px;
          margin-left: 0;
          width: 325px;
          height: 95px;
          margin-bottom: -41px;
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
      .illu4 {
        width: 421px;
        height: 300px;
        margin-top: 55px;
        margin-left: 7px;
        margin-bottom: 14px;
        @media (max-width: 1090px) {
          margin-right: 3px;
          margin-bottom: 14px;
          margin-left: 0;
          width: 324px;
          height: 230px;
        }
      }
      .text2 {
        width: 331px;
        height: 67px;
        border: 1.5px solid $purple;
        box-sizing: border-box;
        margin-left: 322px;
        margin-top: -200px;
        margin-bottom: 132px;
        font-family: "Prophet Regular";
        color: $purple;
        font-size: 19px;
        line-height: 27px;
        text-align: left;
        padding: 0px 15px;
        @media (max-width: 1090px) {
          margin-top: 0px;
          margin-left: -3px;
          width: 325px;
          margin-bottom: 14px;
        }
      }
      .illu5 {
        width: 299px;
        height: 368px;
        margin-left: 7px;
        margin-bottom: 86px;
        @media (max-width: 1090px) {
          margin-right: 8px;
          margin-bottom: 14px;
          width: 324px;
          height: 398px;
        }
      }
      .illu6 {
        width: 421px;
        height: 172px;
        margin-left: 7px;
        @media (max-width: 1090px) {
          margin-right: 6px;
          width: 326px;
          height: 152px;
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
    top: 50vh;
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
  }
  .titleVisible {
    visibility: visible;
    @media (max-width: 1090px) {
      position: fixed;
      top: 490px;
      font-size: 170px;
    }
    @media (max-width: 500px) {
      top: 514px;
      font-size: 92px;
    }
  }
}
</style>
