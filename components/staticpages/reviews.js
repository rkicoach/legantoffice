import { Box, Text, Heading } from '../../components/base';
import React from 'react';
import Head from 'next/head';

class Review extends React.Component {
	  constructor(props) {
		      super(props);
		    }

	  getReviews(){
		          this.loadWidget()
		        }

	  componentWillReceiveProps(){

		          this.getReviews();

		        }


	  loadWidget() {
		          var e = document.createElement("script");
		          e.type = "text/javascript",
			            e.async = true,
			            e.src = "//staticw2.yotpo.com/gzLifCZ7CnkFZTx4G1LaYq2lKf3l5GCCSQy6FivI/widget.js";
		          var t = document.getElementsByTagName("script")[0];
		          t.parentNode.insertBefore(e,t);

		          if (typeof yotpo !== 'undefined') {
				                  setTimeout(function () {
							                          yotpo.initWidgets();
							                      }, 500)

				                }
		    }
	  render() {

		          return (
				            <div className='mobilePadding'>
				              <div>
				                <Heading bold is="h1" my={2}>
				                  Reviews
				                </Heading>
				                <Text mb4>We use a third party company by the name of Yotpo to send and verify all of our product and site reviews.
				                If you have any questions or concerns, please let us know - we are a phone call away!</Text>
				              </div>
				              <div id="yotpo-testimonials-custom-tab"></div>
				            </div>
				                );
		        }
}

export default Review

