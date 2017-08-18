import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Modal from './../components/commonUI/Modal';


@observer
export default class Home extends React.Component<any, any> {
    state

    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <div className='pageContent'>
               <div className="innerImage"></div>
               <div>Welcome to Home page</div>
               <Modal/>
               <button className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
            </div>
        );
    }
}