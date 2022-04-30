import React, { Component } from "react";
import '../css/faq.css';
import {data} from './Data';
import Nav from './Header';
class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = { accordions: data};
  }
  componentDidMount() {
    this.setPanelHeight(".panel-1", false);
  }
  handleClick = (currentAccordion) => {
    const newAccordions = this.state.accordions;
    newAccordions.forEach((accordion) => {
      if (currentAccordion.id === accordion.id) {
        accordion.state = "active";
        this.setPanelHeight(`.panel-${accordion.id}`, false);
      } else {
        accordion.state = "inactive";
        this.setPanelHeight(`.panel-${accordion.id}`, true);
      }
    });
    this.setState({ accordions: newAccordions });
  };
  setPanelHeight(selector, close) {
    const panel = document.querySelector(`${selector}`);
    panel.style.maxHeight = close === true ? null : panel.scrollHeight + "px";
  }
  render() {
    const { accordions } = this.state;
    return (
        <div>
            <Nav/><br/>
            <div className="container">
            <h2 className="text-center">Frequently Asked Questions</h2>
            <br/>
            
      <React.Fragment>
        {accordions.map((accordion, index) => {
          return (
            <React.Fragment key={index}>
              <button
                className={`accordion ${accordion.state}`}
                onClick={() => this.handleClick(accordion)}
              >
                {accordion.name}
              </button>
              <div className={`panel panel-${accordion.id}`}>
                {accordion.content()}
              </div>
            </React.Fragment>
            
          );
        })}
      </React.Fragment>
      </div>
      <h3 class="mail">If other than this you have any query then <a href="mailto:electricitysystem2021@gmail.com">Email Us</a></h3>
      </div>
    );
  }
}

export default FAQ;