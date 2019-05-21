import React, { Component } from 'react';
import Item from './TodoItem';
export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h2 style={{ display: 'grid' }}>To do's</h2>
        {this.props.info.map(e => {
          return (
            <div key={e.id}>
              <Item
                id={e.id}
                title={e.title}
                delete={() => {
                  this.props.Delete(e.id);
                }}
                edit={() => {
                  this.props.Edit(e.id);
                }}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
