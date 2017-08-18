import * as React from 'react';
import ProductComponent from './Product';
import ProductStore from './../../stores/ProductStore';


export default class ProductListComponent extends React.Component<any,any>{

constructor(props){
    super(props);
    this.state=ProductStore;
}

state
// lifecycle hooks 
    componentDidMount(){
        
    }

    render(){

        return(
            <div className="pageContent">
                 <ProductComponent productlistdata={this.state.Products}></ProductComponent>
            </div>
        )
    }

}

