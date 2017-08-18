import {observable,action} from 'mobx';
import axios from 'axios';
import {getProducts} from './../services/ProductService';

class ProductStore{

    @observable Products=[];

    constructor()
    {
        this.getProducts();
    }

    @action getProducts(){
        let current=this;
        let result=(data)=>{current.Products=data;}
        this.Products=getProducts(result);
    }
}

let product=new ProductStore();

export default product;