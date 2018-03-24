import React from 'react';
import ListItem from 'ListItem';

class App extends React.component{
  state = {
    items: {}
  };

  buttonClickHandler = () => {
    // get the input field value and add it to the state
  }

  render () {
    return(
      <div className="input">
        <input type="text" name="newItem"/>
        <button onClick={this.buttonClickHandler}>🡒</button>
      </div>
      <ul className="main">
        {Object.keys(this.state.items).map(<ListItem key={key}  />)}
      </ul>
    );
  }
}


export default App;
