<template>
  <div class="squad">
    <div class="container">
      <div class="left">
        <img ref="hover1" class="napoleon" src="../../static/img/04_ex_squad/Napoleon.png"/>
        <span ref="hover2" class="descNapoleon">
            <b>— Napoléon</b> <br>
            Connaissances théoriques <br>
            Connaissances tratégiques <br>
            Équipement d’aventurier <br>
            Érudit
        </span>
        <img ref="hover3" class="isis" src="../../static/img/04_ex_squad/Isis.png"/>
        <span ref="hover4" class="descIsis">
            <b>— Isis</b> <br>
            Femme de la mythologie égyptienne <br>
            Lit les hiéroglyphes <br>
            Fait des enchantements <br>
            Sûre d’elle
        </span>
      </div>
      <div class="right">
        <img ref="hover5" class="kefera" src="../../static/img/04_ex_squad/Kefera.png"/>
        <span ref="hover6" class="descKefera">
            <b>Kéfera —</b> <br>
            Voit dans le noir <br>
            Rassurant <br>
            Vision basse
        </span>
        <img ref="hover6" class="dali" src="../../static/img/04_ex_squad/Dali.png"/>
        <span ref="hover7" class="descDali">
            <b>Dalì —</b> <br>
            Imaginaire surdéveloppé <br>
            Surinterprète les lieux <br>
            Fou/ délirant <br>
            Hallucinations
        </span>
      </div>
    </div>
    <span class="title" ref="titleHover" :class="{'titleVisible': isVisible}">"pensée"</span>
  </div>
</template>

<script>
export default {
  name: 'Squad',
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
.squad {
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
      .napoleon {
        width: 355px;
        height: 228px;
        margin-right: 7px;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          margin-right: 0;
        }
      }
      .descNapoleon {
        width: 321px;
        height: 107px;
        margin-right: 334px;
        margin-bottom: 72px;
        margin-top: -179px;
        font-family: "Prophet Regular";
        font-size: 15px;
        line-height: 21px;
        text-align: right;
        @media (max-width: 890px) {
          margin-right: 0;
        }
      }
      .isis {
        width: 209px;
        height: 209px;
        margin-right: 7px;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          margin-right: -4px;
        }
      }
      .descIsis {
        width: 321px;
        height: 107px;
        margin-right: 230px;
        margin-bottom: 14px;
        margin-top: -121px;
        font-family: "Prophet Regular";
        font-size: 15px;
        line-height: 21px;
        text-align: right;
        @media (max-width: 890px) {
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
      .kefera {
        width: 280px;
        height: 150px;
        margin-left: 7px;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          margin-right: -5px;
          margin-bottom: 14px;
        }
      }
      .descKefera {
        width: 164px;
        margin-left: 301px;
        margin-bottom: 14px;
        margin-top: -102px;
        font-size: 15px;
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
      .dali {
        width: 355px;
        height: 353px;
        margin-left: 73px;
        margin-bottom: 14px;
        @media (max-width: 890px) {
          margin-right: 0;
        }
      }
      .descDali {
        width: 185px;
        height: 107px;
        margin-left: 365px;
        margin-top: -252px;
        margin-bottom: 14px;
        font-family: "Prophet Regular";
        line-height: 21px;
        text-align: left;
        @media (max-width: 890px) {
          margin-right: 0;
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
