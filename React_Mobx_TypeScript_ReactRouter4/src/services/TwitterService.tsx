/**
 * This file is used to to call Product rest services
*/

import axios from 'axios';
import AppConfig from './../common/config/config';

const baseURI = AppConfig.baseUrl;

const tweet = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=skillsusari&count=30';

let AUTH_OBJ = {
oauth_consumer_key:"eWG2gkCzUQih29KUYxns5ZyFu",
oauth_nonce:"LRqwJu", 
oauth_signature:"1YQBKYWKdfrfmuMaDCWl2Ht8G%2F0%3D", 
oauth_signature_method:"HMAC-SHA1", 
oauth_timestamp:"1497690385", 
oauth_token:"827457924507262976-0TfGpPGPthCdsl2CaOZSuqpq6R6s4xh", 
oauth_version:"1.0"
}

export function getUserTweet() {
    // return axios.get(`${tweet}`, { headers: { 'Authorization':'OAuth oauth_consumer_key=\"eWG2gkCzUQih29KUYxns5ZyFu\",oauth_token=\"827457924507262976-0TfGpPGPthCdsl2CaOZSuqpq6R6s4xh\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1497690385\",oauth_nonce=\"LRqwJu\",oauth_version=\"1.0\",oauth_signature=\"1YQBKYWKdfrfmuMaDCWl2Ht8G%2F0%3D\"","description":""'}}).then(function(response){
    //     console.log(response.data)
    //     console.log(response.status)
    // });

     axios.defaults.headers.common['Authorization'] = AUTH_OBJ;

    return axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=skillsusari&count=30').then(function(resp){console.log(resp);}).catch(function(e){console.log(e)});
}

export function Login(callback) {
    let data=[];

    axios.get('https://raw.githubusercontent.com/awasekhirni/angular2seed/master/ebaydata.json').then(function(response){
            callback(response.data);
        }).catch(function(response){
            data=[];
        });
    
    return data;
}

export function getTweets(callback) {
    let data=[];

    axios.get('https://raw.githubusercontent.com/awasekhirni/angular2seed/master/ebaydata.json').then(function(response){
            callback(response.data);
        }).catch(function(response){
            data=[];
        });
    
    return data;
}


// let AUTH_OBJ = {
// oauth_consumer_key:"MwKdfg565reHKiFrFItS3P",
// oauth_nonce:"47c9e7b5ee34543dfc9d35c22abe32", 
// oauth_signature:"ySkNH9c%2Fv2c565465tgiOakh0JYeVM%3D", 
// oauth_signature_method:"HMAC-SHA1", 
// oauth_timestamp:"1473647719", 
// oauth_token:"1513607755-3MWvh70334rfdf45WifGdX254EhD4AermoW8Pt", 
// oauth_version:"1.0"
// };

// axios.defaults.headers.common['Authorization'] = AUTH_OBJ;

// axios.get('https://api.twitter.com/1.1/trends/place.json', { id:  1 }).then(function(resp){console.log(resp);}).catch(function(e){console.log(e)});