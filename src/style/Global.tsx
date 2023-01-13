import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family:"natom-pro";
  src:url("https://use.typekit.net/af/da1118/00000000000000007735e5cc/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/da1118/00000000000000007735e5cc/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/da1118/00000000000000007735e5cc/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
  font-display:auto;font-style:normal;font-weight:500;
  }
  
  @font-face {
  font-family:"natom-pro";
  src:url("https://use.typekit.net/af/55b689/00000000000000007735e5c9/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3") format("woff2"),url("https://use.typekit.net/af/55b689/00000000000000007735e5c9/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3") format("woff"),url("https://use.typekit.net/af/55b689/00000000000000007735e5c9/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3") format("opentype");
  font-display:auto;font-style:normal;font-weight:200;
  }
  
  @font-face {
  font-family:"natom-pro";
  src:url("https://use.typekit.net/af/24665b/00000000000000007735e5c3/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/24665b/00000000000000007735e5c3/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/24665b/00000000000000007735e5c3/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
  font-display:auto;font-style:normal;font-weight:300;
  }
  
  @font-face {
  font-family:"natom-pro";
  src:url("https://use.typekit.net/af/4363ba/00000000000000007735e5c8/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/4363ba/00000000000000007735e5c8/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/4363ba/00000000000000007735e5c8/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
  font-display:auto;font-style:normal;font-weight:700;
  }
  
  @font-face {
  font-family:"natom-pro";
  src:url("https://use.typekit.net/af/681069/00000000000000007735e5ca/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/681069/00000000000000007735e5ca/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/681069/00000000000000007735e5ca/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
  font-display:auto;font-style:normal;font-weight:400;
  }
  
  @font-face {
  font-family:"natom-pro";
  src:url("https://use.typekit.net/af/170fca/00000000000000007735e5c7/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff2"),url("https://use.typekit.net/af/170fca/00000000000000007735e5c7/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff"),url("https://use.typekit.net/af/170fca/00000000000000007735e5c7/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("opentype");
  font-display:auto;font-style:italic;font-weight:300;
  }
  
  @font-face {
  font-family:"natom-pro";
  src:url("https://use.typekit.net/af/d985cf/00000000000000007735e5c4/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/d985cf/00000000000000007735e5c4/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/d985cf/00000000000000007735e5c4/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
  font-display:auto;font-style:italic;font-weight:700;
  }
  
  @font-face {
  font-family:"natom-pro";
  src:url("https://use.typekit.net/af/4ab9e7/00000000000000007735e5cf/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("woff2"),url("https://use.typekit.net/af/4ab9e7/00000000000000007735e5cf/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("woff"),url("https://use.typekit.net/af/4ab9e7/00000000000000007735e5cf/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("opentype");
  font-display:auto;font-style:italic;font-weight:200;
  }
  
  @font-face {
  font-family:"natom-pro";
  src:url("https://use.typekit.net/af/536ca5/00000000000000007735e5cb/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/536ca5/00000000000000007735e5cb/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/536ca5/00000000000000007735e5cb/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
  font-display:auto;font-style:italic;font-weight:400;
  }
  
  @font-face {
  font-family:"natom-pro";
  src:url("https://use.typekit.net/af/6013ad/00000000000000007735e5cd/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff2"),url("https://use.typekit.net/af/6013ad/00000000000000007735e5cd/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff"),url("https://use.typekit.net/af/6013ad/00000000000000007735e5cd/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("opentype");
  font-display:auto;font-style:italic;font-weight:500;
  }
  
  @font-face {
  font-family:"natom-pro";
  src:url("https://use.typekit.net/af/19d3ae/00000000000000007735e5c5/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("woff2"),url("https://use.typekit.net/af/19d3ae/00000000000000007735e5c5/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("woff"),url("https://use.typekit.net/af/19d3ae/00000000000000007735e5c5/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("opentype");
  font-display:auto;font-style:normal;font-weight:900;
  }
  
  @font-face {
  font-family:"natom-pro";
  src:url("https://use.typekit.net/af/bf5580/00000000000000007735e5c6/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i9&v=3") format("woff2"),url("https://use.typekit.net/af/bf5580/00000000000000007735e5c6/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i9&v=3") format("woff"),url("https://use.typekit.net/af/bf5580/00000000000000007735e5c6/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i9&v=3") format("opentype");
  font-display:auto;font-style:italic;font-weight:900;
  }
  * {
    font-family: 'natom-pro', sans-serif;
  }
  body {
    background-color:rgb(29, 29, 29) !important;
   
    img {
      height: auto;
      max-width: 100%;
    }
    .load{
      position: relative;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 10px solid transparent;
      border-top: 10px solid #1FC7D4;
      border-bottom: 10px solid #1FC7D4;
      animation: rotateAntiCW 6s linear infinite;
      font-size:0;
  }
  
  .load::after{
      content: '';
      position: absolute;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 10px solid transparent;
      border-left: 10px solid #7645D9;
      border-right: 10px solid #7645D9;
      animation: rotate 3s linear infinite;
  }
  
  @keyframes rotate{
      0%{transform: rotate(0deg);}
      100%{transform: rotate(-360deg);}
  }
  
  @keyframes rotateAntiCW{
      0%{transform: rotate(0deg);}
      100%{transform: rotate(360deg);}
  }
  }
  .RitzSwap-theme > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)  {
    // display: none;
}
.RitzSwap-theme > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) {
    margin-left: 0 !important;
    max-width: calc(100% - 0px) !important;
}
// .RitzSwap-theme > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) {
//   min-height:100vh !important;
// }

.RitzSwap-theme nav{
  top: 0 !important;
  border-bottom: 2px solid rgba(133, 133, 133, 0.1) !important;
}
.popups-swaping{
  margin-top:100px;
}
.top-banner{
    // background-image: url('/images/banner.png') !important;
    // height: 860px;
    // background-size: cover !important;
    padding: 0 !important;
    padding-top: 35px !important;
    max-width : 100% !important;
    margin-bottom: -3px;
}
.top-banner > div{
    padding: 0 !important;
    max-width : 100% !important;
    background-color:#1D1D1D;
}
.custom-video {
  width: 100%;
  height: 100%;
  background-image: url('/images/banner-backgroundd.png') !important;
  height: 860px;
  background-size: 100% !important;
  background:repeat no-repeat;
}
.custom-video h2{
  font-weight:normal;
  letter-spacing: 6.72px;
  color: #FFFFFF;
  text-transform: uppercase;
  opacity: 1;
  top: 340px;
  left: 60%;
  height: 46px;
  position: absolute;
  font-size:42px
}
.bottom-heading {
  font-weight: 500;
  color: #FFFFFF;
  text-transform: uppercase;
  opacity: 1;
  top: 380px;
  left: 60%;
  height: 46px;
  position: absolute;
  font-size: 90px;
}
.custom-video>div {
  width: 100% !important;
  height: 100% !important;
}

.calculatormodel-bg{
  background: rgb(51,54,67);
  border-color: rgb(51,54,67);
  min-width: 500px !important;
  h2{
    color: #fff;
  }
  svg{
    fill: #fff;
  }
}
.model-bg{
  background: rgb(51,54,67);
  border-color: rgb(51,54,67);
  min-width: 500px !important;
  h2{
    color: #fff;
  }
  svg{
    fill: #fff;
  }
  a{
    color: #fff;
  }
}
.closebtn{
  svg{
    fill: #fff;
  }
}
.showhide-btn{
  button{
    width:100%;
    color: #fff !important;
  }
  svg{
    fill: #fff !important;
  }
}
.input-style{
  background: #000 !important;
  border-color: #FF4746 !important;
  color: #fff !important;
  svg{
    fill:#fff;
  }
 input{
  color: #fff !important;
    ::placeholder
    {
        color: #fff !important;
    }
    + div{
      color: #fff !important;
    }
    
  }
}
.pools-head > div{
  color: #FF4746 !important;
  background-color: #fff !important;
  border: 2px solid #FF4746;
}
.model-borderbtn{
  border:2px solid #FF416C;
  box-shadow: none !important;
  background:transparent;
  color: #FF416C;
}
// .baner-description
// {
//   width: 50%;
//   padding-right: 15px;
//   padding-left: 15px;
//   text-align:center;
// }
.RitzSwap-theme .gallery-section{
  background: #333643 0% 0% no-repeat padding-box;
  border-radius: 30px;
  opacity: 1;
  width: 100%;
  height: 262px;
  display:flex;
  margin: 47px 0 0;
}
.photos-gallery{
  width: 33.3%;
  padding-right: 15px;
  padding-left: 15px;
  text-align:center;
}
.inner-information{
  margin-top:30px;
  padding: 23px 70px;
}
.inner-information .head{}
.inner-information .para{
  text-align: center;
  font-weight;300;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 0.75;
  height: 86px;
  font-size: 20px;
}
.giveaway-bg h2{
  font-size: 48px !important;
}
.description-image{
  width: 100%;
  margin-top:100px;
}
.description-image img{
  width: 270px;
  height: auto;
}
.Bridge--content{
  width: 33.3%;
  padding-right: 15px;
  padding-left: 15px;
  text-align:center;
}
.Bridge--content.farwad-arrow svg{
  fill: #FF4362 !important;
  height: 36px;
  border: 3px solid;
  border-radius: 50%;
  width: 36px;
  border-color: #FF4362;
}
.Bridge--content img{
  position: relative !important;
  width: auto !important;
  height: auto !important;
  top:0 !important;
}
.bridge--dropdownselect{
  margin-top:25px;
}
.bridge--dropdownselect > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1){
  background:#333642 !important;
  border-radius: 4px !important;
  border-color: #565A67 !important;
}
.bridge--dropdownselect > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div{
  color:#fff !important;
}
.bridge--dropdownselect svg{
  fill:#fff !important;
}
.bridge--content{
  margin: 0px 0 40px 0;
}
.RitzSwap-theme .gallery--info{
  width: 33.3%;
  padding-right: 15px;
  padding-left: 15px;
  text-align:center;
}
.gallery--info .paragraph{
  font-weight:300;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 0.7;
  font-size:26px;
  margin:0;
}
.gallery--info .heading{
  fontsize:54px !important;
}
.text-section {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.popups-swaping nav{
  display:none;
}
.popups-swaping .bg-image{
  width: 74%;
  position: absolute;
  top: 272px;
}
.arrow-down{
  height: 36px;
  border: 3px solid;
  border-radius: 50%;
  width: 36px;
  border-color: #FF4362;
  fill: #FF4362;
  margin: 13px 0;
}
.color-white{
  color:#fff !important;
}
.devider-limit{
  border-bottom: 1px solid #333643;
  margin: 0 30px;
  padding: 0 0px 10px 5px;
}
.devider-limit svg{
  fill: #ff4362;
  margin-left: 10px;
}
.devider{
  border-bottom: 1px solid #333643;
  margin: 8px 30px; 
  padding-bottom: 10px;
}
.selecttoken-color{
  color:#fff;
  background:#3E424E;
  height: 46px;
  border-radius: 10px;
  opacity: 1;
  padding: 5px 10px;
}
.balnceText{
  color:#fff;
  margin: 8px 30px; 
  padding: 12px 10px;
  font-size:24px;
}
button.p-dbutton{
  border-color: #fff !important;
}
nav {
  background-color:#2E2E31 !important;
  position:fixed !important;
  height:100px !important;
  padding-left:33px !important;
  padding-right:38px !important;
  div {
    &:nth-child(1) {
      button {
        // background: #fff !important;
        // display: none !important;
      }
      svg {
        fill: #2E2E31 !important;
      }
      a svg {
        display:none !important;
    }
    a{
      width: 182px;
      background-image: url('/images/Header-Logo.gif') !important;
      display:block !important;
      height:48px;
      background-size:cover;
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
      @media (max-width: 600px){
        width: 140px;
        height:45px;
      }
    }
  }
      > button {
        background: transparent linear-gradient(105deg, #FF416C 0%, #FF4B2B 100%) 0% 0% no-repeat padding-box;
        border-radius: 10px;
        opacity: 1;
        // width: 219px;
        height: 62px !important;
        margin-left:10px;
      }       
  }
}
.red{
  color:#FF416C;
}
.farms-model svg{fill:#FF416C !important;}
.farms-model a{color:#FF416C}
.farms-model-button, .farms-btn  {color:#FF4746 !important;background-color:#fff !important;border:2px solid #FF4746}
.liquidy-button{
  background: transparent linear-gradient(104deg, #FF416C 0%, #FF4B2B 100%) !important;
  box-shadow: none !important;
}
.background{ background: transparent linear-gradient(104deg, #FF416C 0%, #FF4B2B 100%) 0% 0% no-repeat padding-box; !important;opacity: 1 !important!important;}
.add-liquidy{color:#EABF6F;opacity: 1 !important;}
.supply--button.pancake-button--disabled{color: #000 !important;}
.close-icon svg{
  fill:#FF416C !important;
}
.icon svg{
  fill:#FF416C !important;
}
.custom-btn-gradient{
  background: transparent linear-gradient(104deg, #FF416C 0%, #FF4B2B 100%) 0% 0% no-repeat padding-box;
  color: #fff;
  font-size:22px;
  font-weight: normal;
  box-shadow:none;
}
.copyrights {
    border-top: 1px solid #ffffff61;
    padding: 20px 0;
}

::-webkit-scrollbar-thumb {
  background: #FF4648;
  border-radius: 8px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #FF4648;
  border-radius: 10px;
}
::-webkit-scrollbar {
  width: 8px;
}
#token-search-input:focus:not(:disabled) {
  box-shadow: 0px 0px 0px 1px #EABF6F !important;
}

.list-token-manage-button{
  color:#EABF6F !important;
}
.connect-wallet{
  background: transparent linear-gradient(105deg,#FF416C 0%,#FF4B2B 100%) 0% 0% no-repeat padding-box !important;
  box-shadow:none !important;
  span{
    @media (max-width: 480px) {
      display: none;
    }
  }
}
#swap-button , #import-pool-link , #confirm-swap-or-send{
  background: transparent linear-gradient(105deg,#FF416C 0%,#FF4B2B 100%) 0% 0% no-repeat padding-box !important;
  box-shadow:none !important;
}
.transition-color{
  color:#7645D9 !important;
  background: transparent !important;
  box-shadow:none !important;
}
.icon a{
  color: red !important;
}
.wallet-icon{
  margin-right: 10px
}
.top-menu {
  color: #ffff;
  position: fixed;
  top: 0;
  width: 80%;
  z-index: 91;
  margin: 0 auto;
  text-align: center;
  left:0;
  right: 0;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    li {
      font-size: 20px;
      position: relative;
      a {
        height: 100px;
        @media (max-width: 600px) {
          height: 80px;
        }
        display: flex;
        align-items: center;
        padding: 0 20px;
        &.active , &:hover{
          background: #363639;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 6px;
            background: linear-gradient(180deg, #FF416C 0%, #FF4B2B 100%);
            top: 0;
            left: 0;
          }
        }
        
        img{
          width: 20px;
          height: 20px;
          margin-right: 6px;
        }
      }
      &:hover{
       .sub-menu {
          display: block;
        }
      }
      .sub-menu {
        display: none;
        position: absolute;
        background: #2e2e31;
        top: 100px;
        left: 0;
        li{
          a{
            height: 60px;
          }
        }
      }
    }
  }
}
.gallery--info h2{
  font-size:54px !important;
}
.inner-information h2{
  font-size:36px !important;
  font-weight:600;
}
.lable-size{
  font-size:18px;
  color: #fff !important;
}
.heading-size{
  font-size:29px;
}
.footer-left-side{
  width:50%;
}
.footer-right-side{
  width:50%;
}
.footer--col-botom{
  width:100%;
}
.footer--col{
  width:100%;
}
.ETHEREUM-text h2{
  font-size:55px !important; 
}
.footer .footer-column.contact-head h2{
  margin-bottom: 60px !important;
}
.supply--button{
  color :#fff !important;
}
.toggle-icon{
  display: none;
}
// media quries  for small screens
@media (max-width: 1600px) {

    .footer .footer-logo {
      margin-bottom: 10px !important;
  }
  .footer .footer-text .content {
    font-size: 18px !important;
  }
 .footer ul li a {
    font-size: 18px !important;
  }
 .footer ul li {
    margin-bottom: 10px !important;
  }
  .footer .footer-column.contact-head h2{
    margin-bottom: 78px !important;
  }
  .popups-swaping .bg-image {
    width: 96%; 
  }
}
@media (max-width: 1400px) {
  .top-menu{
    width: 65%;
  }
.top-menu ul li {
  font-size: 18px;
}
.top-menu ul li a {
  padding: 0 15px;
}
.custom-video{
  height:700px;
}
.custom-video h2{
  font-size:35px;
  top:280px;
  left:55%;
}
.bottom-heading {
  top: 321px;
  left: 55%;
  position: absolute;
  font-size: 78px;
}
.text-section h2 {
  font-size: 40px !important;
}
}
@media (max-width: 1200px) {
  .top-menu{
    ul{
      display: none;
      li{
        .sub-menu {
          top: 80px;
          width: 80%;
        }
      }
    }
    top: 100px;
    width: 100%;
    background: #2e2e31;
    &.active{
      ul{
        display: block;
        max-height: 500px;
        overflow: auto;
        margin: 0 30px;
      }
    }
  }
  .top-menu ul {
    flex-flow: column;
    align-items: start;
  }
  .toggle-icon{
    display: block;
    position: absolute;
    top: -80px;
    right: 265px;
    @media screen and (max-width: 600px) {
      right: 170px;
      top: -80px;
    }
  }
  .custom-video{
    height:550px;
  }
  .text-section h2{
    font-size:32px !important;
  }
}
@media screen and (max-width: 1025px) {
  .footer .footer-logo {
    margin-bottom: 10px !important;
    width: 70% !important;
}
  .footer .footer-text {
    width: 55% !important;
    padding-right:0 !important;
  }
  .footer-bottom .content{
    font-size: 15px !important;
  }
  .social-links ul li {
    margin-right:2px !important;
  }
  .social-links ul li img{
    width:65%;
  }
  // .text-section h2{
  //   font-size:40px !important;
  // }
  .giveaway-bg h2{
    font-size:44px !important; 
  }
  .ETHEREUM-text h2{
    font-size:30px !important; 
  }
  .inner-information{
    padding:0;
  }
  .description-image img {
    width: 170px;
  }
  .inner-information .para{
    font-size:18px;
  }
  .gallery--info h2{
    font-size:46px !important;
  }
  .gallery--info .paragraph{
    font-size:20px;
  }
  .footer .footer-column.contact-head h2{
    margin-bottom: 46px !important;
  }
  .lable-size{
    font-size:18px;
  }
  .balnceText{
    font-size:20px;
  }
  .heading-size{
    font-size:25px;
  }
  .inner-information h2{
    font-size:30px !important;
  }
  .custom-video{
    height:500px;
  }
  .custom-video h2 {
    font-size: 24px;
    top: 226px;
    left: 55%;
}
  .bottom-heading {
    top: 250px;
    left: 55%;
    position: absolute;
    font-size: 60px;
}
}
@media (max-width: 800px) {
  .photos-gallery{
    width:100%;
  }
  .custom-video + div{
    display:none !important;
  }
  .custom-video + div + div{
    display: none !important;
}
  .gallery-section{
    flex-direction:column;
    height:auto !important;
    padding:30px !important;
  }
  .RitzSwap-theme .gallery--info{
    width:100%;
    margin: 20px 0;
  }
  .description-image{
    flex-direction:column;
  }
  .giveaway-bg h2 {
    font-size: 35px !important;
  }
  .text-section h2 {
    font-size: 26px !important;
  }
  .ETHEREUM-text h2 {
    font-size: 20px !important;
  }
  .footer--top{
    flex-direction:column;
  }
  .footer .footer-text {
    width: 100% !important;
    padding:0 !important;
  }
  .footer .footer-column {
    width: 100% !important;
    padding:0;
  }
  .footer .footer-logo {
    margin-bottom: 20px !important;
    width: 35% !important;
  }
  .footer .footer-column.contact-head h2 {
    margin-bottom: 30px !important;
  }
  .footer h2 {
    margin-bottom: 30px !important;
  }
  .footer-left-side{
    width:100%;
    margin: 20px 0;
  }
  .footer-right-side{
    width:100%;
  }
  .footer-bottom{
    flex-direction:column;
  }
  .footer--col{
    text-align:start;
  }
  .footer--col-botom{
    text-align:center;
  }
  .footer ul {
    list-style: none;
  }
  .lable-size{
    font-size:17px;
  }
  .balnceText{
    font-size:18px;
  }
  .heading-size{
    font-size:22px;
  }
  .gallery--info h2{
    font-size:30px !important;
  }
  .custom-video{
    height:370px;
  }
  .custom-video h2 {
    font-size: 18px;
    top: 186px;
    left: 54%;
}
  .bottom-heading {
    top: 203px;
    left: 54%;
    position: absolute;
    font-size: 50px;
}
}
@media (max-width: 600px){
  .custom-video {
    background-position: -6%;
}
  .custom-video{
    height:350px;
  }
  .custom-video h2 {
    letter-spacing: 1.72px;
    font-size: 20px;
    top: 45%;
    left: auto;
    right: 10px;
    text-align: right;
}
  .bottom-heading {
    top: 52%;
    left: auto;
    position: absolute;
    font-size: 38px;
    text-align: right;
    right: 20px;
  }
  .footer .footer-logo {
    width: 60% !important;
  }
  .footer .footer-text .content {
    font-size: 15px !important;
  }
  .giveaway-bg h2 {
    font-size: 19px !important;
  }
  .footer ul li a {
    font-size: 15px !important;
  }
  .social-links ul li img {
    width: 100%;
  }
  .footer-bottom .content {
    font-size: 13px !important;
  }
  .bridge-bg > div{
    padding : 0  10px !important;
  }
  .text-section h2 {
    font-size: 18px !important;
  }
  .ETHEREUM-text h2 {
    font-size: 15px !important;
  }
  .custom-btn-gradient{
    margin-top:10px !important;
    font-size:15px;
  }
  .footer ul li {
    margin-bottom: 3px !important;
  }
  .footer h2 {
    margin-bottom: 17px !important;
  }
  .footer .footer-column.contact-head h2 {
    margin-bottom: 17px !important;
  }
  .description-image img {
    width: 130px;
  }
  .popups-swaping .bg-image {
    display: none;
  }
  .lable-size{
    font-size:16px;
  }
  .selecttoken-color {
    color: #fff;
    background: #3E424E;
    height: 36px;
    border-radius: 10px;
    opacity: 1;
    padding: 5px 10px;
  }
  .button-toggle button {
    font-size: 15px !important;
  }
  .parent--bridge{
    flex-direction:column !important;
  }
  .Bridge--content{
    width:100%;
    margin: 15px 0;
  }
  .bridge--dropdownselect > div{
    justify-content: center;
  }
  .gallery--info h2{
    font-size:26px important;
  }
  .inner-information h2{
    font-size:25px !important;
  }
  .copyrights > div {
    padding: 0 20px !important;
  }
  .bottom---footer {
    padding: 1px 0 21px!important;
  }
  nav{
    padding-left: 15px !important;
    padding-right: 15px !important;
    div > button {
      height: 55px !important;
      margin-left: 7px;
      font-size: 13px !important;
      padding: 2px !important;
      width: 151px;
      .wallet-icon {
        margin-right: 3px;
        width: 17%;
      }
    }
  }
}
@media (max-width: 480px){
  .footer-bottom .content {
    font-size: 11px !important;
  }
  .footer .footer-text .content {
    font-size: 13px !important;
  }
  .footer ul li a {
    font-size: 13px !important;
  }
  .footer h2 {
    margin-bottom: 8px !important;
  }
  .footer .footer-column.contact-head h2 {
    margin-bottom: 8px !important;
  }
  .ETHEREUM-text h2 {
    font-size: 12px !important;
  } 
  .inner-information .para {
    font-size: 17px;
  }
  .description-image img {
    width: 100px;
  }
  .lable-size{
    font-size:14px;
  }
  .balnceText{
    font-size:15px;
  }
  .heading-size{
    font-size:20px;
  }
  .gallery--info h2{
    font-size:20px important;
  }
  .gallery--info .paragraph {
    font-size: 16px;
  }
  nav div > button{
    width: auto;
    height: auto !important;
    padding: 10px !important;
    border-radius: 8px;
   .wallet-icon{
     width: 100%;
   }
  }
  .toggle-icon{
    right: 65px;
  }
  .custom-video{
    height:270px;
  }
  .custom-video h2 {
    font-size: 13px;;
}
  .bottom-heading {
    font-size: 24px;
  }
  .text-sizes h2{
    font-size:13px !important;
  }
  .para-sizes{
    font-size:11px !important;
  }
}
`

export default GlobalStyle
