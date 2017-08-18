import * as React from 'react';
import {observer} from 'mobx-react';

@observer
export default class CustomerList extends React.Component<any,any>{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div className="pageContent">
                 {this.props.customerList.map((data)=>{return(<li>{data.name}</li>)})}
            </div>
        )
    }

}

