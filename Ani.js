import React, { Component } from 'react'
import Ritika from "./Ritika"


export default class Ani extends Component {
 constructor(){
  super();
  this.state = {
    name : 'Animesh'
  }
 }

 getName(){
  this.setState({name:"Mrunal"})
 }
  render() {
    return (
      <div>
        <h1>hii ritika</h1>
        <h1>hii {this.state.name}</h1>
        <button onClick={() => this.getName()}>Submit</button>
        <Ritika/>
      </div>

    )
  }
}

