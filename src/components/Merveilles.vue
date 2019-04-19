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
      </div>
    </div>
      <span class="title"  :class="{'hoverTitle': isHover}">les sept merveilles</span>
  </div>
</template>

<script>
export default {
  name: 'Merveilles',
  data () {
    return {
      isHover: false
    }
  },
  mounted () {
    // ---- EVENT FOR HOVER ANIMATION ----
    this.$refs.titleContainer.addEventListener('mouseenter', () => {
      this.isHover = true
    })
    this.$refs.titleContainer.addEventListener('mouseleave', () => {
      this.isHover = false
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/config.scss";
.merveilles {
  width: 100%;
  height: 1080px;
  position: absolute;
  top: 6.5vh;
  display: flex;
  justify-content: center;
  .container {
    width: 60%;
    display: flex;
    justify-content: space-between;
    .left {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      .mausoleeHalicarnasse {
        width: 325px;
        height: 300px;
        margin-right: 105px;
        margin-bottom: 14px;
      }
      .pyramidesKeops {
        width: 325px;
        height: 175px;
        margin-right: 7px;
        margin-bottom: 14px;
      }
      .phareAlexendrie {
        width: 230px;
        height: 238px;
        margin-right: 200px;
        margin-bottom: 14px;
      }
      .colosseRhodes {
        width: 179px;
        height: 421px;
        margin-right: 7px;
        margin-top: -252px;
        margin-bottom: 14px;
      }
    }
    .right {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .statueZeus {
        width: 209px;
        height: 209px;
        margin-left: 7px;
        margin-bottom: 14px;
      }
      .templeArthemis {
        width: 345px;
        height: 425px;
        margin-left: 7px;
        margin-bottom: 14px;
      }
      .jardinsSuspendues {
        width: 262px;
        height: 262px;
        margin-left: 7px;
        margin-bottom: 14px;
      }
    }
  }
  .title {
    position: fixed;
    left: 9vw;
    top: 31vh;
    visibility: hidden;
    font-family: "Le Murmure";
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: $purple;
    font-size: 121.5px;
    line-height: normal;
    letter-spacing: 8px;
    z-index: 1;
  }
  .hoverTitle {
    visibility: visible;
  }
}
</style>
