import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';




class Ball extends Component {

  constructor(props){
  	super(props);
  	this.state = {};
  }


  render(){
    const { cssName , left , top , width} = this.props
    return(
      <div className={`ball ${cssName ? cssName : ''}`} style={{width ,left , top}} >
        <Link to="/">Ball</Link>
      </div>
    );
  }

}

export default Ball
