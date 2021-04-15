import React, { Component } from "react";

class Awards extends Component {
  render() {
    return (
      <div id="awards" className="columns cocok is-vcentered">
        <div className="column auto">
          <div className="card">
            <div className="card-content">
              <p class="card-header-title">Awards</p>
              <ul>
                <li>* 2nd place at Coral Springs Big Data Hackathon (out of 150+ participants)</li>
                <li>* Java, Python, C++, Hadoop ecosystem, and MySQL</li>
                <li>* Data cleansing, modeling, and mining</li>
                <li>* Machine learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Awards;
