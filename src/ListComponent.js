import React, { Component } from 'react';
import ListItem from './ListItemComponent'

class List extends Component {
  render() {
    console.log(this.props);
    let todos = this.props.todos;
    let items = todos.map((item, index) => {
        return (
            <ListItem key={index} title={item.title} content={item.content}/>
        );
    });
    return (
      <div className="list">
        {items}
      </div>
    );
  }
}

export default List;
