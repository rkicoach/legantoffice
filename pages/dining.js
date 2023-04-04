import React from 'react';
import $ from "jquery";
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';

let product = ""
const style = {
	paragraphAbout: {
		fontSize:"17px",
		fontWeight: 'normal',
	},
	olcontent:{
		fontSize:"18px",
		textDecoration:"none",
		fontWeight: "normal",
	},
	ulcontent:{
		fontSize:"18px",
		textDecoration:"none",
		fontWeight: "normal",
	}
}

class Dining extends React.Component {
constructor(props) {
    super(props);
	}
	
    render(){
		return <div>
					<div className="hosp-title-bar">
						<h1>Dining</h1>
						<p className="hosp-intro">Outfit any dining facility with our selection of coordinating hospitality accessories.  Each item is made to order, allowing you to create the tailored collection of accessories you need.  Select from the options below to receive a custom quotation.</p>
					</div>
					<section className="muic-tabs">
					<ul className="muic-tabs__group" role="tablist">
					{/**<li role="tab" tabindex="0" aria-controls="Placemats" aria-selected="false" className="muic-tabs__item"Placemats<svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="14" width="14" viewBox="0 0 40 40"><g><path d="m26.4 20q0 0.6-0.5 1l-10 10q-0.4 0.4-1 0.4t-1-0.4-0.4-1v-20q0-0.6 0.4-1t1-0.4 1 0.4l10 10q0.5 0.4 0.5 1z"></path></g></svg></li>
					<li role="tab" tabindex="0" aria-controls="Menu Covers" aria-selected="false" className="muic-tabs__item">Menu Covers<svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="14" width="14" viewBox="0 0 40 40" ><g><path d="m26.4 20q0 0.6-0.5 1l-10 10q-0.4 0.4-1 0.4t-1-0.4-0.4-1v-20q0-0.6 0.4-1t1-0.4 1 0.4l10 10q0.5 0.4 0.5 1z"></path></g></svg></li>
					<li role="tab" tabindex="0" aria-controls="Wine Lists" aria-selected="false" className="muic-tabs__item">Wine Lists<svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="14" width="14" viewBox="0 0 40 40" ><g><path d="m26.4 20q0 0.6-0.5 1l-10 10q-0.4 0.4-1 0.4t-1-0.4-0.4-1v-20q0-0.6 0.4-1t1-0.4 1 0.4l10 10q0.5 0.4 0.5 1z"></path></g></svg></li>
					<li role="tab" tabindex="0" aria-controls="Check Presenters" aria-selected="true" className="muic-tabs__item muic-tabs__item--active">Check Presenters<svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="14" width="14" viewBox="0 0 40 40" ><g><path d="m31.4 15.7q0 0.6-0.5 1l-10 10q-0.4 0.4-1 0.4t-1-0.4l-10-10q-0.4-0.4-0.4-1t0.4-1 1-0.4h20q0.6 0 1 0.4t0.5 1z"></path></g></svg></li>**/}
					</ul>
					<div className="muic-tabs__panel" role="tabpanel" aria-labelledby="Placemats" aria-hidden="true">
					<div className="hosp-content">
					<div className="hosp-product-main">
					<div className="hosp-product-gallery">
					<section className="image-gallery" aria-live="polite">
					<div className="image-gallery-content">
					<div className="image-gallery-slide-wrapper bottom">
					<button type="button" className="image-gallery-fullscreen-button" aria-label="Open Fullscreen"></button>
					<button type="button" className="image-gallery-play-button" aria-label="Play or Pause Slideshow"></button>
					<span>
					<button type="button" className="image-gallery-left-nav" aria-label="Previous Slide"></button>
					<button type="button" className="image-gallery-right-nav" aria-label="Next Slide"></button>
					</span>
					<div className="image-gallery-swipe"><div className="image-gallery-slides">
					<div className="image-gallery-slide center">
					<div className="image-gallery-image">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/placemat-1.jpg" alt="1" /></div>
					</div>
					<div className="image-gallery-slide right">
					<div className="image-gallery-image">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/placemat-2.jpg" alt="2" /></div>
					</div>
					<div className="image-gallery-slide">
					<div className="image-gallery-image">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/placemat-3.jpg" alt="3" />
					</div>
					</div>
					<div className="image-gallery-slide left">
					<div className="image-gallery-image">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/placemat-4.jpg" alt="4" />
					</div>
					</div>
					</div>
					</div>
					</div>
					<div className="image-gallery-thumbnails-wrapper bottom">
					<div className="image-gallery-thumbnails">
					<div className="image-gallery-thumbnails-container" role="navigation" aria-label="Thumbnail Navigation">
					<a role="button" aria-pressed="true" aria-label="Go to Slide 1" className="image-gallery-thumbnail active">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/placemat-1.jpg" alt="Thumbnail 0" />
					<div className="image-gallery-thumbnail-label">
					</div>
					</a>
					<a role="button" aria-pressed="false" aria-label="Go to Slide 2" className="image-gallery-thumbnail">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/placemat-2.jpg" alt="Thumbnail 1" />
					<div className="image-gallery-thumbnail-label">
					</div>
					</a>
					<a role="button" aria-pressed="false" aria-label="Go to Slide 3" className="image-gallery-thumbnail">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/placemat-3.jpg" alt="Thumbnail 2" />
					<div className="image-gallery-thumbnail-label">
					</div>
					</a>
					<a role="button" aria-pressed="false" aria-label="Go to Slide 4" className="image-gallery-thumbnail">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/placemat-4.jpg" alt="Thumbnail 3" />
					<div className="image-gallery-thumbnail-label">
					</div>
					</a>
					</div>
					</div>
					</div>
					</div>
					</section>
					</div>
					<div className="hosp-product-intro">
					<h2>Placemats</h2>
					<p>Our placemat selection fills the needs of those outfitting a facility for frequent foodservice in a casual or elegant environment. They are designed to protect your table surfaces from the rigors of dining while adding a rich, luxurious look to the room. These placemats are made in the U.S.A., and have a lower profile and softer, more cushioned surface. The perfect option for any dining experience, our placemats come in a variety of colors and sizes that can assist in tying your room together.</p>
					<div className="hosp-product-data-container">
					<div className="hosp-product-data">
					<span className="hosp-product-data-label">Lead Time:</span>
					<span className="hosp-product-data-value">2-4 weeks</span>
					</div>
					<div className="hosp-product-data">
					<span className="hosp-product-data-label">Minimum:</span>
					<span className="hosp-product-data-value">50</span>
					</div>
					</div>
					</div>
					</div>
					<h3 className="hosp-form-leadin">Select options to receive a quote:</h3>
					<div>
					<div>
					<form>
					<div className="hosp-product-full">
					<p>Color/Material</p>
					<div className="hosp-product-opts">
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_aston_black.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="sim_leather_aston_black" name="hospitalityRequest.material" />
					<div className="Radio_dot">
					</div>Aston Black</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_aston_tan.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="sim_leather_aston_tan" name="hospitalityRequest.material" />
					<div className="Radio_dot">
					</div>Aston Tan</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_dark_brown.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="sim_leather_dark_brown" name="hospitalityRequest.material"/>
					<div className="Radio_dot">
					</div>Dark Brown</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_forest_green.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="sim_leather_forest_green" name="hospitalityRequest.material" />
					<div className="Radio_dot">
					</div>Forest Green</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_midnight_navy.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="sim_leather_midnight_navy" name="hospitalityRequest.material"/>
					<div className="Radio_dot">
					</div>Navy</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_rustic_red.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="sim_leather_rustic_red" name="hospitalityRequest.material"/>
					<div className="Radio_dot">
					</div>Rustic Red</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_slate_blue.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="sim_leather_slate_blue" name="hospitalityRequest.material" />
					<div className="Radio_dot">
					</div>Slate Blue</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/verona_black_lantau.jpg" alt="option thumbnail" /><label className="Label">
					<input type="radio" value="verona_black_lantau" name="hospitalityRequest.material"/>
					<div className="Radio_dot">
					</div>Black Lantau</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/verona_brown_lantau.jpg" alt="option thumbnail" />
					<label className="Label"><input type="radio" value="verona_brown_lantau" name="hospitalityRequest.material" /><div className="Radio_dot">
					</div>
					Brown Lantau</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/verona_steel_metallic.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="verona_steel_metallic" name="hospitalityRequest.material"/>
					<div className="Radio_dot">
					</div>Steel Metallic</label>
					</div>
					<div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/verona_vienna_pistachio.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="verona_vienna_pistachio" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Pistachio</label>
					</div>
					</div>
					</div>
					<div className="hosp-product-full"><p>Size/Shape</p>
					<div className="hosp-product-opts">
					<div className="hosp-opt">
					<label className="Label">
					<input type="radio" value="12_18_octagon" name="hospitalityRequest.sizeShape"/>
					<div className="Radio_dot">
					</div>12 x 18 Octagon</label>
					</div>
					<div className="hosp-opt">
					<label className="Label">
					<input type="radio" value="13_16_octagon" name="hospitalityRequest.sizeShape"/>
					<div className="Radio_dot">
					</div>13 x 16 Octagon</label>
					</div>
					<div className="hosp-opt">
					<label className="Label">
					<input type="radio" value="13_17_rectangle" name="hospitalityRequest.sizeShape"/>
					<div className="Radio_dot">
					</div>13 x 17 Rectangle</label>
					</div>
					<div className="hosp-opt">
					<label className="Label">
					<input type="radio" value="11_14_rectangle" name="hospitalityRequest.sizeShape"/>
					<div className="Radio_dot">
					</div>11 x 14 Rectangle</label>
					</div>
					</div>
					</div>
					<div className="hosp-product-full"><p>Decoration Options</p>
					<div className="hosp-product-opts">
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/blind-deboss.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="blind_debossed" name="hospitalityRequest.decoration"/>
					<div className="Radio_dot">
					</div>Blind Debossed</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/foil-stamp-deboss.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="foil_stamp" name="hospitalityRequest.decoration"/>
					<div className="Radio_dot">
					</div>Foil Stamp</label>
					</div>
					</div>
					</div>
					<div className="hosp-product-full"><p>Quantity</p>
					<div className="Input">
					<label for="hospitalityRequest.quantity" className="Label">Quantity</label>
					<input type="number" placeholder="50" value="" name="hospitalityRequest.quantity"/>
					</div>
					</div>
					<fieldset>
					<div className="first-last-ctrl  form-2up">
					<div className="Input">
					<label for="hospitalityRequest.firstName" className="Label">First Name</label>
					<input type="text" required="" value="" name="hospitalityRequest.firstName"/>
					</div>
					<div className="Input">
					<label for="hospitalityRequest.lastName" className="Label">Last Name</label>
					<input type="text" required="" value="" name="hospitalityRequest.lastName" />
					</div>
					</div>
					<div className="Input"><label for="hospitalityRequest.companyName" className="Label">Company Name</label>
					<input type="text" value="" name="hospitalityRequest.companyName"/>
					</div>
					<div className="form-2up">
					<div className="Input"><label for="hospitalityRequest.phone" className="Label">Phone Number</label>
					<input type="tel" required="" value="" name="hospitalityRequest.phone"/>
					</div>
					<div>
					<div className="Input">
					<label for="hospitalityRequest.email" className="Label">Email Address</label>
					<input type="text" required="" value="" name="hospitalityRequest.email"/>
					</div></div>
					</div>
					<div className="Textarea">
					<label for="hospitalityRequest.notes" className="Label">Notes</label>
					<textarea placeholder="These notes will be submitted with your request." name="hospitalityRequest.notes"></textarea>
					</div>
					</fieldset>
					<button type="submit" className="muic-btn muic-btn--success">Submit</button>
					</form>
					</div>
					</div>
					</div>
					</div>
					<div className="muic-tabs__panel" role="tabpanel" aria-labelledby="Menu Covers" aria-hidden="true">
					<div className="hosp-content">
					<div className="hosp-product-main">
					<div className="hosp-product-gallery">
					<section className="image-gallery" aria-live="polite">
					<div className="image-gallery-content"><div className="image-gallery-slide-wrapper bottom">
					<button type="button" className="image-gallery-fullscreen-button" aria-label="Open Fullscreen">
					</button>
					<button type="button" className="image-gallery-play-button" aria-label="Play or Pause Slideshow"></button>
					<span>
					<button type="button" className="image-gallery-left-nav" aria-label="Previous Slide"></button>
					<button type="button" className="image-gallery-right-nav" aria-label="Next Slide"></button></span>
					<div className="image-gallery-swipe">
					<div className="image-gallery-slides"><div className="image-gallery-slide center">
					<div className="image-gallery-image">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/menu-cover-6.jpg" alt="1" /></div>
					</div>
					<div className="image-gallery-slide right">
					<div className="image-gallery-image">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/menu-cover-11.jpg" alt="2" />
					</div>
					</div>
					<div className="image-gallery-slide">
					<div className="image-gallery-image"><img src="https://storage.googleapis.com/teo-utils/hospitality/products/menu-cover-7.jpg" alt="3" />
					</div>
					</div>
					<div className="image-gallery-slide">
					<div className="image-gallery-image">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/menu-cover-12.jpg" alt="4" />
					</div>
					</div>
					<div className="image-gallery-slide left">
					<div className="image-gallery-image">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/menu-cover-8.jpg" alt="5" />
					</div>
					</div>
					</div>
					</div>
					</div>
					<div className="image-gallery-thumbnails-wrapper bottom">
					<div className="image-gallery-thumbnails">
					<div className="image-gallery-thumbnails-container" role="navigation" aria-label="Thumbnail Navigation">
					<a role="button" aria-pressed="true" aria-label="Go to Slide 1" className="image-gallery-thumbnail active">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/menu-cover-6.jpg" alt="Thumbnail 0" />
					<div className="image-gallery-thumbnail-label">
					</div>
					</a>
					<a role="button" aria-pressed="false" aria-label="Go to Slide 2" className="image-gallery-thumbnail">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/menu-cover-11.jpg" alt="Thumbnail 1" />
					<div className="image-gallery-thumbnail-label">
					</div>
					</a>
					<a role="button" aria-pressed="false" aria-label="Go to Slide 3" className="image-gallery-thumbnail">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/menu-cover-7.jpg" alt="Thumbnail 2" />
					<div className="image-gallery-thumbnail-label">
					</div>
					</a>
					<a role="button" aria-pressed="false" aria-label="Go to Slide 4" className="image-gallery-thumbnail">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/menu-cover-12.jpg" alt="Thumbnail 3" />
					<div className="image-gallery-thumbnail-label">
					</div>
					</a>
					<a role="button" aria-pressed="false" aria-label="Go to Slide 5" className="image-gallery-thumbnail">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/menu-cover-8.jpg" alt="Thumbnail 4" />
					<div className="image-gallery-thumbnail-label"></div>
					</a>
					</div>
					</div>
					</div>
					</div>
					</section>
					</div>
					<div className="hosp-product-intro">
					<h2>Menu Covers</h2>
					<p>Welcome your guests with the style and design that reflects your unique venue.  Choose from the selection we've included below or create something that's entirely you, the design options are endless!  Each item is handcrafted in the USA and delivers quickly.</p>
					<div className="hosp-product-data-container">
					<div className="hosp-product-data">
					<span className="hosp-product-data-label">Lead Time:</span>
					<span className="hosp-product-data-value">2-4 weeks</span>
					</div>
					<div className="hosp-product-data">
					<span className="hosp-product-data-label">Minimum:</span>
					<span className="hosp-product-data-value">50</span></div>
					</div></div></div><h3 className="hosp-form-leadin">Select options to receive a quote:</h3><div><div><form><div className="hosp-product-full"><p>Color/Material</p>
					<div className="hosp-product-opts">
					<div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/linen_canvas.jpg" alt="option thumbnail" /><label className="Label">
					<input type="radio" value="linen_canvas" name="hospitalityRequest.material"/>
					<div className="Radio_dot">
					</div>Linen Canvas</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/linen_silver.jpg" alt="option thumbnail" />
					<label className="Label"><input type="radio" value="linen_silver" name="hospitalityRequest.material"/>
					<div className="Radio_dot">
					</div>Linen Silver</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/linen_wicker.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="linen_wicker" name="hospitalityRequest.material"/>
					<div className="Radio_dot">
					</div>Linen Wicker</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_aston_black.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="sim_leather_aston_black" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Aston Black</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_aston_tan.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="sim_leather_aston_tan" name="hospitalityRequest.material"/>
					<div className="Radio_dot">
					</div>Aston Tan</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_dark_brown.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="sim_leather_dark_brown" name="hospitalityRequest.material"/>
					<div className="Radio_dot">
					</div>Dark Brown</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_forest_green.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="sim_leather_forest_green" name="hospitalityRequest.material"/>
					<div className="Radio_dot">
					</div>
					Forest Green</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_midnight_navy.jpg" alt="option thumbnail" /><label className="Label">
					<input type="radio" value="sim_leather_midnight_navy" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Navy</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_rustic_red.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="sim_leather_rustic_red" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Rustic Red</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_slate_blue.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="sim_leather_slate_blue" name="hospitalityRequest.material"/><div className="Radio_dot"></div>Slate Blue</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/verona_black_lantau.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="verona_black_lantau" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Black Lantau</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/verona_brown_lantau.jpg" alt="option thumbnail"/>
					<label className="Label"><input type="radio" value="verona_brown_lantau" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Brown Lantau</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/verona_steel_metallic.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="verona_steel_metallic" name="hospitalityRequest.material"/>
					<div className="Radio_dot">
					</div>Steel Metallic</label>
					</div><div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/verona_vienna_pistachio.jpg" alt="option thumbnail" />
					<label className="Label">
					<input type="radio" value="verona_vienna_pistachio" name="hospitalityRequest.material"/><div className="Radio_dot"></div>Pistachio</label></div></div></div><div className="hosp-product-full"><p>Size/Shape</p><div className="hosp-product-opts"><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/letter.svg" alt="option thumbnail"/><label className="Label">
					
					<input type="radio" value="letter" name="hospitalityRequest.sizeShape"/><div className="Radio_dot"></div>8.5 x 11 insert</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/legal.svg" alt="option thumbnail"/><label className="Label">
					
					<input type="radio" value="legal" name="hospitalityRequest.sizeShape"/><div className="Radio_dot"></div>8.5 x 14 insert</label></div></div></div><div className="hosp-product-full"><p>Pages/Panels</p><div className="hosp-product-opts"><div className="hosp-opt"><label className="Label">
					<input type="radio" value="2" name="hospitalityRequest.pages"/><div className="Radio_dot"></div>2</label></div><div className="hosp-opt"><label className="Label">
					<input type="radio" value="4" name="hospitalityRequest.pages"/><div className="Radio_dot"></div>4</label></div></div></div><div className="hosp-product-full"><p>Decoration Options</p><div className="hosp-product-opts"><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/blind-deboss.jpg" alt="option thumbnail"/><label className="Label">
					<input type="radio" value="blind_debossed" name="hospitalityRequest.decoration"/><div className="Radio_dot"></div>Blind Debossed</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/foil-stamp-deboss.jpg" alt="option thumbnail" /><label className="Label">
					<input type="radio" value="foil_stamp" name="hospitalityRequest.decoration"/><div className="Radio_dot"></div>Foil Stamp</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/silkscreen-deboss.jpg" alt="option thumbnail" /><label className="Label">
					<input type="radio" value="silkscreen" name="hospitalityRequest.decoration"/><div className="Radio_dot"></div>Silkscreen</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/aluminum-die-cut-window.jpg" alt="option thumbnail" / ><label className="Label">
					<input type="radio" value="aluminum" name="hospitalityRequest.decoration"/><div className="Radio_dot"></div>Aluminum Die Cut Window</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/copper-die-cut-window.jpg" alt="option thumbnail" /><label className="Label">
					<input type="radio" value="copper" name="hospitalityRequest.decoration"/><div className="Radio_dot"></div>Copper Die Cut Window</label></div></div></div><div className="hosp-product-full"><p>Quantity</p><div className="Input"><label for="hospitalityRequest.quantity" className="Label">Quantity</label>
					<input type="number" placeholder="50" value="" name="hospitalityRequest.quantity"/></div></div><fieldset><div className="first-last-ctrl  form-2up"><div className="Input"><label for="hospitalityRequest.firstName" className="Label">First Name</label>
					<input type="text" required="" value="" name="hospitalityRequest.firstName"/></div><div className="Input"><label for="hospitalityRequest.lastName" className="Label">Last Name</label>
					<input type="text" required="" value="" name="hospitalityRequest.lastName"/></div></div><div className="Input"><label for="hospitalityRequest.companyName" className="Label">Company Name</label>
					<input type="text" value="" name="hospitalityRequest.companyName"/></div><div className="form-2up"><div className="Input"><label for="hospitalityRequest.phone" className="Label">Phone Number</label>
					<input type="tel" required="" value="" name="hospitalityRequest.phone"/></div><div><div className="Input"><label for="hospitalityRequest.email" className="Label">Email Address</label>
					<input type="text" required="" value="" name="hospitalityRequest.email"/></div></div></div><div className="Textarea"><label for="hospitalityRequest.notes" className="Label">Notes</label><textarea placeholder="These notes will be submitted with your request." name="hospitalityRequest.notes">
					</textarea></div></fieldset><button type="submit" className="muic-btn muic-btn--success">Submit</button></form></div></div></div></div><div className="muic-tabs__panel" role="tabpanel" aria-labelledby="Wine Lists" aria-hidden="true"><div className="hosp-content"><div className="hosp-product-main"><div className="hosp-product-gallery"><section className="image-gallery" aria-live="polite"><div className="image-gallery-content"><div className="image-gallery-slide-wrapper bottom"><button type="button" className="image-gallery-fullscreen-button" aria-label="Open Fullscreen"></button><button type="button" className="image-gallery-play-button" aria-label="Play or Pause Slideshow"></button><span><button type="button" className="image-gallery-left-nav" aria-label="Previous Slide"></button><button type="button" className="image-gallery-right-nav" aria-label="Next Slide"></button></span><div className="image-gallery-swipe"><div className="image-gallery-slides"><div className="image-gallery-slide center"><div className="image-gallery-image"><img src="https://storage.googleapis.com/teo-utils/hospitality/products/wine-list-5.jpg" alt="1" /></div></div><div className="image-gallery-slide right"><div className="image-gallery-image"><img src="https://storage.googleapis.com/teo-utils/hospitality/products/wine-list-6.jpg" alt="2" /></div></div><div className="image-gallery-slide"><div className="image-gallery-image"><img src="https://storage.googleapis.com/teo-utils/hospitality/products/wine-list-3.jpg" alt="3" /></div></div><div className="image-gallery-slide left"><div className="image-gallery-image">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/wine-list-7.jpg" alt="4"/></div></div></div></div></div><div className="image-gallery-thumbnails-wrapper bottom"><div className="image-gallery-thumbnails"><div className="image-gallery-thumbnails-container" role="navigation" aria-label="Thumbnail Navigation"><a role="button" aria-pressed="true" aria-label="Go to Slide 1" className="image-gallery-thumbnail active"><img src="https://storage.googleapis.com/teo-utils/hospitality/products/wine-list-5.jpg" alt="Thumbnail 0" /><div className="image-gallery-thumbnail-label"></div></a><a role="button" aria-pressed="false" aria-label="Go to Slide 2" className="image-gallery-thumbnail"><img src="https://storage.googleapis.com/teo-utils/hospitality/products/wine-list-6.jpg" alt="Thumbnail 1" /><div className="image-gallery-thumbnail-label"></div></a><a role="button" aria-pressed="false" aria-label="Go to Slide 3" className="image-gallery-thumbnail"><img src="https://storage.googleapis.com/teo-utils/hospitality/products/wine-list-3.jpg" alt="Thumbnail 2" /><div className="image-gallery-thumbnail-label"></div></a><a role="button" aria-pressed="false" aria-label="Go to Slide 4" className="image-gallery-thumbnail">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/wine-list-7.jpg" alt="Thumbnail 3" /><div className="image-gallery-thumbnail-label"></div></a></div></div></div></div></section></div><div className="hosp-product-intro"><h2>Wine Lists</h2><p>Welcome your guests with the style and design that reflects your unique venue.  Choose from the selection we've included below or create something that's entirely you, the design options are endless!  Each item is handcrafted in the USA and delivers quickly.</p><div className="hosp-product-data-container"><div className="hosp-product-data"><span className="hosp-product-data-label">Lead Time:</span><span className="hosp-product-data-value">2-4 weeks</span></div><div className="hosp-product-data"><span className="hosp-product-data-label">Minimum:</span><span className="hosp-product-data-value">25</span></div>
					</div></div></div><h3 className="hosp-form-leadin">Select options to receive a quote:</h3><div><div><form><div className="hosp-product-full"><p>Color/Material</p><div className="hosp-product-opts"><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/linen_canvas.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="linen_canvas" name="hospitalityRequest.material"/><div className="Radio_dot"></div>Linen Canvas</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/linen_silver.jpg" alt="option thumbnail"/><label className="Label"><input type="radio" value="linen_silver" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Linen Silver</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/linen_wicker.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="linen_wicker" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Linen Wicker</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_aston_black.jpg" alt="option thumbnail"/><label className="Label"><input type="radio" value="sim_leather_aston_black" name="hospitalityRequest.material" /><div className="Radio_dot">

					</div>Aston Black</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_aston_tan.jpg" alt="option thumbnail" /><label className="Label" ><input type="radio" value="sim_leather_aston_tan" name="hospitalityRequest.material" /><div className="Radio_dot">
					
					</div>Aston Tan</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_dark_brown.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="sim_leather_dark_brown" name="hospitalityRequest.material"/><div className="Radio_dot">
					
					
					</div>Dark Brown</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_forest_green.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="sim_leather_forest_green" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Forest Green</label></div><div className="hosp-opt">
					
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_midnight_navy.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="sim_leather_midnight_navy" name="hospitalityRequest.material"/ ><div className="Radio_dot" >
					</div>Navy</label></div><div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_rustic_red.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="sim_leather_rustic_red" name="hospitalityRequest.material"/><div className="Radio_dot">

					</div>Rustic Red</label></div><div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_slate_blue.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="sim_leather_slate_blue" name="hospitalityRequest.material"/>
					
					<div className="Radio_dot">
					</div>Slate Blue</label></div><div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/verona_black_lantau.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="verona_black_lantau" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>
					
					Black Lantau</label></div><div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/verona_brown_lantau.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="verona_brown_lantau" name="hospitalityRequest.material" /><div className="Radio_dot">
					</div>Brown Lantau</label></div><div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/verona_steel_metallic.jpg" alt="option thumbnail" />
					<label className="Label"><input type="radio" value="verona_steel_metallic" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Steel Metallic</label></div><div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/verona_vienna_pistachio.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="verona_vienna_pistachio" name="hospitalityRequest.material"/>

					<div className="Radio_dot">
					</div>Pistachio</label></div></div></div><div className="hosp-product-full"><p>Binding Type</p><div className="hosp-product-opts"><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/catch-corners.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="catch_corners" name="hospitalityRequest.binding"/><div className="Radio_dot"></div>Catch Corners</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/top-bottom-flap.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="top_bottom_flap" name="hospitalityRequest.binding"/><div className="Radio_dot"></div>Horiz. Flaps</label></div></div></div><div className="hosp-product-full">
					<p>Decoration Options</p><div className="hosp-product-opts"><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/blind-deboss.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="blind_debossed" name="hospitalityRequest.decoration"/><div className="Radio_dot">
					</div>Blind Debossed</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/foil-stamp-deboss.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="foil_stamp" name="hospitalityRequest.decoration"/><div className="Radio_dot">
					</div>Foil Stamp</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/silkscreen-deboss.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="silkscreen" name="hospitalityRequest.decoration"/><div className="Radio_dot">
					</div>Silkscreen</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/aluminum-die-cut-window.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="aluminum" name="hospitalityRequest.decoration"/><div className="Radio_dot">
					</div>Aluminum Die Cut Window</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/copper-die-cut-window.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="copper" name="hospitalityRequest.decoration"/><div className="Radio_dot">
					</div>Copper Die Cut Window</label></div></div></div><div className="hosp-product-full"><p>Quantity</p><div className="Input"><label for="hospitalityRequest.quantity" className="Label">Quantity</label><input type="number" placeholder="25" value="" name="hospitalityRequest.quantity"/></div></div><fieldset><div className="first-last-ctrl  form-2up"><div className="Input"><label for="hospitalityRequest.firstName" className="Label">First Name</label>
					
					<input type="text" required="" value="" name="hospitalityRequest.firstName"/></div><div className="Input"><label for="hospitalityRequest.lastName" className="Label" >Last Name</label>
					<input type="text" required="" value="" name="hospitalityRequest.lastName"/></div></div><div className="Input"><label for="hospitalityRequest.companyName" className="Label">Company Name</label>
					<input type="text" value="" name="hospitalityRequest.companyName"/></div><div className="form-2up"><div className="Input"><label for="hospitalityRequest.phone" className="Label">Phone Number</label>
					<input type="tel" required="" value="" name="hospitalityRequest.phone"/></div><div><div className="Input"><label for="hospitalityRequest.email" className="Label">Email Address</label>
					<input type="text" required="" value="" name="hospitalityRequest.email"/></div></div></div><div className="Textarea"><label for="hospitalityRequest.notes" className="Label">Notes</label>
					<textarea placeholder="These notes will be submitted with your request." name="hospitalityRequest.notes"></textarea></div></fieldset><button type="submit" className="muic-btn muic-btn--success">Submit</button></form></div></div></div></div><div className="muic-tabs__panel" role="tabpanel" aria-labelledby="Check Presenters" aria-hidden="false"><div className="hosp-content"><div className="hosp-product-main"><div className="hosp-product-gallery"><section className="image-gallery" aria-live="polite"><div className="image-gallery-content"><div className="image-gallery-slide-wrapper bottom"><button type="button" className="image-gallery-fullscreen-button" aria-label="Open Fullscreen"></button><button type="button" className="image-gallery-play-button" aria-label="Play or Pause Slideshow"></button><span><button type="button" className="image-gallery-left-nav" aria-label="Previous Slide"></button><button type="button" className="image-gallery-right-nav" aria-label="Next Slide"></button></span><div className="image-gallery-swipe"><div className="image-gallery-slides"><div className="image-gallery-slide center"><div className="image-gallery-image"><img src="https://storage.googleapis.com/teo-utils/hospitality/products/check-presenter-6.jpg" alt="1" /></div></div><div className="image-gallery-slide right"><div className="image-gallery-image"><img src="https://storage.googleapis.com/teo-utils/hospitality/products/check-presenter-7.jpg" alt="2" /></div></div><div className="image-gallery-slide"><div className="image-gallery-image"><img src="https://storage.googleapis.com/teo-utils/hospitality/products/check-presenter-8.jpg" alt="3" /></div></div><div className="image-gallery-slide left">
					<div className="image-gallery-image">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/check-presenter-9.jpg" alt="4" /></div></div></div></div></div><div className="image-gallery-thumbnails-wrapper bottom"><div className="image-gallery-thumbnails"><div className="image-gallery-thumbnails-container" role="navigation" aria-label="Thumbnail Navigation"><a role="button" aria-pressed="true" aria-label="Go to Slide 1" className="image-gallery-thumbnail active">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/check-presenter-6.jpg" alt="Thumbnail 0" /><div className="image-gallery-thumbnail-label"></div></a><a role="button" aria-pressed="false" aria-label="Go to Slide 2" className="image-gallery-thumbnail">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/check-presenter-7.jpg" alt="Thumbnail 1"/><div className="image-gallery-thumbnail-label"></div></a><a role="button" aria-pressed="false" aria-label="Go to Slide 3" className="image-gallery-thumbnail">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/products/check-presenter-8.jpg" alt="Thumbnail 2" /><div className="image-gallery-thumbnail-label"></div></a>
					<a role="button" aria-pressed="false" aria-label="Go to Slide 4" className="image-gallery-thumbnail"><img src="https://storage.googleapis.com/teo-utils/hospitality/products/check-presenter-9.jpg" alt="Thumbnail 3" /><div className="image-gallery-thumbnail-label"></div></a></div></div></div></div></section></div><div className="hosp-product-intro"><h2>Check Presenters</h2><p>Make your guest's final interaction as good as their first impression of your dining facility!  Our custom check presenters are a great addition to the tailored, matching dining accessories we provide.  Made in the USA, these check presenters can be made to match placemats, menu covers, and wine lists to create a perfectly coordinated environment.</p><div className="hosp-product-data-container"><div className="hosp-product-data"><span className="hosp-product-data-label">Lead Time:</span><span className="hosp-product-data-value">2-4 weeks</span></div><div className="hosp-product-data"><span className="hosp-product-data-label">Minimum:</span><span className="hosp-product-data-value">25</span>
					</div></div></div></div><h3 className="hosp-form-leadin">Select options to receive a quote:</h3><div><div><form><div className="hosp-product-full"><p>Color/Material</p><div className="hosp-product-opts"><div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/linen_canvas.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="linen_canvas" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Linen Canvas</label></div><div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/linen_silver.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="linen_silver" name="hospitalityRequest.material" /><div className="Radio_dot">
					</div>Linen Silver</label></div><div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/linen_wicker.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="linen_wicker" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Linen Wicker</label>

					</div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_aston_black.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="sim_leather_aston_black" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Aston Black</label></div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_aston_tan.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="sim_leather_aston_tan" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Aston Tan</label>
					</div>
					<div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_dark_brown.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="sim_leather_dark_brown" name="hospitalityRequest.material"/>

					<div className="Radio_dot">
					</div>Dark Brown</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_forest_green.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="sim_leather_forest_green" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Forest Green</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_midnight_navy.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="sim_leather_midnight_navy" name="hospitalityRequest.material" /><div className="Radio_dot" >
					</div>Navy</label></div><div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_rustic_red.jpg" alt="option thumbnail"/><label className="Label"><input type="radio" value="sim_leather_rustic_red" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Rustic Red</label></div><div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/sim_leather_slate_blue.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="sim_leather_slate_blue" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Slate Blue</label></div><div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/verona_black_lantau.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="verona_black_lantau" name="hospitalityRequest.material"/><div className="Radio_dot">
					</div>Black Lantau</label></div><div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/verona_brown_lantau.jpg" alt="option thumbnail" /><label className="Label" ><input type="radio" value="verona_brown_lantau" name="hospitalityRequest.material"/><div className="Radio_dot">

					</div>Brown Lantau</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/verona_steel_metallic.jpg" alt="option thumbnail" /><label className="Label" ><input type="radio" value="verona_steel_metallic" name="hospitalityRequest.material" /><div className="Radio_dot">

					</div>Steel Metallic</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/verona_vienna_pistachio.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="verona_vienna_pistachio" name="hospitalityRequest.material"/><div className="Radio_dot" >

					</div>Pistachio</label></div></div></div><div className="hosp-product-full"><p>Decoration Options</p><div className="hosp-product-opts"><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/blind-deboss.jpg" alt="option thumbnail"/><label className="Label"><input type="radio" value="blind_debossed" name="hospitalityRequest.decoration"/><div className="Radio_dot" >

					</div>Blind Debossed</label></div><div className="hosp-opt">
					<img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/foil-stamp-deboss.jpg" alt="option thumbnail" /><label className="Label">
					<input type="radio" value="foil_stamp" name="hospitalityRequest.decoration"/><div className="Radio_dot">
					</div>Foil Stamp</label></div><div className="hosp-opt"><img src="https://storage.googleapis.com/teo-utils/hospitality/swatches/silkscreen-deboss.jpg" alt="option thumbnail" /><label className="Label"><input type="radio" value="silkscreen" name="hospitalityRequest.decoration"/><div className="Radio_dot" >

					</div>Silkscreen</label></div></div></div>
					<div className="hosp-product-full"><p>Quantity</p><div className="Input"><label for="hospitalityRequest.quantity" className="Label">Quantity</label>
					<input type="number" placeholder="25" value="" name="hospitalityRequest.quantity"/></div></div><fieldset><div className="first-last-ctrl  form-2up"><div className="Input"><label for="hospitalityRequest.firstName" className="Label">First Name</label>
					<input type="text" required="" value="" name="hospitalityRequest.firstName"/></div>
					<div className="Input"><label for="hospitalityRequest.lastName" className="Label">Last Name</label>
					<input type="text" required="" value="" name="hospitalityRequest.lastName"/></div></div><div className="Input"><label for="hospitalityRequest.companyName" className="Label">Company Name</label>
					<input type="text" value="" name="hospitalityRequest.companyName"/>
					</div><div className="form-2up"><div className="Input" ><label for="hospitalityRequest.phone" className="Label" >Phone Number</label>
					<input type="tel" required="" value="" name="hospitalityRequest.phone"/></div><div><div className="Input"><label for="hospitalityRequest.email" className="Label">Email Address</label>
					<input type="text" required="" value="" name="hospitalityRequest.email"/></div></div></div><div className="Textarea"><label for="hospitalityRequest.notes" className="Label">Notes</label>
					<textarea placeholder="These notes will be submitted with your request." name="hospitalityRequest.notes"></textarea></div></fieldset><button type="submit" className="muic-btn muic-btn--success">Submit</button></form></div></div></div></div></section>
				</div>;
    }
}
export default Dining;
