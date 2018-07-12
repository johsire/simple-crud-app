import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      title: 'Simple React CRUD App',
      act: 0,
      index: '',
      data: []
    }
  }

  componentDidMount() {
    this.refs.name.focus();
  }

  focusSubmit = (e) => {
    e.preventDefault();
    console.log('try');

    // Variables for receiving/ capturing values from our form
    let data = this.state.data;
    let name = this. refs.name.value;
    let address = this.refs.address.value

    // Varibales for holding the values are placed in an object;
    let newData = {
      name, address
    }

    data.push(newData);

    // Set our new State in an object;
    this.setState({
      data: data
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  };



  render() {
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="your name" className="formField" />
          <input type="text" ref="address" placeholder="your address" className="formField" />
          <button onClick={this.focusSubmit} className="myButton">Submmit </button>
        </form>
        <pre>
        
        </pre>
      </div>
    );
  }
}

export default App;
