import React from 'react';
import Slider from 'react-slick';
import FaStar from 'react-icons/lib/fa/star';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import PropTypes from 'prop-types';
import $ from 'jquery';
import SliderItem from './sliderItem'

import { Box, Heading, Text } from '../components/base';

const styles = {

};
var settings = {
	    infinite: true,
	    speed: 500,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    nextArrow: <FaAngleRight />,
	    prevArrow: <FaAngleLeft />,
	    responsive: [ { breakpoint: 768, settings: { slidesToShow: 1 } }  ]
};

 class ProductSlider extends React.Component {
	     constructor(props) {
		     		super(props);
		     		this.state = {
								jay: []
							};
		     	}
	     componentDidMount() {
		             $.ajax({
				     	    url:'https://api.yotpo.com/v1/widget/gzLifCZ7CnkFZTx4G1LaYq2lKf3l5GCCSQy6FivI/products/yotpo_site_reviews/reviews.json?per_page=10&page=1&sort[]=date&direction[]=desc',
				                 type: 'GET',
				                 success: function (data) {
							                 var userId =''
							                 var userTitle =''
							                 var userContent =''
							                 var userScore =''
							                 var userName =''
							                 var userdata=[];
							                 var createdDate = "";
							                 data = data['response']['reviews'];
							                 $.each(data, function (key, value) {
										                   userId      = value.user.user_id;
										                   userTitle   = value.title;
										                   userContent = value.content;
										                   userScore   = value.score;
										                   userName    = value.user.display_name;
										                   createdDate = value.created_at;
										                   createdDate = new Date(createdDate);
										                   createdDate = createdDate.toLocaleString('en-US');
										                   userdata.push({"userName":userName,"userId":userId,"userTitle":userTitle,"userContent":userContent, "userScore": userScore,"createdDate":createdDate})

										                 })
							                 this.setState({ jay: userdata})
							             }.bind(this),
				                 error: function (xhr, status, err) {
							                 console.log(err);
							             }.bind(this)
				             });
		         }
	     starReturn = (value, id)=>
		     {
			             var rating = []
			             for(var a = 0; a<value; a++){
					                 rating.push(<FaStar key={id+a} />)
					             }
			            return rating;
			         }

	 render(){
		     var {jay} = this.state;
		     if(jay.length){
			             return(
					                 <div className="footer-product-slider">
					                     <Slider {...settings}>
					                     {jay.map(data => (
								                         <Box key={data.userId}>
								                             <Box fontSize="12px" color="#e97a25" mb3>
								                                 {this.starReturn(data.userScore, data.userId)}
								                             </Box>
								                             <Heading is="h6" color="#1d3c64" fontSize="12px" mb2>{data.userTitle}</Heading>
								                             <Text fontSize="12px" mb2>{data.userContent}</Text>
								                             <Box fontSize="12px" color="#9c9c9c" bold><Text color='#1d3c64' is="span" bold>{data.userName}. -</Text>{data.createdDate}</Box>
								                         </Box>

								                     )

								                 )}
					                     </Slider>
					                 </div>
					             );
			         } else {
					         return <div>.</div>
						     }
	 }
 }
export default ProductSlider;

