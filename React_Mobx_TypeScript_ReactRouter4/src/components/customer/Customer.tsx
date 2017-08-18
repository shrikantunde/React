import * as React from 'react';
import CustomerStore from './../../stores/CustomerStore';
import CustomerForm from './../../components/customer/CustomerForm';
import CustomerList from './../../components/customer/CustomerList';
import {observer} from 'mobx-react';


@observer
export default class Customer extends React.Component<any,any>{
    constructor(props){
        super(props);
        this.customerStore=CustomerStore;
    }

    customerStore

    componentDidMount(){
        
    }

    render(){
        return(
            <div className="pageContent">
                <CustomerForm customerStore={this.customerStore} />
                <CustomerList customerList={this.customerStore.customerList} />
            </div>
        )
    }

}

