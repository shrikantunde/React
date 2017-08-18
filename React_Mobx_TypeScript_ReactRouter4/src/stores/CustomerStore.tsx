import { observable, action } from 'mobx';
import axios from 'axios';

import CustomerModel from './../models/CustomerModel';

class CustomerStore{

    @observable customerList;
    customerModel;

    constructor(){
        this.getCustomerList();
        this.customerModel=new CustomerModel();
    }

    save(){
        this.addCustomerData();
    }

    @action getCustomerList(){
        this.customerList=[];
    }

    @action getCustomerDetailsById(id){

    }

    @action addCustomerData(){
        let custModel=new CustomerModel();
        custModel.name=this.customerModel.name;
        this.customerList.push(custModel);
    }

    @action updateState(key,value){
        this.customerModel.name=value;
        this.customerModel.mobile="7789888555";
        this.customerModel.id=this.customerModel.id+1;  
    }
} 

let customer=new CustomerStore();

export default customer;


