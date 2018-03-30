import React from 'react';
import TodoItem from './TodoItem';
import logo from '../logo.svg';
// import './css/App.css'


class App extends React.Component{
  state = {
    items: {
      "item1": "Some todo item",
      "item2": "Doe iets!"
    }
  };

  onKeyUpHandler = (e) => {
    // After "Enter" get the input field value and pass it on
    if(e.key === "Enter"){
      console.log(`Keyup ${e.currentTarget.value}`);
      // Get the input value
      const value = e.currentTarget.value;
      // Pass value to the addToDoItems function
      this.addToDoItems(`item${Date.now()}`, value);
      // Empty the input field
      e.currentTarget.value = "";
    }
  }

  addToDoItems = (key, value) => {
    console.log(`Add ${value}`);
    const items = { ...this.state.items };
    items[key] = value;
    this.setState({ items });
    return (
      <TodoItem key={key} value={value} />
    )
  }

  removeItem = (key) => {
    console.log(`remove ${key}`);
    //Get a copy of the current state
    const items = { ...this.state.items };
    // Remove the item from the state
    delete items[key];
    // Replace the current state with the altered copy of the state
    this.setState({ items });
  }

  render () {
    return(
      <div className="todolist">
        <div className="inputcontainer">
          <input type="text" name="inputcontainer__input" onKeyUp={this.onKeyUpHandler}/>
        </div>
        <ul className="todolist__list">
          {Object.keys(this.state.items).map(item => (
            <TodoItem
              key={item}
              index={item}
              value={this.state.items[item]}
              removeItem={this.removeItem}
            />
          ))}
        </ul>
      </div>
    );
  }
}


export default App;
