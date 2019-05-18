import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    return (
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">
              {this.props.title}
              <div style={{ float: 'right' }}>
                <i
                  onClick={() => {
                    this.props.delete(this.props.id);
                  }}
                  className="edit outline icon"
                />
                <i
                  onClick={() => {
                    this.props.delete(this.props.id);
                  }}
                  className=" trash alternate icon"
                />
              </div>
            </div>

            <div className="meta">Today at 3:00PM</div>
          </div>
        </div>
      </div>
    );
  }
}
