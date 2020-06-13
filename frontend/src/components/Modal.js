import React, { Component } from 'react';
import './../styles/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faUserCheck, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      start_date: '',
      end_date: '',
    };
  }
  closeModal() {
    let card = document.querySelector('.activity-container');
    let modal = document.querySelector('.modal-container');
    let c = card ? card.classList.remove('modal-open') : null;
    let m = modal ? modal.classList.remove('-open') : null;
  }

  render() {
    return (
      <div className="modal-container">
        <div className="modal-header">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => {
              this.closeModal();
            }}
          />
          <FontAwesomeIcon icon={faCalendarPlus} /> Add Activity
        </div>
        <div className="modal-content">
          <div className="input">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Input you activity title"
              onChange={(e) => {
                this.setState({ title: e.target.value });
              }}
              value={this.state.title}
            />
          </div>
          <div className="input">
            <label htmlFor="title">Description</label>
            <textarea
              type="text"
              name="title"
              placeholder="Input you activity description"
              onChange={(e) => {
                this.setState({ description: e.target.value });
              }}
              value={this.state.description}
            />
          </div>
          <div className="input">
            <label htmlFor="title">Start-Date</label>
            <input
              type="date"
              name=""
              id=""
              value={this.state.start_date}
              onChange={(e) => {
                this.setState({ start_date: e.target.value });
              }}
            />
          </div>
          <div className="input">
            <label htmlFor="title">End-Date</label>
            <input
              type="date"
              name=""
              id=""
              value={this.state.end_date}
              onChange={(e) => {
                this.setState({ end_date: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn-cancel"
            onClick={() => {
              this.closeModal();
            }}
          >
            Cancel
          </button>
          <button type="button" className="btn-confirm">
            Confirm
          </button>
        </div>
      </div>
    );
  }
}
