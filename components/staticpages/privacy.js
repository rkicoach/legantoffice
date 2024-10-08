import { Heading } from '../../components/base'
const style = {
  paragraphAbout: {
    fontSize: "17px",
    fontWeight: 'normal',
  },

}

export default () => (
  <div className='mobilePadding'>
    <div>
      <Heading bold is="h1" my={2}>Privacy Policy & Legal Info</Heading>
      <p style={style.paragraphAbout}>At The Elegant Office Inc. and its affiliated websites, we protect your personal information. The Elegant Office owns information collected on this site and will never sell or rent this information. We will not share it in ways different from what is described in this statement unless you authorize us to do so.</p>
      <h3>Cookies and IP Addresses</h3>
      <p style={style.paragraphAbout}>The Elegant Office is firmly committed to our customers' privacy. Like many sites, we use your IP address to help diagnose problems with our server and provide a better web experience. Your IP address is used to help identify you and your shopping cart and gather general demographic information. We use cookies to keep track of your shopping cart and for other purposes like personalizing the site. Cookies are a small piece of information stored by your internet browser to your computer's hard drive. Your browser is usually set up to initially accept cookies. If you set your browser to reject cookies, the site will not be able to recognize your cart, your account, or any personalization. We do not and cannot use cookies to gather your confidential information that may be stored on your hard drive. The Elegant Office also uses web beacons as a means to deliver us cookies in order to determine whether and how many times our web pages have been browsed. Third Party advertisers also help us display tailored content to our customers and serve ads on our behalf. These advertisers may also utilize cookies and/or web beacons to measure effectiveness, efficiencies, etc. of the sites.</p>

      <h3>External Links</h3>
      <p style={style.paragraphAbout}>This site contains links to other websites. The Elegant Office is not responsible for the privacy practices or the content of other sites.</p>

      <h3>Your Personal Information</h3>
      <p style={style.paragraphAbout}>Our site uses forms for you to request information, products and services. We collect your contact information, including, but not limited to, addresses, email addresses, phone numbers, and financial information. Collected information is used for the benefit of&nbsp; The Elegant Office to send information to customers about orders, to fulfill orders, to process and collect payments, to send promotional marketing material about our company and partners, and to contact customers about orders when necessary. Demographic and profile data is also collected at our sites. We use this data to tailor your experiences at our sites, to show you content that we think you might be interested in, and to display the content according to your preferences.</p>

      <h3>Third-Party Service Providers</h3>
      <p style={style.paragraphAbout}>We employ other companies and individuals to perform functions on our behalf. Examples include fulfilling orders, delivering packages, sending postal mail and e-mail, providing marketing assistance such as tailoring content on our sites and serving ads on our behalf, providing search results and links, and processing credit card payments. They have access to personal information needed to perform their functions, but may not use it for other purposes.</p>

      <p style={style.paragraphAbout}>Customer information is considered to be an asset of The Elegant Office and as such may be transferred to another company as part of an acquisition of The Elegant Office.</p>
    </div>
  </div>
)

