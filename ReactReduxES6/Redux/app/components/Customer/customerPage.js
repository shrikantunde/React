import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {customerAction,loadCustomer,postCustomer,getCommodity} from '../../actions/customerAction';

class CustomerPage extends React.Component {
  constructor(props){
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  componentDidMount(){
    this.props.loadCustomer();
    this.props.getCommodity();
  }

  formSubmit(event){
    console.log(event);
    alert('event clicked');
    let fname=document.getElementById('f_text').value;
    let response=this.props.postCustomer({"id":"33"+fname,"name":fname});
    console.log("form submit");
    console.log(response);
  }

  render() {
    const {customer,commodity,loadCustomer,postCustomer,getCommodity} = this.props;
    alert("Customer render");
    console.log("Customer render");
    console.log(customer);
    console.log(postCustomer);
    console.log("Get commodity");
    console.log(commodity);
    
return (
      <div>
          <div>
            Name : <input type="text" id="f_text" name="text_name"/>
            <button onClick={this.formSubmit}>form submit</button>
          </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Customer</th>
          </tr>
        </thead>
        <tbody>Customer data Welcome  {customer.map((data)=><tr key={data.id}>{data.name}</tr> )}</tbody>
      </table>
      </div>
    );
  }
}

function mapStateToProps({customer,commodity}) {
  console.log('Customer Page',customer)
  return {
    customer: customer,
    commodity:commodity
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({customerAction}, dispatch)
  };
}

export default connect(mapStateToProps,{loadCustomer,postCustomer,getCommodity})(CustomerPage);