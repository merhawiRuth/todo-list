import React, { Component } from 'react';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { Button, Dialog, DialogContent, DialogActions } from 'react-mdl';
// showing vs-code github setup
class App extends Component {
  state = {
    items: [],
    item: '',
    openDialog: false
  };

  handleSubmit = e => {
    e.preventDefault();

    const newObj = { id: uuid(), title: this.state.item };
    if (this.state.item !== '') {
      this.setState({
        items: [...this.state.items, newObj],
        item: '',
        openDialog: false
      });
    }
  };
  handleChange = e => {
    this.setState({
      item: e
    });
  };
  handleDelete = id => {
    console.log(id);

    this.setState({
      items: this.state.items.filter(e => {
        return e.id !== id;
      })
    });
  };
  handleEdit = id => {
    console.log(id);
    const filteredItems = this.state.items.filter(e => {
      return e.id !== id;
    });
    const selectedItem = this.state.items.find(item => {
      return item.id === id;
    });
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      openDialog: true
    });
  };

  handleClear = () => {
    this.setState({
      items: []
    });
  };

  render() {
    return (
      <div style={{ margin: '5rem 0rem 0rem 0rem' }}>
        <div className="ui raised very padded text container segment">
          <TodoInput
            submit={this.handleSubmit}
            change={this.handleChange}
            item={this.state.item}
            handleBtn={this.handleBtn}
          />
          <div className="ui divider" />

          <TodoList
            info={this.state.items}
            Delete={this.handleDelete}
            Edit={this.handleEdit}
          />
          <div className="ui divider" />
          {this.state.openDialog === true && (
            <div>
              <form onSubmit={this.handleSubmit}>
                <Dialog open={this.state.openDialog}>
                  <DialogContent>
                    <div className="field">
                      <div className="ui left icon input">
                        <input
                          type="text"
                          name="title"
                          value={this.state.item}
                          onChange={this.handleChange}
                          placeholder="what do you want to do?"
                        />
                      </div>
                    </div>
                  </DialogContent>
                  <DialogActions>
                    <Button type="submit">edit</Button>
                  </DialogActions>
                </Dialog>
              </form>
            </div>
          )}
          <button className="fluid ui red button" onClick={this.handleClear}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default App;
