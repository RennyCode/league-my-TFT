import React from 'react';
import {Link} from 'react-router-dom';

const chosen = '#fff79e';
const unchosen = '#b8b38b';

export default class ToggleLink extends React.Component{
  constructor(props){
    super(props);
    this.state = { color1: chosen, color2: unchosen, mode: true };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(event){

    const id = event.target.id;

    if(this.state.mode === true && id === 'toOrigin')
        this.setState({ color1: unchosen, color2: chosen,mode: false })
        
    else if(id === 'toClass')
    
      this.setState({ color2: unchosen, color1: chosen, mode: true })
  }
  
  render(){
    return(
      <div >
            <Link className='classes' id='toClass' style={{color: this.state.color1}} onClick={this.changeColor} to="/">classes</Link> 
            <Link className='origins' id='toOrigin' style={{color: this.state.color2}} onClick={this.changeColor} to="/page2">origins</Link>
      </div>
    )
  }
}
