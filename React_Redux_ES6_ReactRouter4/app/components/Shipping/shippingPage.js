import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shippingActions from '../../actions/robotActions';
import configureStore from './../../store/configureStore';
import {loadShipping} from '../../actions/shippingActions';

class ShippingPage extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    const store = configureStore();
    store.dispatch(loadShipping());
    alert("load shipping page")
  }

  render() {
    const {shipping,actions} = this.props;
    console.log("Shipping page");
    shipping.map((ship) =>{
       console.log("shipping list");
       console.log(ship);
      });
return (
      <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Shipping Robot List</th>
          </tr>
        </thead>
        <tbody>{shipping.map((ship) => <tr key={ship.id}><td>{ship.name}</td></tr>)}</tbody>
      </table>
      </div>
    );
  }
}

function mapStateToProps({shipping}) {
  console.log('shipping robots',shipping)
  return {
    shipping: shipping
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(shippingActions, dispatch)

  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ShippingPage);
