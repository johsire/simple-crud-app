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
    let name = this.refs.name.value;
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

    // Resetting our form 
    this.refs.myForm.reset();

    // focusing in name field
    this.refs.name.focus();
  };

  // Creating our Remove function
  // We pass our index from the data & 
  // use SPlice() method to delete data in our object &
  // update our state - set new state
  focusRemove = (index) => {
    let data = this.state.data;
    data.splice(index, 1);
    this.setState({ data: data 
  })
    // Resetting our form 
    this.refs.myForm.reset();

    // focusing in name field
    this.refs.name.focus();
  }


  render() {
    let data = this.state.data;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="your name" className="formField" />
          <input type="text" ref="address" placeholder="your address" className="formField" />
          <button onClick={this.focusSubmit} className="myButton">Submmit </button>
        </form>
        <pre>
        {/* Using our function to loop through our data */}
        {data.map((inputData, index) =>
          <li key={index} className="myList">
          {index + 1}. {inputData.name}, {inputData.address}
          <button onClick ={ () => this.focusRemove(index)} className="myButton">Remove </button>
          <button onClick ={ () => this.focusEdit(index)} className="myButton">Edit </button>
          </li>
        )}
        </pre>
      </div>
    );
  }
}

export default App;
