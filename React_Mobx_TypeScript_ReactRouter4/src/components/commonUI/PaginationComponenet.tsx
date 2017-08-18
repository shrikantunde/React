import * as React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {observer } from 'mobx-react';

import PaginationStore from './../../stores/PaginationStore';

@observer
export default class Form extends React.Component<any, any> {
    state

    constructor(props) {
        super(props);
        this.state = PaginationStore;
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
        
     console.log(this.state.cities);
        
        return (
            <div>
               <div className="content dashboard layer-middle-bottom1">
                Form 
                <div className="pg-content">
                    <div className="content-container side-panel-open dentist">
                        <input type="text" name="user name" value={this.state.name} onChange={this.onChange}/>
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