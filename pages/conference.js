import { Box, Text, Heading, Flex } from '../components/base';
const style = {
  heading: {
    fontSize: "40px",
    fontWeight: 'bold',
    marginBottom: '30px'
  },
  paragraph: {
    fontSize: "16px",
    marginBottom: '20px',
    lineHeight: '20px'
  },
  paraWrap: {
    marginTop: '15px',
    textAlign: 'center'
  },
  image: {
    maxWidth: '100%'
  }
}

export default () => (
  <div>
    <p style={style.paragraph}>Use these illustrations to view common conference table sizes and shapes with various pads. The renderings are drawn to scale, allowing you to easily see the spacing and coverage the mats provide. We have more renderings in our library, so if you don't see something that is similar to your's, please let us know!</p>
    <Heading is='h2' bold mb2 mt2>10-Seat Boat Shaped Table</Heading>
    <div className="sbc-imgs">
      <div className="sbc-pic-two">
        <a href="https://storage.googleapis.com/teo-utils/renderings/120-48-boat-H1147.svg">
          <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/120-48-boat-H1147.svg" alt="17x12 Placemats on a 120x48 Boat Shaped Table" />
        </a>
        <span className="sbc-pic-caption">17x12 Placemats on a 120x48 Boat Shaped Table</span>
        <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=17%20x%2012">View all 17x12 Placemats</a>
      </div>
      <div className="sbc-pic-two">
        <a href="https://storage.googleapis.com/teo-utils/renderings/120-48-boat-P1010.svg">
          <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/120-48-boat-P1010.svg" alt="17x14 Conference Table Pads on a 120x48 Boat Shaped Table" /></a>
        <span className="sbc-pic-caption">17x14 Conference Table Pads on a 120x48 Boat Shaped Table</span>
        <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=17%20x%2014">View all 17x14 Pads</a>
      </div>
    </div>
    <div>
      <Heading is='h2' bold mb2 mt2>14/16-Seat Boat Shaped Table</Heading>
      <div className="sbc-imgs">
        <div className="sbc-pic-two">
          <a href="https://storage.googleapis.com/teo-utils/renderings/192-60-boat-P1010.svg">
            <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/192-60-boat-P1010.svg" alt="17x14 Conference Table Pad on a 192x60 Boat Shaped Table" />
          </a>
          <span className="sbc-pic-caption">17x14 Conference Table Pad on a 192x60 Boat Shaped Table</span>
          <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=17%20x%2014">View all 17x14 Pads</a>
        </div>
        <div className="sbc-pic-two"><a href="https://storage.googleapis.com/teo-utils/renderings/192-60-boat-P1030.svg">
          <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/192-60-boat-P1030.svg" alt="20x16 Conference Table Pads on a 192x60 Boat Shaped Table" /></a>
          <span className="sbc-pic-caption">20x16 Conference Table Pads on a 192x60 Boat Shaped Table</span>
          <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=20%20x%2016">View all 20x16 Pads</a>
        </div>
      </div>
    </div>
    <div>
      <Heading is='h2' bold mb2 mt2>12-Seat Rectangular Table</Heading>
      <div className="sbc-imgs">
        <div className="sbc-pic-two">
          <a href="https://storage.googleapis.com/teo-utils/renderings/144-48-H1147.svg">
            <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/144-48-H1147.svg" alt="17x12 Placemats on a 144x48 Rectangular Table" /></a><span className="sbc-pic-caption">17x12 Placemats on a 144x48 Rectangular Table</span>
          <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=17%20x%2012">View all 17x12 Placemats</a>
        </div>
        <div className="sbc-pic-two">
          <a href="https://storage.googleapis.com/teo-utils/renderings/144-48-P1010.svg">
            <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/144-48-P1010.svg" alt="17x14 Conference Table Pads on a 144x48 Rectangular Table" />
          </a>
          <span className="sbc-pic-caption">17x14 Conference Table Pads on a 144x48 Rectangular Table</span>
          <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=17%20x%2014">View all 17x14 Pads</a>
        </div>
        <div className="sbc-pic-two">
          <a href="https://storage.googleapis.com/teo-utils/renderings/168x59_p1019.svg">
            <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/168x59_p1019.svg" alt="24x19 Conference Table Pads on a 168x59 Table" /></a>
          <span className="sbc-pic-caption">24x19 Conference Table Pads on a 168x59 Table</span>
          <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=24%20x%2019">View all 24x19 Pads</a>
        </div>
        <div className="sbc-pic-two">
          <a href="https://storage.googleapis.com/teo-utils/renderings/168x59_p1030.svg">
            <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/168x59_p1030.svg" alt="20x16 Conference Table Pads on a 168x59 Table" />
          </a>
          <span className="sbc-pic-caption">20x16 Conference Table Pads on a 168x59 Table</span>
          <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=20%20x%2016">View all 20x16 Pads</a>
        </div>
      </div>
    </div>
    <div>
      <Heading is='h2' bold mb2 mt2>14/16-Seat Rectangular Table</Heading>
      <div className="sbc-imgs">
        <div className="sbc-pic-two"><a href="https://storage.googleapis.com/teo-utils/renderings/192-60-P1010.svg">
          <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/192-60-P1010.svg" alt="17x14 Conference Table Pads on a 192x60 Rectangular Table" /></a>
          <span className="sbc-pic-caption">17x14 Conference Table Pads on a 192x60 Rectangular Table</span>
          <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=17%20x%2014">View all 17x14 Pads</a>
        </div>
        <div className="sbc-pic-two"><a href="https://storage.googleapis.com/teo-utils/renderings/192-60-P1030.svg">
          <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/192-60-P1030.svg" alt="20x16 Conference Table Pads on a 192x60 Rectangular Table" /></a>
          <span className="sbc-pic-caption">20x16 Conference Table Pads on a 192x60 Rectangular Table</span>
          <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=20%20x%2016">View all 20x16 Pads</a>
        </div>
        <div className="sbc-pic-two">
          <a href="https://storage.googleapis.com/teo-utils/renderings/216x72_p1019.svg">
            <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/216x72_p1019.svg" alt="24x19 Conference Table Pads on a 216x72 Table" /></a>
          <span className="sbc-pic-caption">24x19 Conference Table Pads on a 216x72 Table</span>
          <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=24%20x%2019">View all 24x19 Pads</a>
        </div>
        <div className="sbc-pic-two">
          <a href="https://storage.googleapis.com/teo-utils/renderings/216x72_p1028.svg">
            <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/216x72_p1028.svg" alt="22x14 Blotter Pads on a 216x72 Table" /></a><span className="sbc-pic-caption">22x14 Blotter Pads on a 216x72 Table</span>
          <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=22%20x%2014">View all 22x14 Blotter Pads</a>
        </div>
      </div>
    </div>
    <div>
      <Heading is='h2' bold mb2 mt2>4-Seat Round Table</Heading>
      <div className="sbc-imgs">
        <div className="sbc-pic-two">
          <a href="https://storage.googleapis.com/teo-utils/renderings/48-round-H1148.svg">
            <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/48-round-H1148.svg" alt="17x12 Cut-Corner Placemats on a 48x48 Round Table" /></a>
          <span className="sbc-pic-caption">17x12 Cut-Corner Placemats on a 48x48 Round Table</span>
          <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=17%20x%2012">View all 17x12 Placemats</a>
        </div>
        <div className="sbc-pic-two"><a href="https://storage.googleapis.com/teo-utils/renderings/48-round-P1014.svg">
          <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/48-round-P1014.svg" alt="17x14 Oval Conference Table Pads on a 48x48 Round Table" /></a>
          <span className="sbc-pic-caption">17x14 Oval Conference Table Pads on a 48x48 Round Table</span>
          <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=17%20x%2014">View all 17x14 Pads</a>
        </div>
      </div>
    </div>
    <div>
      <Heading is='h2' bold mb2 mt2>108 Inch Round Table</Heading>
      <div className="sbc-imgs">
        <div className="sbc-pic-two">
          <a href="https://storage.googleapis.com/teo-utils/renderings/108_round_p1010.svg">
            <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/108_round_p1010.svg" alt="17x14 Conference Table Pads on a 108x108 Round Table" />
          </a>
          <span className="sbc-pic-caption">17x14 Conference Table Pads on a 108x108 Round Table</span>
          <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=17%20x%2014">View all 17x14 Pads</a>
        </div>
        <div className="sbc-pic-two"><a href="https://storage.googleapis.com/teo-utils/renderings/108_round_p1030.svg">
          <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/108_round_p1030.svg" alt="20x16 Conference Table Pads on a 108x108 Round Table" /></a>
          <span className="sbc-pic-caption">20x16 Conference Table Pads on a 108x108 Round Table</span>
          <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=20%20x%2016">View all 20x16 Pads</a>
        </div>
      </div>
    </div>
    <div>
      <Heading is='h2' bold mb2 mt2>U-Shaped Table</Heading>
      <div className="sbc-imgs">
        <div className="sbc-pic-two">
          <a href="https://storage.googleapis.com/teo-utils/renderings/u_p1010.svg">
            <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/u_p1010.svg" alt="17x14 Conference Table Pads on a U-Shaped Table" /></a>
          <span className="sbc-pic-caption">17x14 Conference Table Pads on a U-Shaped Table</span>
          <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=17%20x%2014">View all 17x14 Pads</a>
        </div>
        <div className="sbc-pic-two"><a href="https://storage.googleapis.com/teo-utils/renderings/u_p1030.svg">
          <img className="img-responsive" src="https://storage.googleapis.com/teo-utils/renderings/u_p1030.svg" alt="20x16 Conference Table Pads on a U-Shaped Table" /></a>
          <span className="sbc-pic-caption">20x16 Conference Table Pads on a U-Shaped Table</span>
          <a className="sbc-txt-link" href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_size%5D%5B0%5D=20%20x%2016">View all 20x16 Pads</a>
        </div>
      </div>
    </div>
    <Box mb4>
      <Heading is='h3' mb2>Don't see what you're looking for?</Heading>
      <Text>
        <a href="tel://866-433-7573">Call us</a> if there's a specific table size and shape that you'd like to see.  We'll create a custom rendering to help you find the perfect accessories for your table!</Text>
    </Box>
  </div>
)
