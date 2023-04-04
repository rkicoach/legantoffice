import { Box, Text, Heading, Flex, LinkBlock } from '../components/base';

const style = {
		list: {
					listStyle: 'disc',
					listStylePosition: 'inside',
					padding: '.75em .75em .75em 1.5em',
					backgroundColor: '#E8E8E8',
					borderRadius: '3px',
					fontSize: '.8em',
					margin: '.75em 0'
				},
		box: {
					border: '1px solid #ccc'
				},
		link: {
					display: 'block'
				},
		img: {
					margin: '-0.4em',
					width: 'calc(100% + 0.8em)',
					maxWidth: 'initial'
				}
}

export default ()=>(
	<div>

					<Text color='#9c9c9c' fontSize='.8em' mb3>Protect your boardroom table using the best. Choose from these mat styles by Dacasso® to find the option that suits your office needs and budget.</Text>
					<Flex mb4>
					<Box width={1/4} css={style.box} m1 p1>
						<img className="img-responsive" style={style.img} src="https://storage.googleapis.com/next-teo.appspot.com/static/images/types-of-table-pads/conference-table-pads.jpg" />
						<Box>
						<Heading is='h4' fontSize='20px' bold my2 center>Conference Table Pads</Heading>
						<Box is='ul' css={style.list} pl0>
						<li>The choice for executive meeting rooms</li>
						<li>Optimal writing surface</li>
						<li>Sturdy design holds up to laptops &amp; binders</li>
						<li><LinkBlock>Read More</LinkBlock></li>
						</Box>
						<LinkBlock css={style.link} center p1 href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_type%5D%5B0%5D=Conference%20Table%20Pad">Shop this style</LinkBlock>
						</Box>
					</Box>
					<Box width={1/4} css={style.box} m1 p1>
						<img className="img-responsive" style={style.img} src="https://storage.googleapis.com/next-teo.appspot.com/static/images/types-of-table-pads/placemats.jpg" />
						<Box>
						<Heading is='h4' fontSize='20px' bold my2 center>Placemats</Heading>
						<Box is='ul' css={style.list} pl0>
						<li>Versatile style with sophisticated looks</li>
						<li>Ideal for dining applications</li>
						<li>Low-profile design with cushioned feel</li>
						<li><a href="/pages/types-of-table-pads">Read More</a></li>
						</Box>
						<LinkBlock css={style.link} center p1 href="/shop/conference-room-accessories/placemats/">Shop this style</LinkBlock>
						</Box>
					</Box>
					<Box width={1/4} css={style.box} m1 p1>
						<img className="img-responsive" style={style.img} src="https://storage.googleapis.com/next-teo.appspot.com/static/images/types-of-table-pads/blotters.jpg" />
						<Box>
						<Heading is='h4' fontSize='20px' bold my2 center>Blotters</Heading>
						<Box is='ul' css={style.list} pl0>
						<li>Padded rails highlight this traditional look</li>
						<li>Optimal writing surface</li>
						<li>Rigid core construction for durability</li>
						<li><a href="/pages/types-of-table-pads">Read More</a></li>
						</Box>
						<LinkBlock css={style.link} center p1 href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_type%5D%5B0%5D=Blotter">Shop this style</LinkBlock>
						</Box>
					</Box>
					
				</Flex>
				<Box fontSize='.8em'>
					<table className='table table-hover table-striped'><thead>
					<tr>
									<th>Pad Type</th><th>Conference Table Pads</th><th >Placemats</th><th >Blotters</th></tr></thead><tbody><tr><td >Warranty</td><td>5 Years</td><td>2 Years</td><td>1 Year</td></tr><tr><td>Sizes/Shapes</td><td><img style={{height: '1.5em'}} className="pad-shapes-img" src="https://storage.googleapis.com/teo-utils/pad-types/confpadshapes.svg" alt="pad shapes" /></td><td ><img style={{height: '1.5em'}} className="pad-shapes-img" src="https://storage.googleapis.com/teo-utils/pad-types/placematshapes.svg" alt="placemat shapes" /></td><td><img style={{height: '1.5em'}} className="pad-shapes-img" src="https://storage.googleapis.com/teo-utils/pad-types/blottershapes.svg" alt="blotter shapes" /></td></tr><tr><td>Materials</td><td>Top-Grain Leather, Bonded Leather, Leatherette</td><td>Textured Leatherette</td><td>Top-Grain Leather / Leatherette</td></tr><tr><td>Custom Sizes/Colors</td><td>Available</td><td>Available</td><td>Not Available</td></tr><tr><td>Durability</td><td>Best</td><td>Better</td><td>Best</td></tr><tr><td >Same-Day Shipping</td><td>Yes</td><td>Yes</td><td>Yes</td></tr><tr><td>Logo Imprinting</td><td>Available</td><td >Available</td><td>Available</td></tr><tr><td s>Pricing</td><td>$46 +</td><td>$40 +</td><td>$81 +</td></tr></tbody></table>
	</Box>
					<Heading center is='h3'>Call with any questions or to further discuss your needs.</Heading>
					<LinkBlock css={style.link} p2 center mb2 fontSize='1.2em' href="tel://866-433-7573">866-433-7573</LinkBlock>
				</div>
)
