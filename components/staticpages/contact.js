import { Box, Text, Heading } from '../../components/base';
export default () => (
  <div className='mobilePadding'>
    <div>
      <Heading bold is="h1" my={2}>
          Contact Us 
      </Heading>
      <Text mb2>We'd love to hear from you! If you have questions, comments, or concerns, please reach out to us via phone or email.</Text>
      <Heading is='h3' bold mb3>Customer Service</Heading>
      <Heading is='h3' bold mb2>Open Monday through Friday, 8AM - 5:30PM EST</Heading>
      <Box is='ul' pl0 mb4>
        <li className="cu-toll-free">Toll-Free: <Text is='a' color='#1f76c3' href="tel://1-866-433-7573">866-433-7573</Text></li>
        <li className="cu-local">Local: <Text is='a' color='#1f76c3' href="tel://1-352-332-3613">352-332-3613</Text></li>
        <li className="cu-fax">Fax: 352-505-3336</li>
        <li className="cu-email"><Text is='a' color='#1f76c3' href="mailto:sales@theelegantoffice.com">sales@TheElegantOffice.com</Text></li>
        <li className="cu-street-l1">The Elegant Office, Inc.</li>
        <li className="cu-street-l2">5200 NW 43rd Street</li>
        <li className="cu-street-l3">Suite 102-256</li>
        <li className="cu-street-l4">Gainesville, FL 32606</li>
      </Box>
    </div>
  </div>
)