import React, { Component } from 'react';

export default class TodoInput extends Component {
  onSubmit = e => {
    this.setState({ title: e.target.value });
  };
  render() {
    return (
      <div>
        <form className="ui large form" onSubmit={this.props.submit}>
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon" />
              <input
                type="text"
                name="title"
                value={this.props.item}
                onChange={e => this.props.change(e.target.value)}
                placeholder="what do you want to do?"
              />
            </div>
          </div>
          <button className={this.props.buttonColor} type="submit">
            {this.props.buttonWord}
          </button>
        </form>
      </div>
    );
  }
}
