const globalStyleObject = {
  html: {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
    fontFamily: 'Proxima Nova,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif',
    lineHeight: 1.5,
    color: '#343434',
    textRendering: 'optimizeLegibility',
    fontSize: '16px',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
};

//@import url("https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css");
//@import url("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css");
//@import url("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css");

const globalStyleString = `
@import url("/static/css/slider_carousel.css");

a:hover{
    text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
.clearfix{
	clear:both;
}
body {
    line-height: 1;
    font-family: 'Proxima Nova';
}
ol, ul {
	list-style: none;
}
a{
	text-decoration:none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  @font-face {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: normal;
    src: url('/static/fonts/proximanova-regular-webfont.woff2') format('woff2'),
      url('/static/fonts/proximanova-regular-webfont.woff') format('woff'),
      url('/static/fonts/proximanova-regular-webfont.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Proxima Nova';
    font-style: italic;
    font-weight: normal;
    src: url('/static/fonts/proximanova-regularit-webfont.woff2') format('woff2'),
      url('/static/fonts/proximanova-regularit-webfont.woff') format('woff'),
      url('/static/fonts/proximanova-regularit-webfont.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: bold;
    src: url('/static/fonts/proximanova-bold-webfont.woff2') format('woff2'),
      url('/static/fonts/proximanova-bold-webfont.woff') format('woff'),
      url('/static/fonts/proximanova-bold-webfont.ttf') format('truetype');
  }
  @keyframes loading-spinner {
    0% { transform: rotateZ(0deg); transform: rotateZ(0deg); }
    100% { transform: rotateZ(360deg); transform: rotateZ(360deg); }
  }
  .table-bordered > thead tr th, .table-bordered > tbody tr td{
    border: 1px solid #aeaeae;
  }
  .table-striped > tbody > tr:nth-of-type(odd){
    background-color: #e8e8e8;
  }
.form-input, .react-autosuggest__input{
  display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
.wrapper{
	max-width:77em;
	margin-left:auto;
	margin-right:auto;
}
.top-bar, .product-heading {
    -moz-box-align: center;
    -moz-box-pack: justify;
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
	-moz-box-direction:normal;
	-moz-box-orient:horizontal;
	flex-direction:row;
}
.breadcrumb{
    display: flex;
    align-items: center;
    margin-top: 10px;
    background: transparent;
    padding-left: 0;
    margin-bottom: 0;
}
.breadcrumb li{
	float:left;
}
.breadcrumb li a{
  color:#343434;
  font-weight: 400;
}
.breadcrumb li span{
	margin-left:0.25em;
	margin-right:0.5em;
}
.product-brand{
	color:#9c9c9c;
	font-weight:400;
	text-align:right;
	padding-top:5px;
}

.product-sku {
	height: auto;
	position: static;
	width: auto;
	font-weight: 700;
	margin-left: .375em;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	color: #9c9c9c;
}
.product-gallery{
   	width: 60%;
    float: left;
    margin-right: 1%;
    padding-right: 1%;
}
.image-gallery-content {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    flex-wrap: nowrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    top: 0;
}
.image-gallery-slide-wrapper {
    position: relative;
}
.image-gallery-thumbnails {
    overflow: hidden;
    padding: .375em;
}
.image-gallery-thumbnails .image-gallery-thumbnails-container {
    cursor: pointer;
    text-align: center;
    transition: -webkit-transform .45s ease-out;
    transition: transform .45s ease-out;
    transition: transform .45s ease-out,-webkit-transform .45s ease-out;
    white-space: nowrap;
}
.image-gallery-thumbnail {
    display: inline-block;
    padding-right: .375em;
}
.image-gallery-thumbnail img {
	width: 45px;
    border: 3px solid transparent;
}
.image-gallery-thumbnail.active img {
    border: 3px solid #E8E8E8;
}
.product-details {
    width: 39%;
	float:left;
}
.product-details-inner{
	display: flex;
	-webkit-box-orient: vertical;
	flex-direction: column;
	flex-wrap: nowrap;
	padding: .75em;
	box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
}
.product-box-top{
	padding-top:7px;
	display: flex;
	-webkit-box-orient: horizontal;
	flex-direction: row;
	flex-wrap: nowrap;
	-webkit-box-pack: justify;
	justify-content: space-between;
	-webkit-box-align: start;
	align-items: flex-start;
}
.price-section h2 {
	padding-bottom:10px;
    font-size: 1.5625em;
}
.price-retail {
    color: #9c9c9c;
	text-decoration: line-through;
}
.price-save {
    color: #b00;
    margin-left: .75em;
}
.product-rating{
	width:auto;
	text-align:right;
}
.product-rating span{
	color: #9c9c9c;
    display: block;
    font-size: 70%;
    margin-top: 7px;
}
.item-size {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    flex-wrap: nowrap;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    margin: 1em 0;
}
.personalization-wrap {
    display: flex;
    flex-wrap: nowrap;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: stretch;
    align-items: stretch;
}
.personalization-box {
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    padding: .6em .75em;
    font-size: .8em;
	border:1px solid #E8E8E8;
}
.personalization-box:nth-of-type(2) {
    margin-left: .75em;
}
.personalization-box legend {
    margin-left: .75em;
    margin-bottom: 10px;
    padding: 0 .75em;
    color: #11416b;
    margin-top: -11px;
    background: #fff;
    font-weight: 700;
}
.btn-success{
	background: #2d936c;
}
.btn-orange{
	background:#F07830;
}
.personalization-box-inner{
	display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
}
.qty-add-row {
    display: -webkit-box;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    align-items: flex-start;
    margin: .75em 0 auto;
}
.product-qty-form {
    display: -webkit-box;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    -webkit-box-pack: stretch;
    justify-content: stretch;
    -webkit-box-align: center;
    align-items: center;
}
.qty-label {
    margin-right: .75em;
	font-weight:700;
}
.qty-field{
	padding: 4px;
    width: 96px;
}
.qty-field .input-field{
	box-sizing: border-box;
    display: block;
    width: 100%;
    height: 32px;
    margin: 0px;
    padding-left: 8px;
    padding-right: 8px;
    color: inherit;
    background-color: rgba(255, 255, 255, 0.25);
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.25);
    border-radius: 2px;
}
.qty-action {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    flex-wrap: nowrap;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: end;
    align-items: flex-end;
}
.related-resource{
	background-color: #fff;
    border: 1px solid #E8E8E8;
	margin:2.5em 0 1.5em 0;
	display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    flex-wrap: nowrap;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    padding: 1.5em .75em .75em .75em;
    font-size: .8em;
	position:relative;
}
.related-resource h2{
    background: #fff;
	display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    flex-wrap: nowrap;
    -webkit-box-pack: left;
    justify-content: left;
    -webkit-box-align: left;
    align-items: center;
    padding: 0 .375em;
    margin-bottom: 0;
	position:absolute;
	top: -10px;
}
.related-resource h2 span{
	color: #11416b;
	font-weight: 700;
    font-size: 1.25em;
    margin-left: .375em;
}
.resource-list{
	display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
}
.resource-list a{
    font-size: 12.8px;
    font-weight: 400;
    line-height: 1rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    align-self: stretch;
    padding: 4px 8px;
    color: rgb(31, 118, 195);
    cursor: pointer;
}
.resource-list a img{
	margin-left:5px;
}
.left-section{
	width: 60%;
	margin-right:1%;
	padding-right:10px;
    float: left;
}
.left-section .product-info{
	font-size: .9em;
    margin-bottom: 1.5em;
}
.left-section .product-info h2{
	font-size: 1.5625em;
	line-height: 1.2;
    margin: 0 0 .75em;
	font-weight:700;
}
.left-section .product-info h3{
	font-size: 20px;
    margin: 1em 0 .5em;
	font-weight:700;
	color:#343434;
}
.left-section .product-info .tab-list{
	list-style-type: disc;
	margin: 0 0 .75em .75em;
    padding-left: .75em;
}
.left-section .product-info .tab-list li{
	padding-bottom:7px;
}
.left-section .product-info p{
	margin: 0 0 .75em;
	line-height:22px;
}
.table-scroll{
    max-width: 100%;
    overflow-x: auto;
    margin-bottom: 1.5em;
    border-color: rgba(0, 0, 0, 0.25);
}
.table-scroll table{
	font-size: 14px;
    line-height: 1.25;
    border-collapse: separate;
    border-spacing: 0px;
    width: 100%;
}
.table-scroll table th, .table-scroll table td{
	text-align: left;
    vertical-align: bottom;
    padding: 8px 8px 8px 0px;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-color: inherit;
	font-weight:700;
}
.table-scroll table td{
    border-bottom-width: 1px;
	font-weight:400;
	padding:.375em .75em;
}
.table-scroll table tbody tr:nth-child(odd) {
    background: #fff;
}

.table-scroll table tbody tr:nth-child(even) {
    background: #e8e8e8;
}
.product-review{
    margin-bottom: 1.5em;
	padding-top:7px;
	float:left;
}
.product-review .product-review-title{
	margin: 0 0 1em;
	font-size: 1.5625em;
	font-weight:700;
}
.product-review li{
	border-bottom: 1px solid #E8E8E8;
    padding-top: .75em;
	margin-bottom: .2em;
}
.product-review li .heading{
	display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
}
.product-review li .heading .name{
    color: #1f76c3;
    margin-right: .75em;
	font-weight:700;
}
.product-review li .heading .verify{
    color: #9c9c9c;
    margin-right: .75em;
}
.product-review li p{
	margin: 0 0 .75em;
	padding-top:4px;
	line-height:20px;
}
.item-view-all{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid #E8E8E8;
    border-radius: 3px;
    padding: 1em;
    margin-bottom: 1.5em;
    background-color: #11416b;
    color: #fff;
}
.collection-access h5{
	font-size: 1em;
    font-weight: 700;
	padding-bottom:7px;
}
.collection-access span{
	font-size: .8em;
}

.similiar-item h6{
	font-size: 20px;
	font-weight:700;
	margin: 0 0 .75em;
}
.item-view-all:focus, .item-view-all:hover {
    opacity: .8;
}
.product-grid{
	display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    min-height: 100%;
    justify-content: space-around;
    -webkit-box-align: stretch;
    align-items: stretch;
}
.product-grid .card{
	box-sizing: border-box;
    padding: 0px;
    margin-bottom: 16px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(232, 232, 232);
    overflow: hidden;
    border-radius: 2px;
    position: relative;
}
.product-grid .link-block{
	height: 100%;
    display: -webkit-box!important;
    display: flex!important;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: stretch;
    align-items: stretch;
}
.card-topper{
	display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    flex-wrap: nowrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: .25em;
    padding-top:10px;
    font-size:0.8em;
}
.card-topper-left {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    flex-wrap: nowrap;
}
.card-topper-left p {
    font-size: .75em;
    color: #9c9c9c;
    margin-bottom: 0;
}
.card-topper-right{
	text-align: right;
}
.card-topper-right span{
	color: #9c9c9c;
    display: block;
    font-size: 70%;
	margin-top:5px
}
.card-figure{
    flex-direction: column;
    flex-wrap: nowrap;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    flex-grow: 1;
    padding: .75em;
    margin: auto;
    position: relative;
    min-height: 10em;
    width: 100%;
}
.card-figure img{
	box-sizing: border-box;
    display: block;
    width: calc(100% + 16px);
    max-width: none;
    height: auto;
    margin: -8px -8px 8px;
}
.card-body{
	display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    -webkit-box-flex: 1;
    flex-grow: 1;
}
.card-body .card-title{
	margin: auto;
    align-self: flex-start;
    padding: 0 .5em;
    font-weight: 400;
    color: #1f76c3;
	font-size: .9em;
	text-align: center;
    line-height: 18px;
}

.card-body .card-title h4{
    font-size: .9em;
}
.card-price{
	padding: .5em;
	text-align:center;
}
.card-price span{
	color:#343434;
	font-size: .9em;
	font-weight:700;
}
.card-price .rrp-price{
	color: #9c9c9c;
	text-decoration: line-through;
}
.card-qv-button{
	position: absolute;
    width: 100%;
    margin-top: 1.5em;
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    opacity: 0;
	text-align:center;
}
.card-qv-button .quick-view{
	box-sizing: border-box;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    min-height: 32px;
    text-decoration: none;
    display: inline-block;
    margin: 0px;
    padding: 8px 16px;
    cursor: pointer;
    border: 0px;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 136, 238);
    border-radius: 2px;
}
.card:hover .card-qv-button{
	opacity: 1;
}
.image-gallery-fullscreen-button::before,
.image-gallery-play-button::before,
.image-gallery-left-nav::before,
.image-gallery-right-nav::before {
  display: inline-block;
  font-family: "Ionicons";
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

.image-gallery {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent; }
  .image-gallery.fullscreen-modal {
    background: #000;
    bottom: 0;
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 5; }
    .image-gallery.fullscreen-modal .image-gallery-content {
      top: 50%;
      transform: translateY(-50%); }

.image-gallery-content {
  position: relative;
  line-height: 0;
  top: 0; }
  .image-gallery-content.fullscreen {
    background: #000; }
    .image-gallery-content.fullscreen .image-gallery-slide {
      background: #000; }

.image-gallery-slide-wrapper {
  position: relative; }
  .image-gallery-slide-wrapper.left, .image-gallery-slide-wrapper.right {
    display: inline-block;
    width: calc(100% - 113px); }
@media (max-width: 768px) {
      .image-gallery-slide-wrapper.left, .image-gallery-slide-wrapper.right {
        width: calc(100% - 84px); }
    }

.image-gallery-fullscreen-button,
.image-gallery-play-button,
.image-gallery-left-nav,
.image-gallery-right-nav {
  appearance: none;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
  position: absolute;
  z-index: 4; }
  .image-gallery-fullscreen-button::before,
  .image-gallery-play-button::before,
  .image-gallery-left-nav::before,
  .image-gallery-right-nav::before {
    color: #fff;
    line-height: .7;
    text-shadow: 0 2px 2px #1a1a1a;
    transition: color .2s ease-out; }
  .image-gallery-fullscreen-button:hover::before,
  .image-gallery-play-button:hover::before,
  .image-gallery-left-nav:hover::before,
  .image-gallery-right-nav:hover::before {
    color: #337ab7; }
    @media (max-width: 768px) {
      .image-gallery-fullscreen-button:hover::before,
      .image-gallery-play-button:hover::before,
      .image-gallery-left-nav:hover::before,
      .image-gallery-right-nav:hover::before {
        color: #fff; } }

.image-gallery-fullscreen-button,
.image-gallery-play-button {
  bottom: 0; }
  .image-gallery-fullscreen-button::before,
  .image-gallery-play-button::before {
    font-size: 2.7em;
    padding: 15px 20px;
    text-shadow: 0 1px 1px #1a1a1a; }
    @media (max-width: 768px) {
      .image-gallery-fullscreen-button::before,
      .image-gallery-play-button::before {
        font-size: 2.4em; } }
    @media (max-width: 480px) {
      .image-gallery-fullscreen-button::before,
      .image-gallery-play-button::before {
        font-size: 2em; } }
  .image-gallery-fullscreen-button:hover::before,
  .image-gallery-play-button:hover::before {
    color: #fff;
    transform: scale(1.1); }
    @media (max-width: 768px) {
      .image-gallery-fullscreen-button:hover::before,
      .image-gallery-play-button:hover::before {
        transform: none; } }

.image-gallery-fullscreen-button {
  right: 0; }
  .image-gallery-fullscreen-button::before {
    content: ""; }
  .image-gallery-fullscreen-button.active::before {
    content: ""; }
  .image-gallery-fullscreen-button.active:hover::before {
    transform: scale(0.9); }

.image-gallery-play-button {
  left: 0; }
  .image-gallery-play-button::before {
    content: ""; }
  .image-gallery-play-button.active::before {
    content: ""; }

.image-gallery-left-nav,
.image-gallery-right-nav {
  color: #fff;
  font-size: 5em;
  padding: 50px 15px;
  top: 50%;
  transform: translateY(-50%); }
  .image-gallery-left-nav[disabled],
  .image-gallery-right-nav[disabled] {
    cursor: disabled;
    opacity: .6;
    pointer-events: none; }
  @media (max-width: 768px) {
    .image-gallery-left-nav,
    .image-gallery-right-nav {
      font-size: 3.4em;
      padding: 20px 15px; } }
  @media (max-width: 480px) {
    .image-gallery-left-nav,
    .image-gallery-right-nav {
      font-size: 2.4em;
      padding: 0 15px; } }

.image-gallery-left-nav {
  left: 0; }
  .image-gallery-left-nav::before {
    content: ""; }

.image-gallery-right-nav {
  right: 0; }
  .image-gallery-right-nav::before {
    content: ""; }

.image-gallery-slides {
  line-height: 0;
  overflow: hidden;
  position: relative;
  white-space: nowrap; }

.image-gallery-slide {
  background: #fff;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%; }
  .image-gallery-slide.center {
    position: relative; }
  .image-gallery-slide img {
    max-width: 100%;
}
  .image-gallery-slide .image-gallery-description {
    background: rgba(0, 0, 0, 0.4);
    bottom: 70px;
    color: #fff;
    left: 0;
    line-height: 1;
    padding: 10px 20px;
    position: absolute;
    white-space: normal; }
    @media (max-width: 768px) {
      .image-gallery-slide .image-gallery-description {
        bottom: 45px;
        font-size: .8em;
        padding: 8px 15px; } }

.image-gallery-bullets {
  bottom: 20px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  width: 80%;
  z-index: 4; }
  .image-gallery-bullets .image-gallery-bullets-container {
    margin: 0;
    padding: 0;
    text-align: center; }
  .image-gallery-bullets .image-gallery-bullet {
    appearance: none;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 50%;
    box-shadow: 0 1px 0 #1a1a1a;
    cursor: pointer;
    display: inline-block;
    margin: 0 5px;
    outline: none;
    padding: 5px; }
    @media (max-width: 768px) {
      .image-gallery-bullets .image-gallery-bullet {
        margin: 0 3px;
        padding: 3px; } }
    @media (max-width: 480px) {
      .image-gallery-bullets .image-gallery-bullet {
        padding: 2.7px; } }
    .image-gallery-bullets .image-gallery-bullet.active {
      background: #fff; }

.image-gallery-thumbnails-wrapper {
  position: relative; }
  .image-gallery-thumbnails-wrapper.left, .image-gallery-thumbnails-wrapper.right {
    display: inline-block;
    vertical-align: top;
    width: 108px; }
    @media (max-width: 768px) {
      .image-gallery-thumbnails-wrapper.left, .image-gallery-thumbnails-wrapper.right {
        width: 81px; } }
    .image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails, .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails {
      height: 100%;
      width: 100%;
      left: 0;
      padding: 0;
      position: absolute;
      top: 0; }
      .image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails .image-gallery-thumbnail, .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails .image-gallery-thumbnail {
        display: block;
        margin-right: 0;
        padding: 0; }
        .image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails .image-gallery-thumbnail + .image-gallery-thumbnail, .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails .image-gallery-thumbnail + .image-gallery-thumbnail {
          margin-left: 0; }
  .image-gallery-thumbnails-wrapper.left {
    margin-right: 5px; }
    @media (max-width: 768px) {
      .image-gallery-thumbnails-wrapper.left {
        margin-right: 3px; } }
  .image-gallery-thumbnails-wrapper.right {
    margin-left: 5px; }
    @media (max-width: 768px) {
      .image-gallery-thumbnails-wrapper.right {
        margin-left: 3px; } }

.image-gallery-thumbnails {
  overflow: hidden;
  padding: 5px 0; }
  @media (max-width: 768px) {
    .image-gallery-thumbnails {
      padding: 3px 0; } }
  .image-gallery-thumbnails .image-gallery-thumbnails-container {
    cursor: pointer;
    text-align: center;
    transition: transform .45s ease-out;
    white-space: nowrap; }

.image-gallery-thumbnail {
  display: inline-block;
  border: 4px solid transparent;
  transition: border .3s ease-out;
  width: 100px; }
  @media (max-width: 768px) {
    .image-gallery-thumbnail {
      border: 3px solid transparent;
      width: 75px; } }
  .image-gallery-thumbnail + .image-gallery-thumbnail {
    margin-left: 2px; }
  .image-gallery-thumbnail img {
    vertical-align: middle;
    width: 100%; }
  .image-gallery-thumbnail.active {
    border: 4px solid #337ab7; }
    @media (max-width: 768px) {
      .image-gallery-thumbnail.active {
        border: 3px solid #337ab7; } }

.image-gallery-thumbnail-label {
  color: #1a1a1a;
  font-size: 1em; }
  @media (max-width: 768px) {
    .image-gallery-thumbnail-label {
      font-size: .8em; } }

.image-gallery-index {
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  line-height: 1;
  padding: 10px 20px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 4; }
  @media (max-width: 768px) {
    .image-gallery-index {
      font-size: .8em;
      padding: 5px 10px; } }
.headertag{
	font-size:2.44141em;
	font-weight: 700;
}
.clauther{
	display: block;
    color: #9c9c9c;
    font-size: .8em;
    margin-bottom: 1.5em;
}
.clpragraph{
	margin:0 0 .75em;
	display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
	color: #343434;
    font-size: 1em;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}
.page-pic3-caption{
    display:flex;
}
.page-pic3-caption>div {
    width: 100%;
    padding: 5px;
    position: relative;
}
.page-pic3-caption>div img{
    max-width:100%;
}
.page-pic3-caption>div span{
    position: absolute;
    top: .75em;
    left: .75em;
    color: #fff;
    text-shadow: 0 2px 4px rgba(52,52,52,.9);
}
.custom-modal .modal-header{
  color: rgb(255, 255, 255);
  background-color: rgb(17, 65, 107);
  font-size: 16px;
}
.custom-modal .modal-header .modal-title{
  font-weight:700;
}
.custom-modal .modal-header .close{
  color:#fff;
  opacity:0.8;
}
.custom-modal .form-control{
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.25);
  border-radius: 2px;
}
.custom-modal .form-group{
margin-bottom:10px;
}

.custom-modal .form-group label{
  font-weight:700;
  font-size:14px;
}
.custom-modal .help-block{
  font-size:12px;
  margin:0;
  color:#f00;
}
.sbc-imgs {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    min-height: 100%;
}

.sbc-pic-two {
    flex-basis: 50%;
    max-width: 50%;
    padding: 1.5em;
    text-align: center;
    margin-bottom: 1.5em;
}

.sbc-pic-caption, .sbc-txt-link {
    display: block;
    line-height: 30px;
}

.b2b-bullets {
    display: flex;
    -webkit-box-direction: normal;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 1.5em;
}
.b2b-bullet {
    padding: .75em;
    width: 33.33333%;
}
.page-pic2 {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: .75em;
}
.page-pic2 img {
    flex-basis: 50%;
    max-width: 50%;
    padding: .375em;
}

.footer-product-slider{
    background: #fff;
    padding: 1px 30px;
    text-align: center;
    font-size: 12px;
    border-radius: 2px;
    margin-bottom: 40px;
}
.footer-product-slider .slick-slider .slick-list{
    margin:15px 0;
    border: 2px solid #b8c6e1;
    border-radius: 2px;
}
.footer-product-slider .slick-slide{
    padding:15px
}
.footer-product-slider .slick-next, .footer-product-slider .slick-prev{
    color:#555;
}
.image-gallery-slides{
	max-width:400px;
	max-height:400px;
}
.image-gallery-thumbnails-container{
	width:500px;
}
.image-gallery-thumbnail{
	width:50px;
}
.image-gallery-left-nav{
	display:none;
}
.image-gallery-right-nav{
	display:none;
}

.react-autosuggest__container{
    position: relative;
}
.react-autosuggest__suggestions-container .react-autosuggest__section-container{
    padding: 10px;
}
.react-autosuggest__suggestions-container {
    position: absolute;
    background: #fff;
    width: 100%;
    left: 0;
    z-index: 5;
    top: 100%;
    box-shadow: 0 0 2px #000;
}
.header_color{
	font-weight:normal !important;
	padding: 0 .5em;
	margin: auto;
    align-self: flex-start;
    padding: 0 .5em;
    font-weight: 400;

}
.price{
	color:#343434;
}
.dropdownMenu{
	color:#1f76c3;
}
.pageTitle{
	font-size:38px;
	color:#343434;
}
.brandHover:hover{
	text-decoration: none !important;
}
.reviewHover:hover{
	text-decoration: none  !important;
}
span:hover{
	text-decoration: none !important;
}
.checkoutClick{
	color:#fff;
}
.link-block .card-title > ul{
    display:none;
}
.clOpen{
    margin-left: 22px;
    font-size: 17px;
}
.checkoutShopping{
    background-color:#FF8C00;
}
.viewThisCollection{
    background-color:#11416b;
    font-weight:bold;
    color:#ffffff;
    line-height: 1;
}
.viewThisCollection:hover{
    color: #fff;
    opacity: 0.8;
}
.viewCollectionLink{
    color:#ffffff;
}
.header-logo-since {
    position: absolute;
    top: .5em;
    right: .25em;
    font-size: .6em;
    color: #11416b;
}
.teodesc_bullets{
    list-style-type:disc;
    padding-left: 0;
    list-style-position: inside;
}
.delivery-time--date{
    font-size: 0.8em;
    font-weight:normal;
    font-family:Proxima Nova,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
}
.delivery-time--deadline{
    font-size: 0.8em;
    font-weight:normal;
    font-family:Proxima Nova,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
}
.delivery-time--est{
    font-size: -0.2em;
    font-weight: 700;
    font-family:Proxima Nova,-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
}
.header_color{
    font-size: 0.9em !important;
    font-family: Proxima Nova",sans-serif
}
.react-autosuggest__section-container.react-autosuggest__section-container--first{
    max-height:225px;
    overflow:hidden;
}

.mobile-menu h3{
    font-size:18px;
    padding:5px 10px;
    marginBottom: 5px;
}

.mobile-menu .react-sanfona-item-body-wrapper a{
    width:100%;
}

.main-category .nav-tabs{
    display:flex;
    font-size: 0.8em;
}

.main-category .nav-tabs li{

    width:100%;
}
.main-category .nav-tabs li a{
    background: #fff;
    color:#333;
    margin-right:0;
    border:1px solid #11416b;
    border-radius:0;
    margin-left: -1px;
}
.main-category .nav-tabs li.active a{
    background: #11416b;
    color:#fff;
}
.main-category .nav-tabs li a span{
    display:block;
    padding:10px 15px;
    margin:-10px -15px;
}

.main-category .nav-tabs li a span svg{
    margin-top:-4px;
    transform: rotate(-90deg);
    transition: transform 0.3s;
}

.main-category .nav-tabs li.active a span svg{
    transform: rotate(0deg);
}

.main-category .tab-content{
    border:1px solid #11416b;
    margin-top: -1px;
    text-align:left;
}

.ais-ClearAll__root{
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    color: #fff;
    background-color: #114e81;
    border-color: #2e6da4;
}


.ais-ClearAll__root:focus, .ais-ClearAll__root:hover, .ais-ClearAll__root:active{
    color: #fff;
    background-color: #204d74;
    border-color: #122b40;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
}

.ais-ClearAll__root[disabled]{
    cursor: not-allowed;
    filter: alpha(opacity=65);
    -webkit-box-shadow: none;
    box-shadow: none;
    opacity: .65;
}

@media (max-width: 768px) and (orientation: landscape){
    #hbl-live-chat-wrapper, .yotpo.yotpo-main-widget, .product-review-title{
        display:none !important;
    }
}
@media (max-width: 768px) {
    .custom-modal img{
        max-width:100%;
    }
    .rCjEAf{
        display: none;
    }
    .mobilePadding{padding:0 10px;}
    .blogPage p img{width: 100%;}
    .product-gallery.w-60P,
    .left-section.w-60P,
    .product-details.w-40P,
    .left-section .table-striped,
    .product-review.w-40P{width: 100% !important; padding-left: 10px; padding-right: 10px;}
    .link-block .card-title{width: 100%}
    .image-gallery-content{display: block}
    .wrapper{padding: 0 10px;}
    .custom-modal .w-50P, .custom-modal .w-40P{width: 100%; padding: 0 5px; text-align: center;}
    .custom-modal .pr-48{padding: 0 !important; margin-bottom: 30px;}
    .custom-modal .d-flex{display: block;width: 100%;float: left;}
    .custom-modal .d-flex .w-20P{float: left;}
    .custom-modal .h-150px{height: auto;}
    .custom-modal .p-12, .custom-modal .modal-footer{display: inline-block;}
    .custom-modal .form-group .form-control{100%}
}
`;

module.exports = { globalStyleObject, globalStyleString };
