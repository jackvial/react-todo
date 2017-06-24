import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div className="list">
        <div className="list-item">
            <h3>Item 1</h3>
            <p>some randon stuff</p>
        </div>
        <div className="list-item">
            <h3>Item 2</h3>
            <p>sklfsdklfjsdfljslkfjsdlfjsdfljsdlfkjsdlkfjs</p>
        </div>
        <div className="list-item">
            <h3>Item 3</h3>
            <p>sklfsdklfjsdfljslkfjsdlfjsdfljsdlfkjsdlkfjs</p>
        </div>
      </div>
    );
  }
}

export default List;
