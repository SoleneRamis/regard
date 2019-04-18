<template>
  <div class="merveilles">
      <img class="mausoleeHalicarnasse" src="../assets/02_sept_merveilles/mausoleeHalicarnasse.png"/>
      <img class="pyramidesKeops" src="../assets/02_sept_merveilles/pyramidesKeops.png"/>
      <img class="phareAlexendrie" src="../assets/02_sept_merveilles/phareAlexendrie.png"/>
      <img class="colosseRhodes" src="../assets/02_sept_merveilles/colosseRhodes.png"/>
      <img class="statueZeus" src="../assets/02_sept_merveilles/statueZeus.png"/>
      <img class="templeArthemis" src="../assets/02_sept_merveilles/templeArthemis.png"/>
      <img class="jardinsSuspendues" src="../assets/02_sept_merveilles/jardinsSuspendues.png"/>
      <span class="title">les sept merveilles</span>
  </div>
</template>

<script>
export default {
  name: 'Merveilles',
  data () {
    return {}
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
  .mausoleeHalicarnasse {
    width: 325px;
    height: 300px;
    position: absolute;
    left: 525px;
  }
  .pyramidesKeops {
    width: 325px;
    height: 175px;
    position: absolute;
    left: 623px;
    top: 314px;
  }
  .phareAlexendrie {
    width: 230px;
    height: 238px;
    position: absolute;
    left: 525px;
    top: 503px;
  }
  .colosseRhodes {
    width: 179px;
    height: 421px;
    position: absolute;
    left: 769px;
    top: 503px;
  }
  .statueZeus {
    width: 209px;
    height: 209px;
    position: absolute;
    right: 735px;
  }
  .templeArthemis {
    width: 345px;
    height: 425px;
    position: absolute;
    right: 597px;
    top: 223px;
  }
  .jardinsSuspendues {
    width: 262px;
    height: 262px;
    position: absolute;
    right: 680px;
    top: 662px;
  }
  .title {
    position: absolute;
    left: 16.5vw;
    top: 31vh;
    visibility: hidden;
    font-family: "Le Murmure";
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: $purple;
    font-size: 130px;
    line-height: normal;
    letter-spacing: 8px;
    z-index: 1;
  }
  &:hover {
    .title {
      visibility: visible;
    }
  }
}
</style>
