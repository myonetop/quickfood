import { injectGlobal } from 'styled-components';

// css url extention
import '!file-loader?name=[name].[ext]!./assets/images/icon_home_1.svg';
import '!file-loader?name=[name].[ext]!./assets/images/icon_home_2.svg';
import '!file-loader?name=[name].[ext]!./assets/images/icon_home_3.svg';
import '!file-loader?name=[name].[ext]!./assets/images/icon_home_4.svg';
import '!file-loader?name=[name].[ext]!./assets/images/time_panel.svg';
import '!file-loader?name=[name].[ext]!./assets/images/ribbon_popular.png';
import '!file-loader?name=[name].[ext]!./assets/images/arrow_down.svg';
import '!file-loader?name=[name].[ext]!./assets/images/search.svg';
import '!file-loader?name=[name].[ext]!./assets/images/dots_vert.png';
import '!file-loader?name=[name].[ext]!./assets/images/features-intro-01.jpg';
import '!file-loader?name=[name].[ext]!./assets/images/bg_office.jpg';
import '!file-loader?name=[name].[ext]!./assets/images/paypal.svg';
import '!file-loader?name=[name].[ext]!./assets/images/arrow_down.svg';
import '!file-loader?name=[name].[ext]!./assets/images/delivery_2.jpg';
import '!file-loader?name=[name].[ext]!./assets/images/ribbon.png';
import '!file-loader?name=[name].[ext]!./assets/images/sub_header_home.jpg';

// font url extention
import '!file-loader?name=[name].[ext]!./assets/css/elegant_font/fonts/ElegantIcons.eot';
import '!file-loader?name=[name].[ext]!./assets/css/elegant_font/fonts/ElegantIcons.woff';
import '!file-loader?name=[name].[ext]!./assets/css/elegant_font/fonts/ElegantIcons.ttf';
import '!file-loader?name=[name].[ext]!./assets/css/elegant_font/fonts/ElegantIcons.svg';

import '!file-loader?name=[name].[ext]!./assets/fonts/glyphicons-halflings-regular.eot';
import '!file-loader?name=[name].[ext]!./assets/fonts/glyphicons-halflings-regular.woff2';
import '!file-loader?name=[name].[ext]!./assets/fonts/glyphicons-halflings-regular.woff';
import '!file-loader?name=[name].[ext]!./assets/fonts/glyphicons-halflings-regular.ttf';
import '!file-loader?name=[name].[ext]!./assets/fonts/glyphicons-halflings-regular.svg';

import '!file-loader?name=[name].[ext]!./assets/css/fontello/font/fontello.eot';
import '!file-loader?name=[name].[ext]!./assets/css/fontello/font/fontello.woff';
import '!file-loader?name=[name].[ext]!./assets/css/fontello/font/fontello.ttf';
import '!file-loader?name=[name].[ext]!./assets/css/fontello/font/fontello.svg';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }


  .box_home#one{
  background:#fff url(icon_home_1.svg) no-repeat center 40px;
  }
  .box_home#two{
    background:#fff url(icon_home_2.svg) no-repeat center 40px;
  }
  .box_home#three{
    background:#fff url(icon_home_3.svg) no-repeat center 40px;
  }
  .box_home#four{
    background:#fff url(icon_home_4.svg) no-repeat center 40px;
  }

  #delivery_time strong span{
    background:url(time_panel.svg) no-repeat 0 0;
  }

  .ribbon_1{
    background:url(ribbon_popular.png) no-repeat 0 0;
  }

  footer .styled-select {
     background: #f8f8f8 url(arrow_down.svg) no-repeat  right center ;
  } 

  #custom-search-input input.btn_search{
    background: url(search.svg) no-repeat center right;
  }

  #count ul li{
    background:url(dots_vert.png) center left no-repeat;
  }

  .features-bg {
      background: url(features-intro-01.jpg) no-repeat center center;
  }

  .parallax-window-2 {
    background: url(bg_office.jpg) no-repeat center center;
  }

  .payment_select#paypal{
    background:#f0f0f0 url(paypal.svg) center right no-repeat;
  }

  #tools .styled-select {
     background: url(arrow_down.svg) no-repeat  right center ;
  } 

  .features-bg.img_2 {
      background: url(delivery_2.jpg) no-repeat center center;
  }

  .ribbon_table {
    background: url(ribbon.png) no-repeat 0 0;
  }

  @font-face {
    font-family: 'ElegantIcons';
    src:url('ElegantIcons.eot');
    src:url('ElegantIcons.eot?#iefix') format('embedded-opentype'),
      url('ElegantIcons.woff') format('woff'),
      url('ElegantIcons.ttf') format('truetype'),
      url('ElegantIcons.svg#ElegantIcons') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @media only screen and (max-width : 768px) {
    #hero_video{ background: #333 url(sub_header_home.jpg); background-size:cover; background-position: center center;}
  }

  @font-face{
    font-family:'Glyphicons Halflings';
    src:url(glyphicons-halflings-regular.eot);
    src:url(glyphicons-halflings-regular.eot?#iefix) format('embedded-opentype'),
    url(glyphicons-halflings-regular.woff2) format('woff2'),
    url(glyphicons-halflings-regular.woff) format('woff'),
    url(glyphicons-halflings-regular.ttf) format('truetype'),
    url(glyphicons-halflings-regular.svg#glyphicons_halflingsregular) format('svg')
  }

  @font-face{font-family:'fontello';
    src:url(fontello.eot?32974303);
    src:url(fontello.eot?32974303#iefix) format("embedded-opentype"),
    url(fontello.woff?32974303) format("woff"),
    url(fontello.ttf?32974303) format("truetype"),
    url(fontello.svg?32974303#fontello) format("svg");
    font-weight:400;font-style:normal
  }
`;
