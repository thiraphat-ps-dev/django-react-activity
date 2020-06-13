import React, { Component } from 'react';
import './../styles/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default class Card extends Component {
  async deleteActivity() {
    await axios
      .delete('http://localhost:8000/api/activitys/' + this.props.id)
      .then((res) => {})
      .catch((err) => console.log(err));
    console.log('pass');
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }
  async completedActivity() {
    const activity = { title: this.props.title, description: this.props.description, completed: true, start_date: this.props.start, end_date: this.props.end };
    await axios
      .put(`http://localhost:8000/api/activitys/${this.props.id}/`, activity)
      .then((res) => {})
      .catch((err) => console.log(err));
    console.log('pass');
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

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
          {this.props.completed ? null : (
            <button
              type="button"
              onClick={() => {
                this.completedActivity();
              }}
            >
              Completed
            </button>
          )}
          <button
            type="submit"
            className="btn-delete"
            onClick={() => {
              this.deleteActivity();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
