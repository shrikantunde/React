import * as React from 'react';
import CustomerStore from './../../stores/CustomerStore';
import Modal from './../commonUI/Modal';
//import CustomerModel from './../../models/CustomerModel';
import {observer} from 'mobx-react';

@observer
export default class CustomerForm extends React.Component<any,any>{
    constructor(props){
        super(props);
        this.save=this.save.bind(this);
        this.propertyChange = this.propertyChange.bind(this);
    }

    state

    save(){
        this.props.customerStore.save();
    }

    propertyChange(event){
        this.props.customerStore.updateState(event.target.name, event.target.value)
    }

    componentDidMount(){
        // Get the modal
        let modal = document.getElementById('myModal');
        let btn = document.getElementById("myBtn");
        // Get the <span> element that closes the modal
        let span = document.getElementsByClassName("close")[0];
        // When the user clicks on the button, open the modal 
        btn.onclick = function() {
             modal.style.display = "block";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                    modal.style.display = "none";
                }
        }
    }

    render(){

        let success_css= "form-control input-lg";


        return(
            
            <div className="pageContent">
                 <input className={success_css} type="text" name="name" onChange={this.propertyChange} value={this.props.customerStore.customerModel.name} />
                 <br/>
                 <button className="btn btn-success" onClick={this.save}> Save </button>
                 <button id="myBtn" className="btn btn-success"> open modal </button>
                 <Modal/>
            </div>
        )
    }

}

