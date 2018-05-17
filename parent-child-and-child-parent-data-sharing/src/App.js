import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './headerComponent';
import Content from './Content'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value : 100 
    }
  }
  Increment = () =>{
   this.setState({value : this.state.value+10})
  }
  Decrement = () => {
    this.setState({value :  this.state.value-10})
  }
  render() {
    const {value} = this.state;
    return (
      <div className="App">
        <div className="App-intro">
          {value} 
         <Content value={value} Increment={this.Increment} Decrement={this.Decrement}/>
        </div>
      </div>
    );
  }
}

// const App = (props) => {
//   return (
//     <div className="App">
//       <p className="App-intro">{props.data}
//         To get started, edit <code>src/App.js</code> and save to reload.
//              </p>
//     </div>
//   );
// }

export default App;
