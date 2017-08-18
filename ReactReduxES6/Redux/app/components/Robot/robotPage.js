import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as robotActions from '../../actions/robotActions';

class RobotPage extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    const {robots,actions} = this.props;
    console.log("Robot page");
    robots.map((robot) =>{
      //stage1
       if(robot.configuration.hasSentience && robot.statuses[0] =='on fire'){
         actions.postrobot(robot.id)
         console.log(robot.configuration.hasSentience)
       }
      //stage2
       if(robot.configuration.numberOfRotors<3&&robot.configuration.numberOfRotors>8){
         actions.postrecycle(robot.id)
       }
       else if(robot.configuration.hasWheels&&robot.configuration.hasTracks){
         actions.postrecycle(robot.id)
       }
       else if(robot.configuration.hasWheels==true&&robot.statuses[0] =='rusty'){
         actions.postrecycle(robot.id)
       }
       else if(robot.configuration.hasSentience&&robot.statuses[0] =='loose screws'){
         actions.postrecycle(robot.id)
       }

       //stage3

       let stage1=actions.getRobot()
       console.log('stage1',stage1)


      });
return (
      <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Quality Inspection in progress</th>
          </tr>
        </thead>
        <tbody>{robots.map((robot) => <tr key={robot.id}><td>{robot.name}</td></tr>)}</tbody>
      </table>
      </div>
    );
  }
}

function mapStateToProps({robots}) {
  console.log('robots',robots)
  return {
    robots: robots
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(robotActions, dispatch)

  };
}

export default connect(mapStateToProps,mapDispatchToProps)(RobotPage);