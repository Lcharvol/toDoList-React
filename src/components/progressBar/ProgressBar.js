import React, { Component, PropTypes } from 'react';

import './ProgressBar.css';

class ProgressBar extends Component {

  static PropTypes = {
    progress: PropTypes.number.isRequired,
    handleChangeProgress: PropTypes.func.isRequired,
    fore: PropTypes.string.isRequired,
    since: PropTypes.string.isRequired,
  }

  state = {
    progDrag: false,
    startDrag: 0,
    progress: 0,
    theoreticalProgress: 0,
  }


  componentDidMount = () => {
    window.addEventListener('mouseup', this.dragOff, false);
    let { fore, since } = this.props;

    fore = fore.split('/');
    since = since.split('/');
    const now = new Date();
    const start = new Date(`${since[2]}/${since[1]}/${since[0]}`);
    const end = new Date(`${fore[2]}/${fore[1]}/${fore[0]}`);


    const dayStart = start.getDate() + (start.getMonth() * 30) + (start.getFullYear() * 365);
    const dayNow = now.getDate() + (now.getMonth() * 30) + (now.getFullYear() * 365);
    const dayEnd = end.getDate() + (end.getMonth() * 30) + (end.getFullYear() * 365);

    if (dayNow > dayEnd) {
      this.setState({ theoreticalProgress: 100 });
    } else {
      const prog = 100 - (100 * ((dayEnd - dayNow) / (dayEnd - dayStart)));
      this.setState({ theoreticalProgress: prog });
    }
  }


  updateProgress = (e) => {
    const { handleChangeProgress } = this.props;

    if (this.state.progDrag === true) {
      let percentage = ((e.screenX - (this.state.startDrag)) / (window.innerWidth / 150));

      if (percentage < 0) { percentage = 0; }
      if (percentage > 100) { percentage = 100; }
      this.setState({ progress: percentage });
    }
    handleChangeProgress(this.state.progress);
  }

  dragOn = (e) => {
    this.setState({ progDrag: true });
    if (this.state.startDrag === 0) { this.setState({ startDrag: e.screenX }); }
  }

  dragOff = () => { this.setState({ progDrag: false }); }

  setProgressTextColor = () => {
    const { progress } = this.state;

    return (100 + (Math.round(progress) * 1.4));
  }

  render() {
    const { progress, theoreticalProgress } = this.state;

    window.addEventListener('mousemove', this.updateProgress, false);

    let barStyle = {
      width: `${progress}%`,
    };

    const theoreticalBarStyle = {
      width: `${theoreticalProgress}%`,
    }

    const progressTextStyle = {
      color: `rgb(${this.setProgressTextColor()}, 92, 67`,
    };

    if (progress < 3) { barStyle = { width: '3%' }; }

    return (
      <div className="progressElem">
        <div className="progressBar">
          <div className="theoreticalProgressBar" style={theoreticalBarStyle} />
          <div className="progressBarInner" style={barStyle}>
            <div
              className="cursor"
              role="switch"
              aria-checked="true"
              onMouseDown={this.dragOn}
              onMouseUp={this.dragOff}
            />
          </div>
        </div>
        <p style={progressTextStyle} className="progressScore">{Math.round(progress)}%</p>
      </div>
    );
  }
}

export default ProgressBar;
