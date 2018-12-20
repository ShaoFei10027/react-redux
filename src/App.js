import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addv, delv } from './index.redux'
import './App.css';

class App extends Component {
  render() {
    const { num, addv, delv } = this.props
    return (
      <div className="App">
        {num}
        <button onClick={addv}>add</button>
        <button onClick={delv}>del</button>
      </div>
    );
  }
}

const mpaStateToProps = (state)=>{
  return {
    num : state
  }
}


const actionCreators = { addv, delv }
App = connect(mpaStateToProps, actionCreators)(App)
export default App;
