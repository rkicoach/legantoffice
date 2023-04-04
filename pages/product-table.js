import React from 'react';
import $ from "jquery";
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
/* import gstore from 'gstore-node';*/
//import './image-gallery.css';
//import './image-gallery.css'; var soap = require('soap');
//import('../../node_modules/react-image-gallery/styles/css/image-gallery.css');
import custom from './custom.js';
//import soap from 'soap';

 	/*var url = 'file:///C:/Users/shashikantu/Downloads/WSDL_v2017_1_0/lists.employees.xsd';
	console.log("testmail"+url);
	var args = {name: 'value'};
	soap.createClient(url, function(err, client) {
		client.MyFunction(args, function(err, result) {
			console.log("hii"+result);
		});
	});  */
	//alert("fgkfgjkf");
let product = ""
const style = {
    productTable: {
		borderCollapse: "collapse",
		width: "60%",
		fontSize:'14px',
	},
	productTableTh: {
		width:'50%',
		textAlign: "left",
		padding: "8px",
		fontSize:"13px",
		fontWeight:"bold",
		borderBottom:'2px solid #aeaeae',
	},
	productTableTd: {
		width:'50%',
		borderTop:'1px solid #aeaeae',
		textAlign: "left",
		padding: "8px",
		fontSize:"13px",
		fontWeight:"400",
	},
	
}
const images = [
	{
		original: 'http://lorempixel.com/1000/600/nature/1/',
		thumbnail: 'http://lorempixel.com/250/150/nature/1/',
	},
	{
		original: 'http://lorempixel.com/1000/600/nature/2/',
		thumbnail: 'http://lorempixel.com/250/150/nature/2/'
	},
	{
		original: 'http://lorempixel.com/1000/600/nature/3/',
		thumbnail: 'http://lorempixel.com/250/150/nature/3/'
	}
	]
