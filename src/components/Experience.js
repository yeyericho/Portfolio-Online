import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div id="experience" className="columns cocok is-vcentered">
        <div className="column auto">
          <div className="card">
            <div className="card-content">
              <p class="card-header-title">Experience</p>
                <ul>
                  <li>River Tech, Data Scientist</li>
                  <li>* Built fuzzy matching algorithm using k-nearest neighbors to identify non-exact matching duplicates</li> 
                  <li>* Designed and developed real time recommendation engine to rank sales leads for upsell opportunities</li>
                  <li>* Refined personalization algorithms for 1M+ customers on web and mobile</li>
                  <li>* Transformed raw data into MySQL with custom-made ETL application to prepare unruly data for machine learning</li>
                </ul>
                <ul>
                  <li>Retail Ocean, Data Scientist</li>
                  <li>* Leveraged 200M+ tweets to develop sentiment analysis model that helped improve sales and marketing strategies</li>
                  <li>* Used Python and Spark to scrape, clean, and analyze large datasets</li>
                  <li>* Helped build tools for detecting botnets with machine learning and data mining</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
