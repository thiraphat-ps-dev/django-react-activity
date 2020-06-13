import React, { Component } from 'react';
import './../styles/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
export default class Card extends Component {
  render() {
    return (
      <div className={`activity-card ${this.props.index === 0 ? 'first' : ''}`}>
        <div className="card-text">
          <h1 className="activity-name">{this.props.title}</h1>
          <span className="date">
            <FontAwesomeIcon icon={faCalendarCheck} /> {this.props.start} - {this.props.end}
          </span>
        </div>
        <div className="card-tools">
          {this.props.completed ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faCircle} />}
          {this.props.completed ? null : <button type="button">Completed</button>}
        </div>
      </div>
    );
  }
}
