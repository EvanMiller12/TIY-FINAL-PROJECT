var React = require('react');
var Chart = require('chart.js');
var Bar = require('react-chartjs-2').Bar;

var User = ('../../models/user').User;
var DegreeCollection = require('../models/degree.js').DegreeCollection;

var BaseLayout = require('./layouts/base.jsx').BaseLayout;

class DegreeDetail extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    console.log('det', this.props.ascData)
    var difference = parseInt(this.props.bacAverage) - parseInt(this.props.ascAverage);
    var difAfterTen = difference * 10;
    var associateAvg = parseInt(this.props.ascAverage).toFixed(2);
    var bachelorsAvg = parseInt(this.props.bacAverage).toFixed(2);

    return(
      <div className="row">
        <div className="col-sm-5 col-sm-offset-1 degree-detail-contain">
          <div className="degree-detail-title">
            <h1>Average Salary</h1>
            <p>of 20 schools for the selected major 10 years after entry</p>
          </div>
          <div className="row">
            <div className="col-sm-3 col-sm-offset-1">
              <div className="program-level associate-level">
                <h4>Associate's Salary</h4>
              </div>
              <div className="avg-salary associate-salary">
                <h5>${ associateAvg }</h5>
              </div>
            </div>
            <div className="col-sm-3 col-sm-offset-1">
              <div className="dif-in-salaries">
                <label>Difference in Salaries = </label>
                <span>{ '-' + '$' + difference }</span>
                <label>Difference after 10 years = </label>
                <span>{ '-' + '$' + difAfterTen }</span>
              </div>
            </div>
            <div className="col-sm-3 col-sm-offset-1">
              <div className="program-level bachelor-level">
                <h4>Bachelor's Salary</h4>
              </div>
              <div className="avg-salary bachelor-salary">
                <h5>${ bachelorsAvg }</h5>
              </div>
            </div>
          </div>

          <BarChart
            ascAverage={ this.props.ascAverage }
            bacAverage={ this.props.bacAverage }
          />

          <div className="job-satisfaction-contain">
            <div className="job-satisfaction">
              <label>Job Satisfaction: </label>
              <span>rating</span>
            </div>
            <div className="rate">
              <label>Rate: </label>
              <span>Clickable star rating system</span>
            </div>
          </div>
        </div>
        <div className="col-sm-5 col-sm-offset-1">
          <div className="school-list-contain">
            <div className="list-title">
              <h1>Schools</h1>
              <p>Schools that the salary data is coming from</p>
            </div>
            <SchoolList ascData={ this.props.ascData } />
          </div>
        </div>
      </div>
    )
  }
}

class SchoolList extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    console.log("list", this.props.ascData)
    var schoolList;

    if(this.props.ascData) {
      schoolList = this.props.ascData.map((data, index) => {

        return(
          <li key={index}>
            <div className="school">
              <h5>{data['school.name']}</h5>
            </div>
            <div className="school-data">
              <div className="school-salary">
                <label>Average Salary:</label>
                <span>{data['2012.earnings.10_yrs_after_entry.median']}</span>
              </div>
              <div className="school-cost">
                <label>Average Cost:</label>
                <span>{data['2014.cost.avg_net_price.overall']}</span>
              </div>
              <div className="grad-rate">
                <label>Graduation Rate:</label>
                <span>{data['2014.completion.rate_suppressed.overall']}</span>
              </div>
              <div className="school-size">
                <label>School Size:</label>
                <span>{data['2014.student.size']}</span>
              </div>
            </div>
          </li>
        )
      })
    }


    return(
      <div className="school-list">
        <ul>
          {schoolList}
        </ul>
      </div>
    )
  }
}



class BarChart extends React.Component {
  render() {
    var salaryData = {
        labels: ["Associate Salary", "Bachelors Salary"],
        datasets: [{
            label: "salary in U.S dollars",
            data: [this.props.ascAverage, this.props.bacAverage],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    return(
      <Bar data={salaryData} />
    )
  }
}

module.exports = {
  DegreeDetail
}
