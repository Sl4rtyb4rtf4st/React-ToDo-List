import React from 'react';


class TodoItem extends React.Component{

  render() {
    return(
      <li className="todolist__list__item">
        {this.props.value}
        <span className="todolist__list__remove-item" onClick={() => this.props.removeItem(this.props.index)}>&times;</span>
      </li>
    )
  }
}


export default TodoItem;
