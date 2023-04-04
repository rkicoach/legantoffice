import { Box, Text, Heading, Flex, LinkBlock } from '../../components/base';
import Router from 'next/router';
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

function addLogo(componentname, url) {
  Router.push(componentname,url)
}

const WhyConferencePads = () => {
	return(
<div>
	<Heading bold is="h1" my={2}>
		Why Conference Table Pads
	</Heading>
	<Flex mb4>
		<Box width={1/2} css={style.box} m1 p1>
			<LinkBlock css={style.link} center p1 href="/shop/conference-room-accessories/conference-table-pads/">
				<img className="img-responsive" style={style.img} src="https://storage.googleapis.com/next-teo.appspot.com/static/images/why-conference-pads/58fa4627e4b04ce475b1ce8a-optimized.jpeg" alt="Conference table pads" />
			</LinkBlock>
			<Heading is='h4' fontSize='20px' bold my2 center>Enhance Appearance</Heading>
			<Text mb2>You've created a professional appearance in your office - add the finishing touch.</Text>
		</Box>
		<Box width={1/2} css={style.box} m1 p1>
			<LinkBlock css={style.link} center p1 href="/shop/conference-room-accessories/conference-table-pads/">
				<img className="img-responsive" style={style.img} src="https://storage.googleapis.com/next-teo.appspot.com/static/images/why-conference-pads/58fa4627e4b094541fae447c-optimized.jpeg" alt="Conference table pads" />
			</LinkBlock>
			<Heading is='h4' fontSize='20px' bold my2 center>Protect Your Table</Heading>
			<Text mb2>Prevent the inadvertent marks and scratches that occure from regular use.</Text>
		</Box>
	</Flex>	
	<Flex mb4>
		<Box width={1/2} css={style.box} m1 p1>
			<LinkBlock css={style.link} center p1 href="/shop/conference-room-accessories/conference-table-pads/">
				<img className="img-responsive" style={style.img} src="https://storage.googleapis.com/next-teo.appspot.com/static/images/why-conference-pads/58fa4627e4b094541fae447b-optimized.jpeg" alt="Conference table pads" />
			</LinkBlock>
			<Heading is='h4' fontSize='20px' bold my2 center>Improve Guest Experiences</Heading>
			<Text mb2>Define each guest's space and provide them with the optimum writing surface.</Text>
		</Box>
		<Box width={1/2} css={style.box} m1 p1>
			<LinkBlock css={style.link} center p1 href="/shop/conference-room-accessories/conference-table-pads/?refinementList%5Bpad_type%5D%5B0%5D=Placemat">
				<img className="img-responsive" style={style.img} src="https://storage.googleapis.com/next-teo.appspot.com/static/images/why-conference-pads/590a38e7e4b0646f61f8a169-optimized.jpeg" alt="Conference table pads" />
			</LinkBlock>
			<Heading is='h4' fontSize='20px' bold my2 center>Preserve Your Investment</Heading>
			<Text mb2>Purchasing or refinishing a conference table is expensive. Add an elegant protective layer to increase the longevity of your furniture.</Text>
		</Box>
	</Flex>	
	<Flex mb4>
		<Box width={1/2} css={style.box} m1 p1>
			{/*<LinkBlock css={style.link} center p1 href="/pages/add-a-logo/">
				<img className="img-responsive" style={style.img} src="https://storage.googleapis.com/next-teo.appspot.com/static/images/why-conference-pads/58fa4627e4b04ce475b1ce8c-optimized.jpeg" />
			</LinkBlock>*/}
			<Box css={style.link} center p1 onClick={addLogo.bind(this,'/addlogocomponent','/pages/add-a-logo/')}>
				<img className="img-responsive" style={style.img} src="https://storage.googleapis.com/next-teo.appspot.com/static/images/why-conference-pads/58fa4627e4b04ce475b1ce8c-optimized.jpeg" alt="Conference table pads" />
			</Box>
			<Heading is='h4' fontSize='20px' bold my2 center>Promote Your Brand</Heading>
			<Text mb2>Extend your branding efforts to your boardroom. Add your logo and create a meeting space that's uniquely yours.</Text>
		</Box>
		<Box width={1/2} css={style.box} m1 p1>
		<LinkBlock css={style.link} center p1 href="/pages/add-a-logo/">
			<img className="img-responsive" style={style.img} src="https://storage.googleapis.com/next-teo.appspot.com/static/images/why-conference-pads/58d9714be4b0c5d8f46fdf78-optimized.jpeg" alt="Conference table pads" />
		</LinkBlock>
		<Heading mt3 center>
			<LinkBlock  center p1 href="/shop/conference-room-accessories/conference-table-pads/">Shop Conference Table Pads</LinkBlock> or <LinkBlock center p1 href="/shop/conference-room-accessories/conference-room-sets/">Shop Conference Room Sets</LinkBlock>
		</Heading>
		</Box>
	</Flex>	
</div>
)
}
export default WhyConferencePads;
