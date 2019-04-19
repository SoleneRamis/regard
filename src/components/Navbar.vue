<template>
  <div class="navbar">
    <router-link to="/team" class="team">team</router-link>
    <router-link to="/" class="logo">
    <div class="logoAnim">
        <div class="square">
        </div>
            <span class="slashLeft">\</span>
            <span class="name">
                <svg width="83" height="24" viewBox="0 0 83 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.7399 17.9776L33.7501 17.9776L33.7501 19.8541L36.7399 19.8541L36.7399 17.9776Z" fill="#B52DF5"/>
                  <path d="M16.7555 8.47869L16.1654 8.2628L16.1654 18.044L16.4211 18.044C17.975 18.044 18.5454 17.5624 18.5454 15.852L18.5454 10.4881C18.5454 9.55811 18.1717 8.97688 16.7555 8.47869ZM13.8247 0.590607L16.1654 0.590607L16.1654 7.54872C17.1292 7.91407 17.6603 7.58194 17.798 6.91768L18.9781 0.590607L21.3582 0.590607L19.6076 8.21298L17.6996 7.9971L17.6603 8.31262C19.4699 9.0267 20.8861 9.97327 20.8861 12.0657L20.8861 16.5162C20.8861 18.9242 19.3322 19.8375 16.6374 19.8375L13.8247 19.8375L13.8247 0.590607Z" fill="#B52DF5"/>
                  <path d="M64.5923 8.47869L64.0022 8.2628L64.0022 18.044L64.2579 18.044C65.8118 18.044 66.3822 17.5624 66.3822 15.852L66.3822 10.4881C66.3822 9.55811 65.9888 8.97688 64.5923 8.47869ZM61.6615 0.590607L64.0022 0.590607L64.0022 7.54872C64.966 7.91407 65.4971 7.58194 65.6348 6.91768L66.815 0.590607L69.195 0.590607L67.4444 8.21298L65.5364 7.9971L65.4971 8.31262C67.3067 9.0267 68.7229 9.97327 68.7229 12.0657L68.7229 16.5162C68.7229 18.9242 67.169 19.8375 64.4743 19.8375L61.6615 19.8375L61.6615 0.590607Z" fill="#B52DF5"/>
                  <path d="M26.1576 15.1545L26.1576 11.6505L28.5376 11.6505L28.5376 15.935C28.5376 17.0477 28.3409 17.7285 27.3968 17.7285C26.5903 17.7285 26.1576 17.4296 26.1576 15.1545ZM23.7776 16.1841C23.7776 18.891 24.9184 19.8542 27.1017 19.8542C29.4818 19.8542 31.311 18.7083 31.311 15.6361L31.311 4.22743C31.311 1.55378 30.0915 0.590607 27.6721 0.590607C25.0167 0.590607 23.7579 2.83249 23.8366 5.77184L23.9546 9.49169L24.5053 9.49169L24.6234 5.85487C24.702 3.86209 25.2134 2.68303 26.4133 2.68303C27.5148 2.68303 28.5573 3.03176 28.5573 5.25704L28.5573 11.1856L23.7776 11.1856L23.7776 16.1841Z" fill="#B52DF5"/>
                  <path d="M53.6165 17.5957C53.2428 17.5957 52.9871 17.413 52.9871 16.8484L52.9871 13.743C52.9871 12.431 53.2428 11.7004 54.8557 10.3552L54.8557 12.8462C54.8754 15.6859 54.423 17.5957 53.6165 17.5957ZM54.2459 0.590607C51.9249 0.590607 50.1153 2.8657 50.1153 4.80866C50.1153 6.23682 50.3317 8.01371 51.0791 9.49169L54.6197 9.49169C51.6102 6.91768 50.9808 5.77183 50.9808 4.45992C50.9808 3.3805 51.4528 2.68303 53.3805 2.68303C54.6 2.68303 54.895 2.93212 54.895 3.92851L54.895 9.67436C51.9839 11.9661 50.4497 12.9624 50.4497 15.4866L50.4497 17.6289C50.4497 19.1235 51.1775 19.8375 52.5937 19.8375C54.0099 19.8375 54.9147 19.0902 55.4655 14.457L55.8392 14.5235C55.4065 18.9408 56.0555 19.8375 57.5701 19.8375C59.3011 19.8375 59.6748 18.343 59.6354 16.3834L59.5174 11.0693L59.006 11.0693L58.888 16.4996C58.8486 17.5292 58.5929 17.7119 58.2586 17.7119C57.8455 17.7119 57.4914 17.5292 57.4914 15.852L57.4914 3.14801C57.4521 1.55378 56.3703 0.590607 54.2459 0.590607ZM40.8902 20.452C40.8902 20.1032 41.0672 19.8043 41.6573 19.5552L45.1585 19.5552C46.4174 19.5552 46.7124 19.987 46.7124 20.7343C46.7124 21.3487 46.0043 21.5978 44.3127 21.5978C41.441 21.5978 40.8902 21.0664 40.8902 20.452ZM43.0932 3.01516C43.821 3.01516 44.5291 3.36389 44.5291 5.58916L44.5291 12.2816C44.5291 13.361 44.3521 14.0585 43.5259 14.0585C42.7588 14.0585 42.0901 13.7097 42.0901 11.4845L42.0901 4.79205C42.0901 3.69602 42.2868 3.01516 43.0932 3.01516ZM47.1058 5.15739C47.1058 3.16461 45.7093 2.01877 43.6833 1.80288L43.6833 1.43754C45.4142 1.47075 46.6928 1.90252 48.8368 4.47653L48.8368 0.90613L43.5456 0.90613C41.382 0.90613 39.533 2.05198 39.533 5.10757L39.533 12.2816C39.533 13.8592 40.0051 14.8556 40.8902 15.4202C40.2608 16.0679 39.1986 16.8484 39.1986 17.9112C39.1986 18.7249 39.7887 19.1235 40.6345 19.3061L40.6345 19.4888C39.6313 19.8541 38.8249 20.5682 38.8249 21.6975C38.8249 22.6274 39.71 23.5906 41.913 23.5906C44.9618 23.5906 48.5024 21.0166 48.5024 19.3726C48.5024 18.0939 47.4402 17.4462 45.1585 17.4462L41.2639 17.4462C40.5558 17.4462 40.3395 17.2967 40.3395 17.0144C40.3395 16.6989 40.8509 16.1675 41.4803 15.6859C41.913 15.8686 42.4835 15.935 43.0932 15.935C45.2569 15.935 47.1058 14.8224 47.1058 11.8996L47.1058 5.15739Z" fill="#B52DF5"/>
                </svg>
            </span>
            <span class="slashRight">\</span>
        </div>
    </router-link>
    <router-link to="/off" class="off">off</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "@/config.scss";
