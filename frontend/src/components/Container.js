import React, { Component } from 'react';
import './../styles/main.scss';
import Card from './Card';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activityList: [],
      page: [],
      modal: false,
    };
  }
  componentDidMount() {
    this.refreshList();
  }

  refreshList = async () => {
    await axios
      .get('http://localhost:8000/api/activitys/')
      .then((res) => {
        const pages = [];
        for (let i = 0; i < parseInt(res.data.page); i++) {
          pages.push(i + 1);
        }
        console.log('psss', pages);
        this.setState({ activityList: res.data, page: pages });
      })
      .catch((err) => console.log(err));
  };
  closeModal() {
    let card = document.querySelector('.modal-background');
    let modal = document.querySelector('.modal-container');
    let c = card ? card.classList.remove('modal-open') : null;
    let m = modal ? modal.classList.remove('-open') : null;
  }
  openModal() {
    let card = document.querySelector('.modal-background');
    let modal = document.querySelector('.modal-container');
    let c = card ? card.classList.add('modal-open') : null;
    let m = modal ? modal.classList.add('-open') : null;
  }
  render() {
    console.log(this.state.activityList.results);

    return (
      <div>
        <div className="activity-container">
          <div className="header-text">
            <div
              className="btn-add"
              onClick={() => {
                this.openModal();
              }}
            >
              <FontAwesomeIcon icon={faPlusSquare} />
              ADD
            </div>

            <h1>Activity List</h1>
          </div>
          <div className="card">
            {this.state.activityList.results
              ? this.state.activityList.results.map((activity, i) => (
                  <Card
                    key={i}
                    id={activity.id}
                    index={i}
                    title={activity.title}
                    description={activity.description}
                    completed={activity.completed}
                    start={activity.start_date}
                    end={activity.end_date}
                  />
                ))
              : null}
          </div>

          <div className="footer">
            <div
              className="previous"
              onClick={() => {
                axios
                  .get(this.state.activityList.links.previous)
                  .then((res) => {
                    const pages = [];
                    for (let i = 0; i < parseInt(res.data.page); i++) {
                      pages.push(i + 1);
                    }
                    console.log('psss', pages);
                    this.setState({ activityList: res.data, page: pages });
                  })
                  .catch((err) => console.log(err));
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            {this.state.activityList.results ? (
              <div className="page">
                {this.state.activityList.page} / {Math.ceil(this.state.activityList.total / 5)}
              </div>
            ) : null}
            <div
              className="next"
              onClick={() => {
                axios
                  .get(this.state.activityList.links.next)
                  .then((res) => {
                    const pages = [];
                    for (let i = 0; i < parseInt(res.data.page); i++) {
                      pages.push(i + 1);
                    }
                    console.log('psss', pages);
                    this.setState({ activityList: res.data, page: pages });
                  })
                  .catch((err) => console.log(err));
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>

        <Modal name={'Add Activity'} />
      </div>
    );
  }
}
