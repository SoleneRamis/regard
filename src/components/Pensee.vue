<template>
  <div class="pensee">
    <div class="container">
      <div class="left">
        <img ref="hover1" class="mk2" src="../../static/img/03_pensee/mk2.png"/>
        <img ref="hover2" class="gifPassport" src="../../static/img/03_pensee/GIF1.gif"/>
        <img ref="hover3" class="pensee1" src="../../static/img/03_pensee/pensee_1.png"/>
      </div>
      <div class="right">
        <img ref="hover4" class="gifCarte" src="../../static/img/03_pensee/GIF2.gif"/>
        <span ref="hover5" class="leap"><b>Leap motion —</b> Mouvements <br> Changer d’incarnation <br> Ouvrir la map</span>
        <img ref="hover6" class="pensee2" src="../../static/img/03_pensee/pensee_2.png"/>
        <img ref="hover7" class="pensee3" src="../../static/img/03_pensee/pensee_3.png"/>
        <span ref="hover8" class="casquevr"><b>Casque VR — </b>  <br> Déplacement <br> Pointer/ selectionner <br> Immersion</span>
        <div ref="hover9" class="concept">
          <p>Jeu qui permet d’explorer les 7 merveilles du monde à travers différents regards.</p>
          <p>Sélectionner le bon personnage afin de résoudre les énigmes et ainsi accéder aux merveilles suivantes.</p>
        </div>
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
      this.$refs.hover9.addEventListener('mouseover', () => {
        this.isVisible = true
      })
      this.$refs.hover9.addEventListener('mouseleave', () => {
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
      this.$refs.hover9.addEventListener('click', this.handleclick)
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
.pensee {
  width: 100%;
  margin-top: 0;
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
          width: 323px;
          height: 195px;
          margin-right: -5px;
        }
      }
      .gifPassport {
        width: 158px;
        height: 158px;
        margin-right: 278px;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          margin-right: -4px;
          width: 323px;
          height: 323px;
        }
      }
      .pensee1 {
        width: 257px;
        height: 346px;
        margin-right: 7px;
        margin-bottom: 14px;
        margin-top: -172px;
        @media (max-width: 890px) {
          width: 324px;
          height: 435px;
          margin-right: -5px;
          margin-top: 0;
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
        width: 150px;
        height: 150px;
        margin-left: 62px;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          width: 325px;
          height: 325px;
          margin-right: -5px;
          margin-bottom: 14px;
          margin-left: 0;
        }
      }
      .leap {
        width: 164px;
        margin-left: 226px;
        margin-bottom: 14px;
        margin-top: -102px;
        font-family: "Prophet Regular";
        line-height: 21px;
        text-align: left;
        @media (max-width: 890px) {
          width: 322px;
          margin-bottom: 14px;
          margin-top: 0;
          margin-left: 0;
        }
      }
      .pensee2 {
        width: 371px;
        height: 123px;
        margin-left: 7px;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          width: 322px;
          margin-right: 0;
          margin-bottom: 14px;
        }
      }
      .pensee3 {
        width: 246px;
        height: 286px;
        margin-left: 7px;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          width: 322px;
          margin-right: 0;
          margin-bottom: 14px;
        }
      }
      .casquevr {
        width: 315px;
        height: 86px;
        margin-left: 267px;
        margin-top: -300px;
        font-family: "Prophet Regular";
        font-size: 15px;
        line-height: normal;
        text-align: left;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          margin-top: 0;
          margin-right: 0;
          margin-left: 0;
        }
      }
      .concept {
        width: 399px;
        height: 192px;
        border: 1.5px solid $purple;
        box-sizing: border-box;
        margin-left: 7px;
        margin-top: 200px;
        margin-bottom: 14px;
        font-family: "Prophet Regular";
        color: $purple;
        font-size: 19px;
        line-height: 27px;
        text-align: left;
        padding: 0px 15px;
        @media (max-width: 890px) {
          margin-top: 0;
          margin-right: -7px;
          margin-left: 0;
          width: 325px;
          height: 245px;
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
     @media (max-width: 890px) {
      position: fixed;
      top: 435px;
      font-size: 195px;
     }
     @media (max-width: 500px) {
      top: 415px;
      font-size: 140px;
     }
  }
}
</style>
