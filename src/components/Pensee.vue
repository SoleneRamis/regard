<template>
  <div class="pensee">
    <div class="container">
      <div class="left">
        <img ref="hover1" class="mk2" src="../../static/img/03_pensee/mk2.png"/>
        <!-- <img cref="hover2" lass="gifPassport" src="../../static/img/03_pensee/phareAlexendrie.png"/> -->
        <img ref="hover3" class="pensee1" src="../../static/img/03_pensee/pensee_1.png"/>
      </div>
      <div class="right">
        <!-- <img  ref="hover4" class="gifCarte" src="../../static/img/03_pensee/gifCarte.png"/> -->
        <span ref="hover5" class="leap">Leap motion — Mouvements Changer d’incarnation Ouvrir la map</span>
        <img ref="hover6" class="pensee2" src="../../static/img/03_pensee/pensee_2.png"/>
        <img ref="hover7" class="pensee3" src="../../static/img/03_pensee/pensee_3.png"/>
        <span ref="hover8" class="casquevr">Casque VR — Déplacement Pointer/ selectionner Immersion</span>
      </div>
    </div>
    <span class="title" ref="titleHover" :class="{'titleVisible': isVisible}">"pensée"</span>
  </div>
</template>

<script>
export default {
  name: 'Pensee',
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
.pensee {
  width: 100%;
  margin-top: 6.5vh;
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
      .mk2 {
        width: 355px;
        height: 228px;
        margin-right: 7px;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          margin-right: 0;
        }
      }
      .gifPassport {
        width: 325px;
        height: 175px;
        margin-right: 7px;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          margin-right: 0;
        }
      }
      .pensee1 {
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
      .gifCarte {
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
      .leap {
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
      .pensee2 {
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
      .pensee3 {
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
      .casquevr {
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
