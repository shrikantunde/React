
import * as  React from 'react';
import * as classNames from 'classnames'

//let getFormInputClasses = ({valid, error}) =>('form-input');
let getFormInputClasses = ({valid, error}) => classNames('form-input', {
    'form-group has-error has-feedback': !!error,
})

let FormInput = (props) => (
    <span className={getFormInputClasses(props)}>
      <input {...props}
             type={props.type || 'test'}
             className="form-control input-lg"
             onChange={(e) => props.onChange(e.target.name, e.target.value)} />
      {props.error && <div className="form-input__error">{props.error}</div>}
    </span>
)

/*
FormInput.PropTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password']),
  error: PropTypes.string,
  placeholder: PropTypes.string,
};*/

export default FormInput