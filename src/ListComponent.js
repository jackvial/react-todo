import React, { Component } from 'react';
import ListItem from './ListItemComponent';

let todos = [
    {
        title: 'One',
        content: 'bananas'
    },
    {
        title: 'Two',
        content: 'cheese burger'
    },
    {
        title: 'Three',
        content: 'apples'
    }
];

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: todos
        };
    }
    addTodo(e) {
        e.preventDefault();
        console.log(e);
    }
    render() {
        let items = this.state.todos.map((item, index) => {
            return <ListItem key={index} title={item.title} content={item.content} />;
        });
        return (
            <div>
                <input type="text" value={this.state.newTodo} />
                <button type="button" onClick={this.addTodo}>Add</button>
                <div className="list">
                    {items}
                </div>
            </div>
        );
    }
}

export default List;
