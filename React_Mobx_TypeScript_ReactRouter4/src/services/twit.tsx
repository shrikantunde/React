import * as tweet from 'twitter';

let twitter=new tweet({
    consumer_key:'eWG2gkCzUQih29KUYxns5ZyFu',
    consumer_secret:'7o3ptTmw3himwlU24vi344xMTYUheMUAdnvMVtLRy9EzLTRmRl',
    access_token_key:'827457924507262976-0TfGpPGPthCdsl2CaOZSuqpq6R6s4xh',
    access_token_secret:'dcxCmyqWbOyyfor7R9gJBiwfaBaNuvLfZDunckvHqlhj0'
});

twitter.stream('statuses/sample',{},function(stream){
    console.log(stream);
})