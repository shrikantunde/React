import * as React from 'react';
import { observer,inject } from 'mobx-react';
import LoginForm from './LoginComponent';
import LoginStore from './../../stores/LoginStore';
import AppState from './../../stores/AppState';
import { Redirect } from 'react-router-dom';

let loginStore = new LoginStore();

@observer
export default class LoginParent extends React.Component<any, any> {

  render() {
    return (
        <div className="pageContent">
            <LoginForm onSubmit={this.onSubmitForm}
                        form={loginStore.form}
                        onChange={loginStore.onFieldChange} />
             {loginStore.loginSuccess===true &&  <Redirect to="/" push />}
       </div>
    );
  }

  onSubmitForm = () => {
    console.log('submitted!')
    loginStore.validateLoginSuccess();
  }
}