class ProductTable extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      
    };
	}
	
	
    componentDidMount() {

      axios.get(this.props.url).then(function(response){
            // perform setState here
          }).catch(function(error){
            //Some error occurred
          });
      var current = this;

        $.ajax({
        url: "http://localhost/PHPToolkit_2017_1/PHPToolkit/testns.php",
        type: 'GET',
        dataType: 'json',
        headers: {"Access-Control-Allow-Origin": "*"},
        crossDomain: true,
        cache: false,
        success: function(data) {
					var info = ""
					var infoWeight = ""
					var infoDetail = ""
			 	    var infocreatedDate = ""
					var infodescription = ""
					var infocountry = ""
					var infominimumQuantity = ""
					var infostoreDisplayName = ""
					var infointernalId = ""
					var infoimagename = ""
					var infoupcCode = ""
					var infodisplayName = ""
				    var infovendorName = ""
				    var infoprintItems = ""
				    var infodepartment =""
				    var infolocation = ""
				    var infocostCategory = ""
				    var infovendor = ""
				    var infoincomeAccount =""
				    var infosalesTaxCode =""
				    var infohandlingCost =""
				    var infocostingMethodDisplay = ""
					var customitemCollection =""
					var custitem_series =""
					var custitem_color = ""
					var custitem_exterior_material = ""
					var custitem_prd_size = ""
					var custitem_pad_design =""
					var custitem_pad_type = ""
					var custitemfact_pack_type = ""
					var custitem_brand =""
					var countryofmanufacture = ""
					var custitem_warranty = ""
					var custitem_material_desc =""
					var custitem_care_clean = ""
					var storeDetailedDescription =""
					
					 
					  
            $.each(data, function(key,value){
						info                     = value.itemId
						infoWeight               = value.weight
						infocreatedDate          = value.createdDate
				        infodescription          = value.description
				        infominimumQuantity      = value.minimumQuantity
				        infostoreDisplayName     = value.storeDisplayName
				        infointernalId           = value.internalId
				        infoupcCode              = value.upcCode
				        infodisplayName          = value.displayName
				        infoprintItems           = value.printItems
				        infodepartment           = value.department
				        infolocation             = value.location
				        infocostCategory         = value.costCategory
				        infovendor               = value.vendor
				        infoincomeAccount        = value.incomeAccount
				        infosalesTaxCode         = value.salesTaxCode
				        infohandlingCost         = value.handlingCost
						infocostingMethodDisplay = value.costingMethodDisplay
						countryofmanufacture     = value.countryOfManufacture
						storeDetailedDescription = value.storeDetailedDescription
						
												
								$.each(value['storeDisplayImage'], function(key1, value1) {
									infoimagename = value['storeDisplayImage'].name
								});
								
								$.each(value['customFieldList']['customField'], function(key2, value2) {
									$.each(value['customFieldList']['customField'], function(key3, value3){
										if(value3.scriptId == 'custitem_collection'){
											customitemCollection = value3.value.name
										}
										if(value3.scriptId == 'custitem_series'){
											custitem_series = value3.value.name
										}
										if(value3.scriptId == 'custitem_color'){
											custitem_color = value3.value.name
										}
										if(value3.scriptId == 'custitem_exterior_material'){
											custitem_exterior_material = value3.value.name
										}
										if(value3.scriptId == 'custitem_prd_size'){
											custitem_prd_size = value3.value
										}
										if(value3.scriptId == 'custitem_pad_design'){
											custitem_pad_design = value3.value.name
										}
										if(value3.scriptId == 'custitem_pad_type'){
											custitem_pad_type = value3.value.name
										}
										if(value3.scriptId == 'custitemfact_pack_type'){
											custitemfact_pack_type = value3.value.name
										}
										if(value3.scriptId == 'custitem_brand'){
											custitem_brand = value3.value.name
										}
										if(value3.scriptId == 'custitem_warranty'){
											custitem_warranty = value3.value.name
										}
										if(value3.scriptId == 'custitem_material_desc'){
											custitem_material_desc = value3.value
										}
										if(value3.scriptId == 'custitem_care_clean'){
											custitem_care_clean = value3.value
										}
									});
								});
            }) 
            
			this.setState({product:info});  
			this.setState({renderInfoWeight:infoWeight});  
			this.setState({createdDateDetail:infocreatedDate}); 
			this.setState({descriptionDetail:infodescription}); 
			this.setState({countryDetail:infocountry});
			this.setState({minimumQuantityDetail:infominimumQuantity});
			this.setState({storeDisplayNameDetail:infostoreDisplayName});
			this.setState({internalIdDetail:infointernalId}); 
			this.setState({imagenameDetail:infoimagename}); 	
			this.setState({upcCodeDetail:infoupcCode}); 
			this.setState({displayNameDetail:infodisplayName});
			this.setState({printItemsDetail:infoprintItems});
			this.setState({departmentDetail:infodepartment});
			this.setState({locationDetail:infolocation});
			this.setState({costCategoryDetail:infocostCategory});
			this.setState({vendorDetail:infovendor});
			this.setState({incomeAccountDetail:infoincomeAccount});
			this.setState({salesTaxCodeDetail:infosalesTaxCode});
			this.setState({handlingCostDetail:infohandlingCost});
			this.setState({costingMethodDisplayDetail:infocostingMethodDisplay});
			this.setState({customitemCollection:customitemCollection}); 	
			this.setState({custitem_series:custitem_series}); 	
			this.setState({custitem_color:custitem_color}); 				
            this.setState({custitem_exterior_material:custitem_exterior_material});
			this.setState({custitem_prd_size:custitem_prd_size});
			this.setState({custitem_pad_design:custitem_pad_design});
			this.setState({custitem_pad_type:custitem_pad_type});
			this.setState({custitemfact_pack_type:custitemfact_pack_type});
			this.setState({custitem_brand:custitem_brand});
			this.setState({countryofmanufacture:countryofmanufacture});
			this.setState({custitem_warranty:custitem_warranty});
			this.setState({custitem_material_desc:custitem_material_desc});
			this.setState({custitem_care_clean:custitem_care_clean});
			this.setState({storeDetailedDescription:storeDetailedDescription});
        }.bind(this),
        error: function(xhr, status, err) {
            console.log(err);
        }.bind(this)
        });
	}
	
	
	/*abc(){
		(function e(){var e=document.createElement("script");e.type="text/javascript",e.async=true,e.src="//staticw2.yotpo.com/TCBsDNo72fBP2qMcmiITAEQfEozgtV0Bmp3FvXmS/widget.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();
	}*/
    render(){
		 

			
			
			//const data = yield call(fetchYotpoSiteReviews);
			//const reviews = yield call(formatReviews, data.reviews);
			//yield put({ type: 'SITE_REVIEWS_RECEIVED', payload: reviews });


		const pro 						 = this.state.product;
        const dataWeight				 = this.state.renderInfoWeight;
		const createdDateDetail 	     = this.state.createdDateDetail; 
		const descriptionDetail 	     = this.state.descriptionDetail; 
		const countryDetail              = this.state.countryDetail;
		const minimumQuantityDetail      = this.state.minimumQuantityDetail;	
		const storeDisplayNameDetail     = this.state.storeDisplayNameDetail;	
		const internalIdDetail           = this.state.internalIdDetail;	
		const imagenameDetail            = this.state.imagenameDetail;	
		const upcCodeDetail              = this.state.upcCodeDetail;
		const displayNameDetail          = this.state.displayNameDetail;	
		const printItemsDetail           = this.state.printItemsDetail;	
		const departmentDetail           = this.state.departmentDetail;	
		const locationDetail             = this.state.locationDetail;	
		const costCategoryDetail         = this.state.costCategoryDetail;			
		const vendorDetail               = this.state.vendorDetail;	
		const incomeAccountDetail        = this.state.incomeAccountDetail;	
		const salesTaxCodeDetail         = this.state.salesTaxCodeDetail;	
		const handlingCostDetail         = this.state.handlingCostDetail;	
		const costingMethodDisplayDetail = this.state.costingMethodDisplayDetail;	
		const customitemCollection 		 = this.state.customitemCollection;
		const custitem_series			 = this.state.custitem_series;	
		const custitem_color			 = this.state.custitem_color;			
		const custitem_exterior_material = this.state.custitem_exterior_material;
		const custitem_prd_size			 = this.state.custitem_prd_size;
		const custitem_pad_design		 = this.state.custitem_pad_design;
		const custitem_pad_type			 = this.state.custitem_pad_type;
		const custitemfact_pack_type     = this.state.custitemfact_pack_type;
		const custitem_brand			 = this.state.custitem_brand;
		const countryofmanufacture		 = this.state.countryofmanufacture;
		const custitem_warranty			 = this.state.custitem_warranty;
		const custitem_material_desc	 = this.state.custitem_material_desc;
		const custitem_care_clean    	 = this.state.custitem_care_clean;
		const storeDetailedDescription   = this.state.htmlString;
		console.log(this.props);
		return <div>
					{/** for header component **/}
					<div className="top-bar">
						<div className="breadcrumb">
							<ul>
								<li>
									<a href="#">Home</a> <span>/</span>
								</li>
								<li>
									<a href="#">Desk Accessories</a> <span>/</span>
								</li>
								<li>
									<a href="#">Desk Pads</a> <span>/</span>
								</li>
								<li>
									<a href="#">Burgundy Leather with Black Trim Desk Pad, Top Rail, 34 x 20</a>
								</li>
							</ul>
						</div>
						<span className="product-brand">Dacasso</span>
					</div>
					{/** for header component **/}
					 <ImageGallery
						items={images}
						slideInterval={2000}
						showFullscreenButton={false}
						useBrowserFullscreen={false}
						showPlayButton={false}
						autoPlay={true}
						/>
						
				<div>{storeDetailedDescription}</div>
				<table className="table-striped" style={custom.productTable}>
					<thead>
						<tr>
							<th style={style.productTableTh}>Product Detail</th>
							<th style={style.productTableTh}>API Data</th>
						</tr>
					</thead>
					<tbody>
					<tr>
							<td style={style.productTableTd}>Collection</td>
							<td style={style.productTableTd}>{customitemCollection}</td>
					</tr>
					
					<tr>
							<td style={style.productTableTd}>Series</td>
							<td style={style.productTableTd}>{custitem_series}</td>
					</tr>			   
					<tr>
							<td style={style.productTableTd}>Color</td>
							<td style={style.productTableTd}>{custitem_color}</td>
					</tr>			  
					<tr>
							<td style={style.productTableTd}>Material</td>
							<td style={style.productTableTd}>{custitem_exterior_material}</td>
					</tr>			  
					<tr>
							<td style={style.productTableTd}>Product Dimensions</td>
							<td style={style.productTableTd}>{custitem_prd_size}</td>
					</tr>			  
					<tr>
							<td style={style.productTableTd}>Product Weight</td>
							<td style={style.productTableTd}>{custitem_prd_size}</td>
					</tr>			  
					<tr>
							<td style={style.productTableTd}>Pad Design</td>
							<td style={style.productTableTd}>{custitem_pad_design}</td>
					</tr>			  
					<tr>
							<td style={style.productTableTd}>Pad Type</td>
							<td style={style.productTableTd}>{custitem_pad_type}</td>
					</tr>
					<tr>
							<td style={style.productTableTd}>Packaging</td>
							<td style={style.productTableTd}>{custitemfact_pack_type}</td>
					</tr>
					<tr>
							<td style={style.productTableTd}>Brand</td>
							<td style={style.productTableTd}>{custitem_brand}</td>
					</tr>
					<tr>
							<td style={style.productTableTd}>Country of Origin</td>
							<td style={style.productTableTd}>{countryofmanufacture}</td>
					</tr>
					<tr>
							<td style={style.productTableTd}>Warranty</td>
							<td style={style.productTableTd}>{custitem_warranty}</td>
					</tr>
					<tr>
							<td style={style.productTableTd}>Material Description </td>
							<td style={style.productTableTd}>{custitem_material_desc}</td>
					</tr>
					<tr>
							<td style={style.productTableTd}>Care & Cleaning</td>
							<td style={style.productTableTd}>{custitem_care_clean}</td>
					</tr>
					</tbody>
				</table>
			</div>;
        //return <div><h3>itemId: {pro}</h3><h3>weight: {dataWeight}</h3><h6>Detail: {dataInfoDetail}</h6></div>;
    }
}
export default ProductTable;
