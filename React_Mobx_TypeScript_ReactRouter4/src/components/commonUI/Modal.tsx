import * as React from 'react';
import {BrowserRouter as Router,Route,Redirect,Link} from 'react-router-dom';
import {observer } from 'mobx-react';


@observer
export default class Modal extends React.Component<any, any> {
    state

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.Save=this.Save.bind(this);
    }
    componentDidMount() {
       
    }

    onChange (event) {
        
    }

    Save(){
        
    }

    render() {
        return (
            <div>
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                        <span className="close">&times;</span>
                        <h2>Modal Header</h2>
                        </div>
                        <div className="modal-body">
                        <p>Some text in the Modal Body</p>
                        <p>Some other text...</p>
                        </div>
                        <div className="modal-footer">
                        <h3>Modal Footer</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}