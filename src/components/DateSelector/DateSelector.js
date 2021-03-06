import React, { Component, PropTypes } from 'react';

import './DateSelector.css';

class DateSelector extends Component {

  static propTypes = {
    handleChangeDate: PropTypes.func.isRequired,
  };

  static defaultProps = {

  }

  state = {
    day: 20,
    month: 4,
    year: 2017,
  }

  componentDidMount = () => {
    const now = new Date();

    this.setState({ day: now.getDate(), month: now.getMonth() + 1, year: now.getFullYear() });
  }

  handleChangeDate = (id) => {
    let { day, month, year } = this.state;
    const { handleChangeDate } = this.props;

    if (id === 1) {
      day += 10;
      if (day > 30) {
        day = 0;
        month += 1;
      }
    } else if (id === 2) {
      day += 1;
      if (day > 30) {
        day = 0;
        month += 1;
      }
    } else if (id === 3) {
      month += 10;
      if (month > 12) {
        month = 0;
        year += 1;
      }
    } else if (id === 4) {
      month += 1;
      if (month > 12) {
        month = 0;
        year += 1;
      }
    } else if (id === 5) {
      year += 1000;
      if (year > 9999) {
        day = 0;
        month = 0;
        year = 0;
      }
    } else if (id === 6) {
      year += 100;
      if (year > 9999) {
        day = 0;
        month = 0;
        year = 0;
      }
    } else if (id === 7) {
      year += 10;
      if (year > 9999) {
        day = 0;
        month = 0;
        year = 0;
      }
    } else if (id === 8) {
      year += 1;
      if (year > 9999) {
        day = 0;
        month = 0;
        year = 0;
      }
    }
    this.setState({ day, month, year }, () => handleChangeDate(day, month, year));
  }

  render() {
    const { day, month, year } = this.state;

    return (
      <div className="DateSelectorContainer">
        <div onClick={() => this.handleChangeDate(1)} className="selector" role="button">
          <p>{Math.floor(day / 10)}</p>
        </div>
        <div onClick={() => this.handleChangeDate(2)} className="selector" role="button">
          <p>{day % 10}</p>
        </div>
        <i className="fa fa-minus tiret" aria-hidden="true" />
        <div onClick={() => this.handleChangeDate(3)} className="selector" role="button">
          <p>{Math.floor(month / 10)}</p>
        </div>
        <div onClick={() => this.handleChangeDate(4)} className="selector" role="button">
          <p>{month % 10}</p>
        </div>
        <i className="fa fa-minus tiret" aria-hidden="true" />
        <div onClick={() => this.handleChangeDate(5)} className="selector" role="button">
          <p>{Math.floor(year / 1000)}</p>
        </div>
        <div onClick={() => this.handleChangeDate(6)} className="selector" role="button">
          <p>{Math.floor((year % 1000) / 100)}</p>
        </div>
        <div onClick={() => this.handleChangeDate(7)} className="selector" role="button">
          <p>{Math.floor((year % 100) / 10)}</p>
        </div>
        <div onClick={() => this.handleChangeDate(8)} className="selector" role="button">
          <p>{year % 10}</p>
        </div>
      </div>
    );
  }
}

export default DateSelector;
