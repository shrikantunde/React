import {observable} from 'mobx';

class PaginationStore{

    @observable paginationColumnList=["name","address"];
  
    constructor()
    {
       
    }

    updateState(key,value){
        
    }

}

let page=new PaginationStore();

export default page;