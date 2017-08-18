/**
 * This file is used to to call Product rest services
*/

import axios from 'axios';
import AppConfig from './../common/config/config';

const baseURI = AppConfig.baseUrl;

export function getProducts(callback) {
    let data=[];

    axios.get('https://raw.githubusercontent.com/awasekhirni/angular2seed/master/ebaydata.json').then(function(response){
            callback(response.data);
        }).catch(function(response){
            data=[];
        });
    
    return data;
}