import * as React from 'react';
import { inject, observer } from 'mobx-react';
import {getUserTweet} from './../services/TwitterService';


@observer
export default class PrivateComponenet extends React.Component<any, any> {
    state

    constructor(props) {
        super(props);
        getUserTweet();
    }

    render() {
        
        return (
            <div className='pageContent'>
               Private componenet
            </div>
        );
    }
}