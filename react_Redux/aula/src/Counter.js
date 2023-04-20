import React from "react";
import { connect } from 'react-redux';
import './App.css';


class Counter extends React.Component{

constructor(props){
  super(props);
  this.state = {count:0}
}

increment = () =>{
  this.props.dispatch({'type':'INCREMENT'})
  
}

alterarTitulo = () =>{
  
  this.props.dispatch({'type':'ALTERAR_TITULO'})
 
}

render(){
  return(
    <div>
      <button onClick={this.alterarTitulo}>alterar Titulo</button>
      <button onClick={this.increment}>Incremento</button>
    <h2>{this.props.count}</h2>
    <h3>{this.props.title}</h3>
    </div>
  )
}

}

const mapStateToProps = state => ({count:state.count,title:state.title});
export default connect(mapStateToProps) (Counter);