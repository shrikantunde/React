import {action, observable} from 'mobx';
import * as Validator from 'validatorjs';

class LoginStore {
  @observable loginSuccess=false;

  @observable
  form = {
    fields: {
      email: {
        value: '',
        error: null,
        rule: 'required|email'
      },
      password: {
        value: '',
        error: null,
        rule: 'required'
      },
    },
    meta: {
      isValid: false,
      error: null,
    },
  }


  @action
  onFieldChange = (field, value) => {
    this.form.fields[field].value = value;
    let {email, password} = this.form.fields

    let data={email: email.value, password: password.value};
    let rules={email: email.rule, password: password.rule};

    let validation = new Validator(data, rules);

    this.form.meta.isValid = validation.passes();
    this.form.fields[field].error = validation.errors.first(field)
  }

  @action
  setError = (errMsg) => {
    this.form.meta.error = errMsg
  }

  saveForm(){
      
  }

  validateLoginSuccess(){
    this.loginSuccess=true;
  }

}


export default LoginStore;