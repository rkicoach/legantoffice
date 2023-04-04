import { themeColors } from '../../styles';
let product = ""
const style = {
	heading: {
		fontSize:"40px",
		fontWeight: 'bold',
		marginBottom: '30px'
	},
	paragraph: {
		fontSize:"16px",
		marginBottom: '20px',
		color: themeColors.font,
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
		<h1 style={style.heading}>Leather Types</h1>
		<p style={style.paragraph}>There are several types of leather seen throughout our line. Determining which is best for you can be rather confusing. Below provides a review, explaining what they are and the characteristics of each.</p>
		<p style={style.paragraph}><b>Full Grain Leather – </b>is leather that has not been processed to remove any imperfections, it has all of the grain, thus the term Full Grain.  It has not been sanded or buffed so any marks or scratches on the flesh of the cow will be evident on the hide.  Any visible marks are considered to add character to the item. Full grain leather will develop a patina, so the item continues to develop its appeal through time.</p>
		
		<p style={style.paragraph}><b>Top Grain Leather – </b>has had the outer most layer of the hide removed, so the surface layer marks and scratches are not visible. Because the treatment is minimal, some blemishes might be apparent and are considered to add a unique quality to the product. This material is strong and durable, yet more pliable than full grain leather.</p>
		
		<p style={style.paragraph}><b>Split Grain Leather – </b>also referred to as genuine leather, is the deeper part of the hide. It’s what remains after the top grain is split from the hide. This leather is not as durable as those mentioned above, but offers a leather product at a lesser price.</p>
		<p style={style.paragraph}><b>Suede – </b>is also an inner layer of the hide, thus the texture it’s best known for. Its soft feel makes it an ideal lining or accent as opposed to an exterior surface, which might see a lot of wear and tear.</p>
		<p style={style.paragraph}><b>Bonded Leather – </b>is a manmade product using leather pieces that are bonded together to form a sheet used for production. There are various grades of bonded leather, those that contain higher percentages of leather are softer, suppler and have a lovely sheen. This option provides the durability of leather at a lesser price point.</p>
		
		<p style={style.paragraph}><b>Leatherette – </b>although this is not a leather product, it’s an extremely popular and durable option that makes a worthy contender for those shopping on a budget. It is a manmade product that has a leather grain printed into the material adding an authentic look, even to a skilled eye.</p>
		<p style={style.paragraph}><b>Semi-aniline leather – </b>is leather that is dyed but pigment is not opaque, so the natural characteristics of the hide still show through. This process provides the benefits of color consistency and increased durability.</p>
		<p style={style.paragraph}><b>Hand Pulled Leather – </b>also referred to as Oil Pulled, this added step to semi-aniline leather creates a two-tone effect, so the leather may have undertones in a different color.</p>
		<p style={style.paragraph}><b>Crocodile Embossed Leather –</b> is leather that has undergone a heat stamping process, to create a textured pattern which resembles crocodile leather. As a result of the high heat, a slight sheen is apparent on the surface of the leather. Other exotic animal hides may are mimicked this way.</p>
		<p style={style.paragraph}><b>Napa Leather –</b>is generally dyed black. It’s known for its soft, supple feel while still being a durable material.
		</p>
	</div>
)

