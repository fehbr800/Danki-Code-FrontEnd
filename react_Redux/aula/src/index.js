import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  axios from 'axios';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';


const initalStates = {count:40, title:'Danki Code'};


function reducer (state = initalStates, action){
  if(action.type == 'INCREMENT'){
      return{count:state.count + 1, title:state.title}
  }else if(action.type == 'ALTERAR_TITULO'){
    axios.get('https://dummyjson.com/posts').then((response) =>{
      //console.log(response)
      store.dispatch({type:'ALTERAR_TITULO_FINAL',title:response.data[1].title})
    })
  }else if(action.type == 'ALTERAR_TITULO_FINAL'){
      return {count: state.count,title:action.title};
  }
  
  return state;
 
}

const store = createStore(reducer);



const App = () =>(
  <Provider store={store}>
  <Counter/>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'))