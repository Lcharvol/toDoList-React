import React, { Component, PropTypes } from 'react';

import './toDoList.css';

class toDoList extends Component {

  static propTypes = {
    todo: PropTypes.string.isRequired,
    since: PropTypes.string.isRequired,
    fore: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
  };

  state = {
    checked: false,
    trashfocus: false,
  }

  gocheck = () => {
    if (this.state.checked === false) { this.setState({ checked: true }); } else {
      this.setState({ checked: false });
    }
  };

  handletrashfocus = () => {
    if (this.state.trashfocus === false) { this.setState({ trashfocus: true }); } else {
      this.setState({ trashfocus: false });
    }
  };

  render() {
    const { props: { todo, since, fore, index, remove } } = this;
    const { checked } = this.state;
    const { trashfocus } = this.state;

    return (
      <div className="toDoList">
        <div className="toDoListElem">
          <div className="checkbox" onClick={this.gocheck}>
            <i className={checked ? 'fa fa-check check' : ''} aria-hidden="true" />
          </div>
          <p className="to_do">{todo}</p>
          <p className="since">Since: {since}</p>
          <p className="fore">For: {fore}</p>
          <div className="delete">
            <i
              className={trashfocus ? "fa fa-trash poubelle" : "fa fa-trash-o poubelle"}
              aria-hidden="true"
              onMouseEnter={this.handletrashfocus}
              onMouseLeave={this.handletrashfocus}
              onClick={() => remove(index)}
              >
            </i>
          </div>
        </div>
      </div>
    );
  }
}

export default toDoList;
