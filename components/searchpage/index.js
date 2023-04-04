import React, { Component } from 'react';
import $ from 'jquery';
class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propvalue: []
    };
  }
  componentDidMount() {
    //console.log(JSON.stringify(this.props));
  }

  render() {
    var { propvalue } = this.props;
    for (var i = 0; i > 10; i++) {
      //console.log("sdddkdkss");
    }

    
    var count = []
    for (var propvalue in propvalue) {
      count++;
  }
  
  //console.log('count-->'+count);
    //  console.log("---->"+propvalue.length);
    /*  $('.react-autosuggest__input  ').keypress(function(e){
       if(e.which == 13){//Enter key pressed
           alert('Enter pressed: Submitting the form....');
          // window.location.href = "http://localhost:4000/searchcomponent";
       }
   }); */
    /*  if(propvalue) {
       $.map(propvalue, function (value, index) {
         console.log("--->"+JSON.stringify(value));
       });
     } */

    return (
      <div></div>
    );
  }
}

export default SearchPage;
