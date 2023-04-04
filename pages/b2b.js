import { Box, Text, Heading, Flex } from '../components/base';
import Router from 'next/router'
const style = {
  heading: {
    fontSize: "40px",
    fontWeight: 'bold',
    marginBottom: '30px'
  },
  contentHead: {
    fontSize: "25px",
    fontWeight: 'bold',
    marginBottom: '15px',
    marginTop: '10px',
    textAlign: 'center'
  },
  paragraph: {
    fontSize: "16px",
    marginBottom: '20px',
    lineHeight: '26px',
    textAlign: 'left'
  },
  paraWrap: {
    textAlign: 'center'
  }
}

const openAddALogo = () => {
  Router.push('/addlogocomponent','/pages/add-a-logo/')
}

export default () => (
  <div>
    <div className="sbc-top">
      <p style={style.paragraph}>We’ve been helping corporate clients create world-class meeting spaces since 1999.</p>
    </div>
    <div className="sbc-content b2b-content">
      <Flex mb4>
        <Box width={1 / 3} p1>
          <div style={style.paraWrap}><img className="__mce_add_custom__" title="we-speak.png" src="https://storage.googleapis.com/next-teo.appspot.com/static/images/b2b-solutions/we-speak.png" alt="we-speak.png" width="116" height="116" />
            <h2 style={style.contentHead}>We Speak Your Language</h2>
            <p style={style.paragraph}>We know there are deadlines and event dates that must be met, and our systems are in place to manage that for you. If you’re ordering for multiple locations, we’ll gladly split the shipment and complete the drop shipping process for you. Our services are designed to make your life easier – please let us know how we can!</p>
          </div>
        </Box>
        <Box width={1 / 3} p1>
          <div style={style.paraWrap}><img className="__mce_add_custom__" title="multiple-locations.png" src="https://storage.googleapis.com/next-teo.appspot.com/static/images/b2b-solutions/multiple-locations.png" alt="multiple-locations.png" width="116" height="116" />
            <h2 style={style.contentHead}>Multiple Facility Solutions</h2>
            <p style={style.paragraph}>If you have more than one facility using the same logo, combining orders or coordinating the use of the logo can reduce costs and expedite service. We’ll assist in structuring a company store, which will allow quick access to all locations, sharing the same logo. In doing so, production time is reduced and your branding efforts have a cohesive look companywide.</p>
          </div>
        </Box>
        <Box width={1 / 3} p1>
          <div style={style.paraWrap}><img className="__mce_add_custom__" title="expert-service.png" src="https://storage.googleapis.com/next-teo.appspot.com/static/images/b2b-solutions/expert-service.png" alt="expert-service.png" width="116" height="116" />
            <h2 style={style.contentHead}>Expert Service &amp; Care</h2>
            <p style={style.paragraph}>We partner with our clients and guide you through the process. Our knowledgeable customer service staff will provide the information you need, to determine what products will best serve your needs. If logistics are involved – delivering overseas or to multiple locations – we can do that too. Let us know your requirements, we’ll take it from there!</p>
          </div>
        </Box>
      </Flex>
    </div>
    <div className="sbc-content b2b-faq">
      <Heading is='h3' mb3>Frequently Asked Questions</Heading>
      <strong>How long will it take for my order to ship?</strong>
      <p style={style.paragraph}>The vast majority of orders ship the same business day. Cut off times for same-day shipping and turn around times vary across some product lines, but we strive to convey shipping times accurately on each individual product page. If you need further clarity or have a strict delivery requirement, please call or add a note to your order so we can monitor for you.</p>
      <strong>Can I add my logo to products?</strong>
      <p style={style.paragraph}>Yes, many of the items on our website can be customized with a logo or firm name. From the product page of the item, click the green button “Order With Your Logo”. The next window will allow you to upload your logo file. Once you have entered the quantity and uploaded your file, click “Submit File &amp; Add to Cart”. A PDF proof will be emailed for your approval prior to production. See our&nbsp;<a href="javascript:void(0)" onClick={openAddALogo}>Add A Logo</a>&nbsp;information page for more details and images.</p>
      <strong>Will I see a proof when adding a logo?</strong>
      <p style={style.paragraph}>Yes. A proof will be created to illustrate your logo to scale on the item as well as show the actual size of the logo. We will not initiate production without proof approval. The time needed to create the proof depends on the complexity of your artwork, but in most cases we’ll send via email in 2-4 hours. Upon your approval, production takes 5-10 business days depending on the product you’ve selected.</p>
      <strong>Do you ship internationally?</strong>
      <p style={style.paragraph}>Yes! We offer a range of UPS international shipping services. Pricing, transit times, and service levels vary based on destination. During checkout, simply select your country from the drop-down menu to view available shipping options. To view shipping charges prior to checkout, place all items in the cart then click View or Edit Your Cart. Click Estimate Shipping &amp; Tax (light blue text), change the country and applicable delivery information, then “Estimate Shipping &amp; Tax”. All available shipping options and respective shipping charges will display. You may select one, then “Update Shipping Cost” to proceed to checkout. Our shipping rates are discounted, but do not include any applicable taxes and/or duties that are levied by or payable to your country’s government.</p>
      <strong>I need my order by a specific date. What should I do?</strong>
      <p style={style.paragraph}>If you have an "in-hands date" or other specific delivery requirement, please add a note in the Order Notes window during checkout. That information will alert us to your needs, and we’ll be in touch with you to keep you informed of our efforts to meet your requirements. If you’re more comfortable speaking with someone prior to ordering, please don’t hesitate to call!</p>
      <strong>What shipping options are available?</strong>
      <p style={style.paragraph}>We ship using FedEx and use Ground service as our default shipping method. FedEx Ground offers transit times of 1-5 days within the United States. We also offer a full range of day-definite expedited delivery options including Overnight, 2-Day, and 3-Day services. Delivery options and prices will appear during checkout. If you require special freight services such as Saturday Delivery, Early AM Delivery, or shipping on your third-party UPS or FedEx account, please call our customer service team.</p>
      <strong>What are my payment options?</strong>
      <p style={style.paragraph}>You may pay using a credit card or P-card during checkout online. If you prefer paying via wire transfer or check, we can accommodate that those as well. Please contact our customer service department for a quotation, to confirm the total cost of your order. Your order will be released for production or shipping after payment is received.</p>
      <strong>Do you offer pricing discounts for larger quantities?</strong>
      <p style={style.paragraph}>Yes! Call our customer service team to discuss your needs, and we’ll be glad to create a competitive quotation for you.</p>
      <strong>Do you make custom products?</strong>
      <p style={style.paragraph}>Yes! We offer a comprehensive range of custom product creation services, including items in custom colors and materials, custom sizes and shapes, even custom accessories from the ground-up to your exact specifications. Because each project is unique, we’ll need to discuss the details and provide pricing and delivery information based on your requirements. Please&nbsp;<a href="https://www.theelegantoffice.com/pages/contact-us/">contact us</a>&nbsp;to review further.</p>
    </div>
  </div>
)
