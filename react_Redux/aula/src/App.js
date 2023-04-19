import React from "react";
import {createStore} from 'redux';
import './App.css';

const reducer = function(state,action){
 if(action.type === "INC"){
  return state + 1;
 }
 return state;
  }

const store = createStore(reducer, 0);

store.subscribe(function(){
  console.log("O estado mudou!", store.getState())
})

store.dispatch({type: 'INC', payload:3})

class App extends React.Component{

constructor(props){
  super(props);
  this.state = {count:0}
}

increment = () =>{
  this.setState({
    count: this.state.count + 1
  })
}

decrement = () =>{
  this.setState({
    count: this.state.count - 1
  })
}

render(){
  return(
    <div>
      <button onClick={this.decrement}>decrement</button>
      <button onClick={this.increment}>Incremento</button>
    <h2>{this.state.count}</h2>
    </div>
  )
}

}

export default App;