import React, { Component, PropTypes } from 'react';

import SubtasksList from '../subtasksList';
import './subtasks.css';

class Subtasks extends Component {

  static propTypes = {
    subtasks: PropTypes.array.isRequired,
  };

  static defaultProps = {
    subtasks: [],
  };

  state = {
    subtasks: [],
  };

  addnewsubtask = () => {
    const { subtasks } = this.state;

    this.setState({ subtasks: [{ coucou: 'salut', ...subtasks }, ...subtasks] });
  }

  componentDidMount() {
    const { subtasks } = this.props;

    this.setState({ subtasks });
    console.log(subtasks);
  }

  remove = (index) => {
    const { subtasks } = this.state;

    this.setState({ subtasks: subtasks.filter((sub, index) => index !== index) });
  }

  render() {
    const { subtasks } = this.state;

    return (
      <div className="subtasks_main">
        <div className="addsubtasks">
          <div className="addsubtasksbutton" onClick={this.addnewsubtask}>
            <i className="fa fa-plus plustask" aria-hidden="true" />
          </div>
          <p>Add a new subtask</p>
        </div>
        {Object.keys(subtasks).map((task, i) => (
          <SubtasksList
            key={i}
            index={i}
            task={task}
            remove={this.remove}
          />
        ))}
      </div>
    );
  }
}

export default Subtasks;
