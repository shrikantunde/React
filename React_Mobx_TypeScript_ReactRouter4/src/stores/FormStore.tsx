import {observable} from 'mobx';

class CustomerForm{
    @observable name:string;
    @observable address:string;
    @observable cities
    selectedCity
    isRedirected:boolean;

    @observable customer={
        name:"",
        address:"",
        cities:[]
    }

    constructor()
    {
        this.cities=[{id:1,name:"pune"},{id:2,name:"mumbai"}];
        this.customer.cities=[{id:1,name:"pune"},{id:2,name:"mumbai"}];
    }

    updateState(key,value){
        console.log(key);
        console.log(value);
        this.name=value;
        console.log("Input form");
        console.log(this.name);
    }

    

}

let cust=new CustomerForm();

export default cust;