.navbar {
  position: fixed;
  width: 100%;
  height: 100px;
  left: 0px;
  top: 0px;
  margin-bottom: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  .team {
    position: fixed;
    left: 370px;
  }
  .off {
    position: fixed;
    right: 380px;
  }
  .team,
  .off {
    &:hover {
      text-decoration: line-through wavy;
    }
  }
  a {
    color: $purple;
    text-decoration: none;
    font-family: "Prophet Regular";
    font-size: 20px;
    line-height: normal;
    margin: 40px 0;
    text-transform: uppercase;
  }
  .logoAnim {
    position: relative;
    margin-top: -14px;
    margin-left: 6px;
    .square {
      width: 50px;
      height: 50px;
      position: relative;
      background-color: $purple;
      opacity: 1;
      transition: opacity 0.5s ease-in-out;
    }
    span {
      color: white;
      font-size: 37px;
      margin-left: -14px;
      position: absolute;
      top: 0px;
    }
    .slashLeft {
      transform: translate(0vw, 0vh);
      color: white;
      transition: all 1s ease-in-out;
    }
    .slashRight {
      transform: translate(0vw, 0vh);
      color: white;
      transition: all 1s ease-in-out;
      left: 33px;
    }
    .name {
      font-family: "Le Murmure";
      color: $purple;
      position: absolute;
      left: -21px;
      top: 2px;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      -moz-transition: opacity 0.5s ease-in-out;
      -webkit-transition: opacity 0.5s ease-in-out;
      svg {
        width: 135px;
        height: 35px;
      }
    }
    &:hover {
      .square {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
      }
      .slashLeft {
        transform: translate(-42px, -4px);
        color: $purple;
        transition: all 1s ease-in-out;
      }
      .slashRight {
        transform: translate(60px, -4px);
        color: $purple;
        transition: all 1s ease-in-out;
      }
      .name {
        opacity: 1;
        transition: opacity 1s ease-in-out;
        -moz-transition: opacity 1s ease-in-out;
        -webkit-transition: opacity 1s ease-in-out;
      }
    }
  }
}
</style>
