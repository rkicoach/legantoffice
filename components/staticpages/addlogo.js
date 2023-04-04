import { Box, Text, Heading, Flex } from '../../components/base';
import { themeColors } from '../../styles';

const style = {
  circle: {
    width: '3.5em',
    height: '3.5em',
    lineHeight: '3.5em',
    backgroundColor: '#11416b',
    marginBottom: '.75em',
    textAlign: 'center',
    borderRadius: '50%',
    margin: '10px auto'
  },
  list: {
    listStyle: 'disc',
    listStylePosition: 'inside'
  }
}

export default () => (
  <Box mb4 className='mobilePadding'>
    <Heading bold is="h1" my={2}>
        Add A Logo
    </Heading>
    <Text>A custom touch can leave a lasting impression for those receiving a gift or seated at your boardroom table. Adding your logo to many of our products is a simple and quick process. Production won’t begin until a proof is approved, assuring your involvement. If you have any questions or concerns, our knowledgeable staff is here to help! </Text>
    <Flex my2>
      <Box width={1 / 3} p1>
        <img className='img-responsive' src="https://storage.googleapis.com/next-teo.appspot.com/static/images/add-a-logo/debossing-1.jpg" alt="desk pad without rails" />
      </Box>
      <Box width={1 / 3} p1>
        <img className='img-responsive' src="https://storage.googleapis.com/next-teo.appspot.com/static/images/add-a-logo/debossing-2.jpg" alt="desk pad without rails" />
      </Box>
      <Box width={1 / 3} p1>
        <img className='img-responsive' src="https://storage.googleapis.com/next-teo.appspot.com/static/images/add-a-logo/full-color-printing.jpg" />
      </Box>
    </Flex>
    <Text>Debossing – This is our most common decorating method. The logo is pressed down into the product, without color. The combination of heat and pressure results in a clean, accurate logo imprint which captures significant detail. The metal replica of the logo, used in production, is referred to as the die. Dies are stored for five (5) years and may be used for reorders of the same logo, in the same size, with the same manufacturer.</Text>
	
	    <Text>Foil Stamping – The logo is imprinted on the surface of the item in a contrasting color and is flush with the surface rather than recessed into the product. A die (a metal replica of the logo) is used in this stamping process.Dies are stored for five (5) years and may be used for reorders of the same logo, in the same size, with the same manufacturer.</Text>
	    <Text>Full Color Printing - Replicate your logo in its full color.  This printing process allows us to capture an unlimited number of colors and color gradients.  The ink is flush with the surface of the item.</Text><Heading is='h2' bold mb2 mt2>The Process</Heading>
    <Text>We’ve completed thousands of custom logo imprints, and we’ll be here to provide guidance and answer questions every step of the way!Adding your logo to desk or conference room accessories is as easy as 1 - 2 - 3:</Text>
    <Flex mb3>
      <Box width={1 / 3} p1>
        <Box css={style.circle}><Text color='#fff' fontSize='1.5625em' bold>1</Text></Box>
        <Text>On the product page, click the button next to - Order With A Logo, enter the quantity and click Add to Cart.  Select the decorating method and Continue.  Upload your logo file and select your imprint preferences.  For fastest service and best logo fidelity we prefer vector files (.AI, .EPS, etc), but we can work with most any art format (.PDF, .JPG, .GIF, .TIF, or .PNG).</Text>      </Box>
      <Box width={1 / 3} p1>
        <Box css={style.circle}><Text color='#fff' fontSize='1.5625em' bold>2</Text></Box>
        <Text>Once your order is placed and the logo file is received, our skilled in-house art team will email a PDF proof for your review. This illustration shows the logo’s sizing and placement on the product. If changes are needed, simply let us know and a new proof will be created.  Once approved, your order will move into production.</Text>
      </Box>
      <Box width={1 / 3} p1>
        <Box css={style.circle}><Text color='#fff' fontSize='1.5625em' bold>3</Text></Box>
        <Text>That’s it! Most of our products will be imprinted and shipped to you within 5 business days of your approval. A few items require additional lead time, up to 10 days. If you have a firm delivery deadline, let us know so we can work with you to fulfill that requirement.</Text>
      </Box>
    </Flex>

    <img className='img-responsive' src="https://cdn2.bigcommerce.com/n-d57o0b/k2r6aoh/product_images/uploaded_images/logosamplelineart-and-debossed.jpg" alt="" width="600" height="200" />

    <Heading is='h2' bold mb2 mt2>Future Orders</Heading>
   <Text>Whether you need additional products or another location is outfitting their facility, once the die is created it may be used repeatedly without incurring another Logo Setup fee.</Text>    <Box is='ul' pl0 css={style.list}>
      <li>Deboss or Foil Stamp - $25 per order</li>
      <li>Full Color Print - $40 per order</li>
          </Box>
  </Box>
)
