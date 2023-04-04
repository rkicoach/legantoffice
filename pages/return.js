import { Box, Text, Heading } from '../components/base'
const style = {
  paragraphAbout: {
    fontSize: "1em",
    fontWeight: 'normal',
  },
  ulcontent: {
    fontSize: "1em",
    textDecoration: "none",
    fontWeight: "normal",
  }
}

export default () => (
  <Box mb4>
    <Heading is='h2' bold mb2 mt2>Guaranteed Christmas Delivery</Heading>
    <Text mb2>Take advantage of our Guaranteed Christmas Delivery promotion! During checkout, you'll be able to select from several shipping methods including discounted expedited services. For our Guaranteed Christmas Delivery service, select - "Guaranteed Delivery". We will determine the shipping method needed to deliver on or before the 23rd. A flat rate shipping charge will be incurred, but we pick up the difference. This promotion is available for a limited time and does not apply to shipments outside of the USA nor to items decorated with a logo.</Text>
    <Text>All shipments are sent via FedEx. We will use FedEx Home service which delivers on Saturday the 23rd to residential addresses only. All orders for Christmas delivery must be placed no later than Friday, December 22nd at 4pm EDT.</Text>

    <Heading is='h2' bold mb2 mt2>Quick and Easy Returns</Heading>

    <Text>For your convenience, a return shipping label has been enclosed in your order. For the fastest service, follow these 3 steps.</Text>
    <Text>1) Contact our Customer Service Team to confirm eligibility and request a Return Authorization number. Providing the Order Number found on the packing slip will expedite our locating your order. Phone 866.433.7573 or email: sales@TheElegantOffice.com</Text>
    <Text>2) Place the item in its original retail packaging, then pack in a sturdy shipping carton.</Text>
    <Text mb3>3) Adhere the return label to the shipping carton and drop off at a nearby FedEx location or place in any outgoing FedEx Ground shipment.</Text>
    <Text>That's all there is to it! Once the item is received and processed, we'll promptly issue you the applicable credit. A flat fee will be deducted from your refund for the return shipping costs.</Text>

    <Heading is='h2' bold mb2 mt2>Returns Terms & Conditions:</Heading>
    <Box is='ul' pl0 css={style.ulcontent}>
      <li>All returns must be received within 30 days.</li>
      <li>Returns received without a return authorization number may be assessed a 20% restocking fee.</li>
      <li>Returned items must be received in new condition in their original retail packaging to receive a full credit. Items not in compliance may either be refused or subject to a 20% restocking fee, at our discretion.</li>
      <li>Return shipping charges are the responsibility of the person returning the package.</li>
      <li>Please allow up to 4 weeks for return processing.</li>
      <li>Credits will be less freight and any restocking fees that may be applicable.</li>
      <li>Refunds can only be given to the original purchaser. If the item was received as a gift, it may be exchanged for a different item.</li>
      <li>Custom products, items decorated with a logo, initials or a name, and open-box items may not be returned for a refund. In the event that an item is received in damaged or defective condition, we will repair or replace the item at our discretion.</li>
      <li>Orders shipped outside the USA cannot be returned for credit.</li>
    </Box>

  </Box>
)



