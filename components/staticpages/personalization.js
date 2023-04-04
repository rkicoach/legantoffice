import { Box, Text, Heading } from '../../components/base'
export default () => (
  <Box>
    <div>
      <Heading bold is="h1" my={2}>
        Personalization
      </Heading>
      <Text>Our personalization services are the perfect finishing touch for any desk accessory, perfect for gifts!</Text>
      <Box my2 className="page-pic3-caption">
        <div>
	          <img src="https://storage.googleapis.com/next-teo.appspot.com/static/images/personalization/debossed-initials-3-letters.jpg" alt="debossed initials" />
	          <span>Style B1 - Gold Foil</span>
	        </div>
	        <div>
	          <img title="coasterpersonalization.jpg" src="https://storage.googleapis.com/next-teo.appspot.com/static/images/personalization/debossed-initials-single-letter-1.jpg" alt="coasterpersonalization.jpg" />
	          <span>Style A3 - Debossed</span>
	        </div>
	        <div>
	          <img src="https://storage.googleapis.com/next-teo.appspot.com/static/images/personalization/debossed-initials-single-letter-2.jpg" alt="debossed initials" />
	          <span>Style A1 - Debossed</span>
	        </div></Box>
    </div>
    <Box mb4>
      <Text center mb2>Elevate your gift beautifully. Select a monogram style and our in-house craftsmen will apply this decorative step to your order. Whether you choose the timeless look of debossed initials or prefer the use of a contrasting color, the finished product is sure to leave a lasting impression.</Text>
      <Text center mb2>Options vary according to the imprint area and product color. Look for Personalize this Item to make your selection.</Text>
      <Text center>Note – Personalized items may ship the following business day and may not be returned for credit. This option is available on select items. When adding initials to a desk set, the desk pad is the only accessory available for personalization.</Text>
    </Box>
  </Box>
)

