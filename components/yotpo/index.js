import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
class Yotpo extends React.Component {
	  constructor(props) {
		  		super(props);
		  		this.state = {
								curLocation: null
					    };
		    }
	  /* componentDidMount(){
	   *     var url_string = window.location.href;
	   *     		var productDataUrl = decodeURIComponent(url_string);
	   *     				var url_string = productDataUrl;
	   *     						var url = new URL(url_string);
	   *     								var productId = url.searchParams.get('productId');
	   *     								    this.setState({productId: productId})
	   *     								        this.loadWidget(productId)
	   *     								            //yotpo.initWidgets()
	   *     								              } */

	  getReviews(pId,pName,pDesc,pImgUrl){
		  		var productId = pId //url.searchParams.get('productId');
		      var productName = pName
		      var productDesc = pDesc
		      var productImgUrl = pImgUrl
		      this.setState({productId: productId})
		      this.setState({productName: productName})
		      this.setState({productDesc: productName})
		      this.setState({productImgUrl: productImgUrl})
		      this.loadWidget(productId,productName)
		    }

	  componentWillReceiveProps(){
		        var pId = this.props.productId
		        var pName = this.props.productName
		        var pDesc = this.props.productDesc
		        var pImgUrl = this.props.productImgUrl
		        if(pId != null){
				          this.getReviews(pId,pName,pDesc,pImgUrl);
				      }
		    }


	  loadWidget(productId) {
		      var e = document.createElement("script");
		      e.type = "text/javascript",
			      e.async = true,
			      e.src = "//staticw2.yotpo.com/gzLifCZ7CnkFZTx4G1LaYq2lKf3l5GCCSQy6FivI/widget.js",
			      e.id = productId;
		      this.setState({curLocation: document.location.pathname})
		      var t = document.getElementsByTagName("script")[0];
		      t.parentNode.insertBefore(e,t);

		      if (typeof yotpo !== 'undefined') {
			            setTimeout(function () {
					                yotpo.initWidgets();
					            }, 500)

			          }
	  }
	  render() {
		      const productId = this.state.productId;
		      const productName = this.state.productName;
		      const productDesc = this.state.productDesc;
		      const productImgUrl = this.state.productImgUrl;
		      if(!productId) {
			      						return (<div></div>)
			      					}
		      return (
			              <div className="yotpo yotpo-main-widget"
			              data-product-id= {productId} //2984  P8401
			              data-name= {productName}//"Abc"
			              data-url={this.state.curLocation}
			              data-image-url= {productImgUrl}
			              data-description= {productDesc}>
			              </div>
			          );
		    }
}

export default Yotpo;

