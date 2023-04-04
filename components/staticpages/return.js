import { Box, Text, Heading } from '../../components/base'
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
  <Box mb4 className='mobilePadding'>
    <Heading bold is="h1" my={2}>Returns</Heading>
    <Heading is='h2' bold mb2 mt2>Extended Holiday Return Policy</Heading>
	    <Text mb2>Shop with peace of mind knowing that we've extended the time frame for returns.  Orders placed November 16 or later may be returned through January 15th.  Please follow the same steps as a standard return, but know that if the gift isn't a fit, we'll gladly refund or exchange for a different item.</Text>
	    <Text>Please note, we cannot refund items that have been personalized with initials or a logo.</Text>
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



