import React, { Component } from 'react';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
// showing vs-code github setup
class App extends Component {
  state = {
    items: [],
    item: '',
    buttonColor: 'fluid ui blue button',
    buttonWord: 'Add'
  };

  handleSubmit = e => {
    e.preventDefault();
    const newObj = { id: uuid(), title: this.state.item };
    this.setState({
      items: [...this.state.items, newObj],
      item: ''
    });
  };
  handleChange = e => {
    this.setState({
      item: e
    });
  };
  handleDelete = id => {
    this.setState({
      items: this.state.items.filter(e => {
        return e.id !== id;
      })
    });
  };
  handleEdit = () => {
    console.log('edited');
  };

  handleClear = () => {
    this.setState({
      items: []
    });
  };

  handleTitle() {}

  render() {
    return (
      <div>
        <div className="ui raised very padded text container segment">
          <TodoInput
            submit={this.handleSubmit}
            change={this.handleChange}
            item={this.state.item}
            buttonColor={this.state.buttonColor}
            buttonWord={this.state.buttonWord}
          />
          <div className="ui divider" />

          <TodoList info={this.state.items} delete={this.handleDelete} />
          <div className="ui divider" />

          <button className="fluid ui red button" onClick={this.handleClear}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default App;
