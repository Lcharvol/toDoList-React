import React, { Component } from 'react';

import './subtaskslist.css';

class SubtasksList extends Component {

  state = {
    checked: false,
    trashfocus: false,
  }

  gocheck = () => {
    if (this.state.checked === false) {
      this.setState({ checked: true });
    } else {
      this.setState({ checked: false });
    }
  }

  handletrashfocus = () => {
    if (this.state.trashfocus === false) {
      this.setState({ trashfocus: true });
    } else {
      this.setState({ trashfocus: false });
    }
  }

  render() {
    const { checked, trashfocus } = this.state;

    return (
      <div className="subtaskslist">
        <div role="checkbox" aria-checked="false" className="checkbox" onClick={this.gocheck}>
          <i className={checked ? 'fa fa-check check' : ''} aria-hidden="true" />
        </div>
        <div className="delete">
          <i
            className={trashfocus ? 'fa fa-trash poubelle' : 'fa fa-trash-o poubelle'}
            aria-hidden="true"
            onMouseEnter={this.handletrashfocus}
            onMouseLeave={this.handletrashfocus}
            // onClick={() => remove(index)}
          />
        </div>
      </div>
    );
  }
}

export default SubtasksList;
