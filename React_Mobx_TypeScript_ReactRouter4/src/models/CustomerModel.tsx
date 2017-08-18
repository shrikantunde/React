import { observable, action } from 'mobx';


let _nextId = 0
function nextId(){ _nextId++; return _nextId }

class Customer{
    id:number;
     name:string;
     mobile:string;

    constructor(){
       this.id=_nextId;
    }
}

export default Customer;
