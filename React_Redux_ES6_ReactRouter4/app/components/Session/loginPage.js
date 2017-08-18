import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {postLogin} from '../../actions/loginAction';

class LoginPage extends React.Component {
  constructor(props){
    super(props);

    this.state={
        id:'',password:''
    };

    this.formSubmit = this.formSubmit.bind(this);
    this.onChange=this.onChange.bind(this);
  }

  componentDidMount(){

  }

  formSubmit(e){
      e.preventDefault();

      this.props.postLogin(this.state).then(response => {
        console.log("Form submit response");
        console.log(response);
        console.log(response.data);
      })
      .catch(error => {
        throw(error);
      });
  }

  onChange(e){
      this.setState({[e.target.name]:e.target.value});
  }

  render() {
    const {user,loadUser,postLogin} = this.props;
    console.log("Login page");

    const { id, password }=this.state;

return (
      <div>
        <table className="table table-hover">
            <thead>
            <tr>
                <th>User Login</th>
            </tr>
            </thead>
            <tbody>
                <div>
                    <br/>
                    UserName : <input type="text" id="f_text" name="id" onChange={this.onChange} value={id}/><br/><br/>
                    Password : <input type="text" id="f_password" name="password" onChange={this.onChange} value={password}/><br/><br/>
                    <button onClick={this.formSubmit}>Login</button>
                </div>
            </tbody>
        </table>
      </div>
    );
  }
}


export default connect(null,{postLogin})(LoginPage);