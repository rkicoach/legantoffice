import { Box, Text, Heading } from '../components/base';
const style = {
  paragraphAbout: {
    fontSize: "1em",
    fontWeight: 'normal',
  },

}
export default () => (
  <div>
    <Box mb4>
      <Heading is='h2' bold mb2 mt2>Guaranteed Christmas Delivery</Heading>
	      <p style={style.paragraphAbout}>Take advantage of our Guaranteed Christmas Delivery promotion! During checkout, you'll be able to select from several shipping methods including discounted expedited services. For our Guaranteed Christmas Delivery service, select - "Guaranteed Delivery". We will determine the shipping method needed to deliver on or before the 24th. A flat rate shipping charge will be incurred, but we pick up the difference. This promotion is available for a limited time and does not apply to shipments outside of the USA nor to items decorated with a logo.</p>
	      <p style={style.paragraphAbout}>All shipments are sent via FedEx. We will use FedEx Home service which delivers on Saturday the 22nd to residential addresses only. All orders for Christmas delivery must be placed no later than Friday, December 21st by 4pm EDT.</p>
	      <Heading is='h2' bold mb2 mt2>Guaranteed - 1 to 5 Day Delivery</Heading>
	      <p style={style.paragraphAbout}>*FREE guaranteed delivery service is a 1 to 5 business day delivery depending on your location in the continental US. The day of order does not count in the delivery time. Shipment is done via FedEx Ground. For the exact delivery day for your area please reference the guaranteed delivery time given on the product page for your state. To qualify for FREE delivery, you must order over $49.00 or a flat rate of $4.95 will apply.</p>
	      <p style={style.paragraphAbout}>We guarantee that you order will delivery within the given delivery time for your state. If for whatever reason the shipment doesn't delivery in time it can be returned for a full refund at no cost to you. A pre-paid label will be provided by us for the return. Imprinted or personalized products are excluded from the guaranteed delivery program.</p>
	      <Heading is='h2' bold mb2 mt2>Shipping Policies</Heading>
	<p style={style.paragraphAbout}>Many of the items we offer, ship the same day. Please refer to each product page to view the shipping details for each product. Our merchandise ships from multiple facilities nationwide, so order processing and transit times vary.</p>

      <p style={style.paragraphAbout}>FedEx Ground is our standard shipping method, but expedited services are available and may be selected during checkout. If you have an event or in hands date, please let us know by adding a note in the Order Notes field during checkout. The day the package is picked up is not considered a transit day, nor are weekends. Transit days reflect business days only.</p>

      <p style={style.paragraphAbout}>Free upgraded 3-Day shipping promotions may be offered periodically throughout the year. This offer applies to orders over $49 and for deliveries within the 48 contiguous United States only.</p>

      <p style={style.paragraphAbout}>Custom products and items that are imprinted with your logo or initials often have longer lead times, and generally cannot ship the same day. If you have a specific deadline that you must meet on an order for custom or decorated items, please contact our customer service team and we'll do all we can to accommodate you.</p>

      <p style={style.paragraphAbout}>We sometimes offer "free shipping" or "flat rate shipping" promotions. During these events, "free shipping" applies only to ground services on orders over $49. "Flat rate shipping" will apply to orders under $49. Please note that "free" and "flat rate" shipping applies only to a single location. Orders shipping to multiple locations will have freight charges assessed per location. These "free shipping" and "flat rate shipping" promotions apply to the 48 contiguous United States, and do not include orders shipped to Alaska, Hawaii, or any nation outside of the United States unless otherwise explicitly stated. Orders processed without freight, or where freight has been waived will be charged actual shipping expenses in the event of a return, and these shipping charges are not subject to return credit. "Free" and "flat rate" shipping is via the carrier and method of our choice, in most circumstances FedEx Ground.</p>

      <p style={style.paragraphAbout}>During the holiday season, we may offer Guaranteed Holiday Delivery on select products. Though it is rare, occasionally we are unable to meet holiday deadlines due to a variety of circumstances. Should this happen, we will fully refund the price of your shipping plus 10% of your purchase price (up to $200).</p>

      <Text style={style.paragraphAbout} mt4>NOTE: TheElegantOffice.com cannot be responsible for delays due to weather or mechanical matters involving the carrier's equipment.</Text>

      <Heading is='h2' bold mb2 mt2>International Orders</Heading>

      <p style={style.paragraphAbout}>Items shipped internationally are typically carried by FedEx. Orders shipped outside of the United States may have additional Customs brokerage fees, duties, or taxes levied by governmental agencies or third-parties. These fees will be payable directly to the entity requiring them, and will not be reported to or controlled by The Elegant Office. If you are unsure about what additional fees may apply to a shipment, feel free to contact us prior to your order. We may not be able to answer questions specific to your country's laws and regulations, but we'll certainly try to point you in the right direction!</p>
    </Box>
  </div>
)
