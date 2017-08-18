import * as React from 'react';
import { inject, observer } from 'mobx-react';


@observer
export default class Roles extends React.Component<any, any> {
    state

    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div className='pageContent'>
               Show user roles based registration
               <select className="selectpicker">
                    <option>Mustard</option>
                    <option>Ketchup</option>
                    <option>Relish</option>
                </select>
            </div>
        );
    }
}