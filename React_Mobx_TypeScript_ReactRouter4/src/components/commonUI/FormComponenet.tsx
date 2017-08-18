import * as React from 'react';
import {BrowserRouter as Router,Route,Redirect,Link} from 'react-router-dom';
import {observer } from 'mobx-react';


import FormStore from './../../stores/FormStore';

@observer
export default class Form extends React.Component<any, any> {
    state

    constructor(props) {
        super(props);
        this.state = FormStore;
        this.onChange = this.onChange.bind(this);
        this.Save=this.Save.bind(this);
    }
    componentDidMount() {
       
    }

    onChange (event) {
        this.state.updateState(event.target.name, event.target.value)
    }

    Save(){
        alert("saved"); 
    }

    render() {

        if (this.state.isRedirected) {
        return (
            <Redirect to='/'/>
        )
        }
        
     console.log(this.state.cities);
        
        return (
            <div>
               <div className="pageContent">
                Form 
                <div className="pg-content">
                    <div className="content-container side-panel-open dentist">
                        <input type="text" name="user name" value={this.state.name} onChange={this.onChange}/>
                        <div className="aa"></div>
                        <input type="text" name="user name" value={this.state.address} onChange={this.onChange}/>
                        Select Site :  
                        <select id="lang" onChange={this.onChange}>
                            {this.state.cities.map(x=>(<option value={x.name} key={x.id}>{x.name}</option>)) }
                        </select>
                        <button type="button" onClick={this.Save}>Submit</button>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}