import * as React from 'react';
import axios from 'axios';


export default class ProductComponent extends React.Component<any,any>{  
    render(){
        let productList=this.props.productlistdata.map((product,index)=>{
                return(
                    <li className="item-card" key={index}>
                        <div className="item-media">
                            <div className="item-image">
                                <img src={product.image} alt="" width="100px" height="100px"></img>
                            </div>
                        </div>
                        <div className="item-info">
                            <div className="item-price">{product.name}</div>
                        </div>
                    </li>
                    )
                })
        return(
            <ul>
            {productList}
            </ul>
        )
    }

}